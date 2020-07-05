const connection = require('../../database/connection');

class BookProfileAudios {
  static async get(request, response) {
    const bookId = String(request.params.bookId);
    const page = String(request.query.page || 1);

    if( bookId === 'undefined' || bookId === '' ) {
      return response.status(404).json({ message: 'Id do livro necessário para a busca.' })
    }

    let countResults = await connection('audios')
      .join('users', 'users.id', 'audios.userId')
      .where('audios.bookId', '=', bookId)
      .count();

    let results = await connection('audios')
      .select(['audios.*', 'users.name AS username', 'users.id as userId'])
      .join('users', 'users.id', 'audios.userId')
      .where('audios.bookId', '=', bookId)
      .orderBy('audios.created_at', 'desc')
      .limit(10)
      .offset( ( page - 1 ) * 10 )
      .count();

    response.header('X-total-count', countResults[0]['count(*)']);
    return response.status(200).json(results);
  }
}

module.exports = BookProfileAudios;