const connection = require('../../database/connection');

class BookProfilePhotosAndVideosController {
  static async get(request, response) {
    const bookId = String(request.params.bookId);

    if( bookId === 'undefined' || bookId === '' ) {
      return response.status(404).json({ message: 'Id do livro necessário para a busca.' })
    }

    const videosResults = await connection('videos')
      .select('videos.*')
      .join('books', 'books.id', 'videos.bookId')
      .where('books.id', '=', bookId);

    const photosResults = await connection('photos')
      .select('photos.*')
      .join('books', 'books.id', 'photos.bookId')
      .where('books.id', '=', bookId);

    let results = [...videosResults, ...photosResults];
    results = results.sort((a, b) => a.created_at < b.created_at);

    return response.status(200).json(results);
  }
}

module.exports = BookProfilePhotosAndVideosController;