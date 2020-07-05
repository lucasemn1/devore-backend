const connection = require('../../database/connection');

class PhotoController {
  static async index(request, response) {
    const accessId = String(request.header('access_id'));

    const [userId] = await connection('users')
      .select('*')
      .where('users.accessId', '=', accessId);

    const result = await connection('geners')
      .select([
        'books.name AS bookname',
        'photos.id AS photoId', 
        'photos.bookId', 
        'photos.photoName AS filename', 
        'photos.likes', 
        'users.name AS username'
      ])
      .join('genersUsers', 'genersUsers.generId', 'geners.id')
      .join('booksGeners', 'booksGeners.generId', 'geners.id')
      .join('books', 'books.id', 'booksGeners.bookId')
      .join('photos', 'photos.bookId', 'books.id')
      .join('users', 'genersUsers.userId', 'users.id')
      .where('users.id', '=', userId.id);
      
    return response.status(200).json(result);
  }
}

module.exports = PhotoController;