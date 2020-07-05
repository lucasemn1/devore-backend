const connection = require('../../database/connection');

class BookController {
  static async get(request, response) {
    const bookId = String(request.params.bookId);

    if( bookId === 'undefined' || bookId === '' ) {
      return response.status(404).json({ message: 'Id do livro necessário para a busca.' })
    }

    const [result] = await connection('books')
      .select('books.*')
      .where('books.id', '=', bookId);

    if( result ) {
      return response.status(200).json(result);
    }
        
    return response.status(404).json({ message: 'Livro não encontrado.' })
  }
}

module.exports = BookController;