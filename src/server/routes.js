const express = require('express');
const routes = express.Router();

const UserController = require('../app/controllers/UserController');

routes.post('/usuario', UserController.store);
/*
  * BODY
    - name (string)
    - phone (string)
    - categories (string)
  
  * RESPONSE
    - status (number)
    - successMessage (string)
*/

// routes.get('/livros/maisLidos');
/*
  * RESPONSE
    - status (number)
    - bookNames (string[])
*/

// routes.get('/livrosRecomendados');
/*
  * RESPONSE
    - status (number)
    - bookNames (string[])
*/

// routes.get('/livros/:nomeDoLivro/sinopse');
/*
  * PARAMS
    - nomeDoLivro (string)

  * RESPONSE
    - status (number)
    - bookName (string)
    - bookSinopse (string)
*/

// routes.get('/livros/:nomeDoLivro/opinioes');
/*
  * PARAMS
    - nomeDoLivro (string)

  * RESPONSE
    - status (number)
    - bookName (string)
    - userReviews (object[])
      - username (string)
      - comments (string)
      - likes (decimal)
*/

// routes.get('/livros/:nomeDoLivro/resenha');
/*
  * PARAMS
    - nomeDoLivro (string)

  * RESPONSE
    - status (number)
    - audio (file/mp3)
*/

// routes.get('/livros/:nomeDoLivro/download');
/*
  * PARAMS
    - nomeDoLivro (string)

  * RESPONSE
    - status (number)
    - file (file/dev)
*/

module.exports = routes;



