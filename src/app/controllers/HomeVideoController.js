const connection = require('../../database/connection');

class VideoController {
  static async index(request, response) {
    const accessId = String(request.header('access_id'));

    const [userId] = await connection('users')
      .select('*')
      .where('users.accessId', '=', accessId);

    const result = await connection('geners')
      .select([
        'books.name AS bookname',
        'videos.id AS videoId', 
        'videos.bookId', 
        'videos.videoName AS filename', 
        'videos.likes', 
        'users.name AS username'
      ])
      .join('genersUsers', 'genersUsers.generId', 'geners.id')
      .join('booksGeners', 'booksGeners.generId', 'geners.id')
      .join('books', 'books.id', 'booksGeners.bookId')
      .join('videos', 'videos.bookId', 'books.id')
      .join('users', 'genersUsers.userId', 'users.id')
      .where('users.id', '=', userId.id);

    return response.status(200).json(result);
  }
}

module.exports = VideoController;