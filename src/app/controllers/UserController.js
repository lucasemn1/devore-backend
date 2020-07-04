const connection = require('../../database/connection');

class BookController {
  static async store(request, response) {
    const name = string(request.body.name);
    const phone = string(request.body.phone);
    const geners = Array(...request.body.categories);

    if( !name || !phone ){
      return response.status(416);
    }

    const [userId] = await connection('users').insert({
      name,
      whatsappNumber: phone
    });

    const categoriesId = await connection('geners')


    return response.send('Hello World');
  }
}

module.exports = BookController;