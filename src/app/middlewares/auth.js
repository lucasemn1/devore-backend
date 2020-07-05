const connection = require("../../database/connection");

module.exports = async function(request, response, next) {
  const accessId = String(request.header('access_id'));

  if( accessId === 'undefined' ) {
    return response.status(401).send('O id de acesso é requerido');
  }

  const accessIdIsValid = await connection('users')
    .select('users.id')
    .where('users.accessId', '=', accessId);

  if( accessIdIsValid.length === 0 ) {
    return response.status(401).send('O id não está registrado');
  }

  next();
};