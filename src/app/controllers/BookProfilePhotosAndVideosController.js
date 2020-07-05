const connection = require('../../database/connection');

class BookProfilePhotosAndVideosController {
  static async get(request, response) {
    const bookId = String(request.params.bookId);
    const page = String(request.query.page || 1);

    if( bookId === 'undefined' || bookId === '' ) {
      return response.status(404).json({ message: 'Id do livro necessário para a busca.' })
    }

    let countVideosResults = await connection('videos')
      .join('books', 'books.id', 'videos.bookId')
      .join('users', 'users.id', 'videos.userId')
      .where('books.id', '=', bookId)
      .count();

    let countPhotosResults = await connection('photos')
      .join('books', 'books.id', 'photos.bookId')
      .join('users', 'users.id', 'photos.userId')
      .where('books.id', '=', bookId)
      .count()

    let videosResults = await connection('videos')
      .select([
        'videos.id as videoId',
        'videos.bookId',
        'videos.videoName',
        'videos.likes',
        'videos.created_at',
        'users.name AS username', 
        'users.id as userId'
      ])
      .join('books', 'books.id', 'videos.bookId')
      .join('users', 'users.id', 'videos.userId')
      .where('books.id', '=', bookId)
      .limit(5)
      .offset( ( page - 1 ) * 5 );

    let photosResults = await connection('photos')
      .select([
        'photos.id as photoId',
        'photos.bookId',
        'photos.photoName',
        'photos.likes',
        'photos.created_at',
        'users.name AS username', 
        'users.id as userId'
      ])
      .join('books', 'books.id', 'photos.bookId')
      .join('users', 'users.id', 'photos.userId')
      .where('books.id', '=', bookId)
      .limit(5)
      .offset( ( page - 1 ) * 5 );
    
    let countResult = countVideosResults[0]['count(*)'] + countPhotosResults[0]['count(*)'];

    let results = [...videosResults, ...photosResults];
    results = results.sort((a, b) => a.created_at < b.created_at);

    response.header('X-total-count',countResult)
    return response.status(200).json(results);
  }
}

module.exports = BookProfilePhotosAndVideosController;
