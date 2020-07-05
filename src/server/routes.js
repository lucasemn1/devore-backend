const express = require('express');
const routes = express.Router();

const auth = require('../app/middlewares/auth');
const HomeVideoController = require('../app/controllers/HomeVideoController');
const HomeCommentController = require('../app/controllers/HomeCommentController');
const HomePhotoController = require('../app/controllers/HomePhotoController');
const BookController = require('../app/controllers/BookController');
const BookProfilePhotosAndVideosController = require('../app/controllers/BookProfilePhotosAndVideosController');
const BookProfileComments = require('../app/controllers/BookProfileComments');
const BookProfileAudios = require('../app/controllers/BookProfileAudios');
const RankingAllSchoolClassesController = require('../app/controllers/RankingAllSchoolClassesController');
const RankingClassController = require('../app/controllers/RankingClassController');

// public documents folder: /public/books/name.pdf
// public images folder: /public/images/name.png || jpg
// public audios folder: /public/reviews/name.mp4

routes.get('/videos', auth, HomeVideoController.index);
/*
  REQUEST
    * headers
      + accessId (string)
  
  RESPONSE
    * body
      + videos: video[]
*/


routes.get('/comments', auth, HomeCommentController.index);
/*
  REQUEST
    * headers
      + accessId (string)
  
  RESPONSE
    * body
      + videos: video[]
*/

routes.get('/photos', auth, HomePhotoController.index);
/*
  REQUEST
    * headers
      + accessId (string)
  
  RESPONSE
    * body
      + videos: video[]
*/

routes.get('/livro/:bookId', auth, BookController.get);
/*
  REQUEST
    * headers
      + accessId (string)
    * params
      + bookId (number)
  
  RESPONSE
    * body: media[]
*/

routes.get('/livro/:bookId/videosEFotos', auth, BookProfilePhotosAndVideosController.get);
/*
  REQUEST
    * headers
      + accessId (string)
    * params
      + bookId (number)
  
  RESPONSE
    * headers
      + X-total-count: int

    * body: media[]
*/

routes.get('/livro/:bookId/comentarios', auth, BookProfileComments.get);
/*
  REQUEST
    * headers
      + accessId (string)
    * params
      + bookId (number)
  
  RESPONSE
    * body: comments[]
*/

routes.get('/livro/:bookId/audios', auth, BookProfileAudios.get);
/*
  REQUEST
    * headers
      + accessId (string)
    * params
      + bookId (number)
  
  RESPONSE
    * headers
      + X-total-count: int

    * body: audio[]
*/

routes.get('/rankingDaEscola', auth, RankingAllSchoolClassesController.index)
/*
  REQUEST
    * headers
      + accessId (string)
*/


routes.get('/rankingDaTurma', auth, RankingClassController.index)
/*
  REQUEST
    * headers
      + accessId (string)
*/

module.exports = routes;