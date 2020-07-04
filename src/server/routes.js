const express = require('express');
const routes = express.Router();

const UserController = require('../app/controllers/UserController');
const BooksController = require('../app/controllers/BooksController');

routes.post('/usuario', UserController.store); // OK
/*
  * BODY
    + name (string)
    + phone (string)
    + geners (string) Ex.: "terror, suspense mistério"
  
  * RESPONSE
    + status (number)
    + successMessage (string)
*/

routes.get('/:phone/livros/melhoresAvaliados', BooksController.bestRated);
/*
  * REQUEST
    * Params  
      + phone (string)

  * RESPONSE
    * Body
      + status (number)
      + bookNames (string[])
*/

// routes.get('/:phone/livrosRecomendados');
/*
  * REQUEST
    * Params
      + phone (string)

  * RESPONSE
    * Body
      + status (number)
      + bookNames (string[])
*/

// routes.get('/livros/:nomeDoLivro/sinopse');
/*
  * REQUEST
    * Params  
      + nomeDoLivro (string)

  * RESPONSE
    * Body
      + status (number)
      + bookName (string)
      + bookSinopse (string)
*/

// routes.get('/livros/:nomeDoLivro/opinioes');
/*
  * REQUEST
    * Params  
      + nomeDoLivro (string)

  * RESPONSE
    * Body
      + status (number)
      + bookName (string)
      + userReviews (object[])
        - username (string)
        - comments (string)
        - likes (decimal)
*/

// routes.get('/livros/:nomeDoLivro/resenha');
/*
  * REQUEST
    * Params  
      + nomeDoLivro (string)

  * RESPONSE
    * Body
      + status (number)
      + audio (file/mp3)
*/

// routes.get('/livros/:nomeDoLivro/download');
/*
  * REQUEST
    * Params  
      + nomeDoLivro (string)

  * RESPONSE
    * Body
      + status (number)
      + file (file/dev)
*/

module.exports = routes;



