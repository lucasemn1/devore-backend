const connection = require('../../database/connection');

class CommentController {
  static async index(request, response) {
    const accessId = String(request.header('access_id'));

    const [userId] = await connection('users')
      .select('*')
      .where('users.accessId', '=', accessId);

    const result = await connection('geners')
      .select([
        'books.name AS bookname',
        'comments.id as commentId', 
        'comments.bookId', 
        'comments.text', 
        'comments.likes', 
        'users.name AS username'
      ])
      .join('genersUsers', 'genersUsers.generId', 'geners.id')
      .join('booksGeners', 'booksGeners.generId', 'geners.id')
      .join('books', 'books.id', 'booksGeners.bookId')
      .join('comments', 'comments.bookId', 'books.id')
      .join('users', 'genersUsers.userId', 'users.id')
      .where('users.id', '=', userId.id);
      
    return response.status(200).json(result);
  }
}

module.exports = CommentController;