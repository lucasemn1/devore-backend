const connection = require("../../database/connection");

class BooksController {
  static async bestRated(request, response) {
    const whatsappNumber = String(request.params.phone);

    if( whatsappNumber === '' ) {
      return response.status(416).json({ message: 'Parâmetros necessários não passados.' })
    }

    const geners = await connection('geners')
      .select('geners.*')
      .join('genersUsers', 'genersUsers.generId', 'geners.id')
      .join('users', 'users.id', 'genersUsers.userId')
      .where('users.whatsappNumber', 'LIKE', whatsappNumber);

    const result = [];

    for(const gener of geners) {
      const item = { gener: gener.name };

      const books = await connection('books')
        .select('*')
        .join('booksGeners', 'booksGeners.bookId', 'books.id')
        .where('geners.id', '=', gener.id)
        .orderBy('books.avaliation', 'desc')
        .limit(10);
      
      item.books = books;

      result.push(item);
    }

    return response.json(result);
  }
}

module.exports = BooksController;