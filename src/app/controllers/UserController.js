const connection = require('../../database/connection');

class BookController {
  static async store(request, response) {
    const name = String(request.body.name);
    const phone = String(request.body.phone);
    const geners = String(request.body.geners);
    const serializatedGeners = geners.split(',')
      .map(value => {return { name: value.trim() }})
      .filter(value => value.name.length > 1);
    
    if( !name || !phone || serializatedGeners.length < 3 ){
      return response.status(416).send('Não foi');
    }

    console.log(serializatedGeners);
    
    const [userId] = await connection('users').insert({
      name,
      whatsappNumber: phone
    });

    const genersIds = await connection('geners').insert(serializatedGeners);

    return response.status(201).json({ userId, genersIds });
  }
}

module.exports = BookController;