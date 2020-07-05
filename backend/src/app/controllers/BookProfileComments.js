const connection = require('../../database/connection');

class BookProfileComments {
  static async get(request, response) {
    const bookId = String(request.params.bookId);
    const page = String(request.query.page || 1);

    if( bookId === 'undefined' || bookId === '' ) {
      return response.status(404).json({ message: 'Id do livro necessário para a busca.' })
    }

    let countResults = await connection('comments')
      .join('users', 'users.id', 'comments.userId')
      .where('comments.bookId', '=', bookId)
      .count();

    let results = await connection('comments')
      .select(['comments.*', 'users.name AS username', 'users.id as userId'])
      .join('users', 'users.id', 'comments.userId')
      .where('comments.bookId', '=', bookId)
      .orderBy('comments.created_at', 'desc')
      .limit(10)
      .offset( ( page - 1 ) * 10 );

    response.header('X-total-count', countResults[0]['count(*)']);
    return response.status(200).json(results);
  }
}

module.exports = BookProfileComments;