const connection = require('../../database/connection');

class UserController {
  static async store(request, response) {
    const name = String(request.body.name);
    const phone = String(request.body.whatsappNumber);
    const geners = String(request.body.geners);
    const serializatedGeners = geners.split(',')
      .map(value => {return { id: 0, name: value.trim() }})
      .filter(value => value.name.length > 1);
    
    if( name === '' || phone === '' || serializatedGeners.length < 3 ){
      return response.status(416).send('Não foi');
    }

    const userId = await connection('users').insert({name, whatsappNumber: phone});
    const genersIds = [];

    for(const gener of serializatedGeners) {
      const result = await connection('geners').select('id').where('name', 'LIKE', gener.name);
     
      if(result.length > 0) {
        gener.id = result[0].id;
      }
      else {
        const [id] = await connection('geners').insert({name: gener.name});
        gener.id = id;
      }
      
      await connection('genersUsers').insert({generId: gener.id, userId});
      genersIds.push(gener.id);
    }

    return response.status(201).json({ userId, genersIds });
  }
}

module.exports = UserController;