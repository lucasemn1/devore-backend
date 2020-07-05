const express = require('express');
const routes = express.Router();

const auth = require('../app/middlewares/auth');
const VideoController = require('../app/controllers/VideoController');
const CommentController = require('../app/controllers/CommentController');
const PhotoController = require('../app/controllers/PhotoController');
const BookController = require('../app/controllers/BookController');
const BookProfilePhotosAndVideosController = require('../app/controllers/BookProfilePhotosAndVideosController');
const BookProfileComments = require('../app/controllers/BookProfileComments');
const BookProfileAudios = require('../app/controllers/BookProfileAudios');

// public documents folder: /public/books/name.pdf
// public images folder: /public/images/name.png || jpg
// public audios folder: /public/reviews/name.mp4

routes.get('/videos', auth, VideoController.index);
/*
  REQUEST
    * headers
      + accessId (string)
  
  RESPONSE
    * body
      + videos: video[]
*/


routes.get('/comments', auth, CommentController.index);
/*
  REQUEST
    * headers
      + accessId (string)
  
  RESPONSE
    * body
      + videos: video[]
*/


routes.get('/photos', auth, PhotoController.index);
/*
  REQUEST
    * headers
      + accessId (string)
  
  RESPONSE
    * body
      + videos: video[]
*/

routes.get('/livro/:bookId', BookController.get);
/*
  REQUEST
    * params
      + bookId (number)
  
  RESPONSE
    * body: media[]
*/

routes.get('/livro/:bookId/videosEFotos', BookProfilePhotosAndVideosController.get);
/*
  REQUEST
    * params
      + bookId (number)
  
  RESPONSE
    * headers
      + X-total-count: int

    * body: media[]
*/

routes.get('/livro/:bookId/comentarios', BookProfileComments.get);
/*
  REQUEST
    * params
      + bookId (number)
  
  RESPONSE
    * body: comments[]
*/

routes.get('/livro/:bookId/audios', BookProfileAudios.get);
/*
  REQUEST
    * params
      + bookId (number)
  
  RESPONSE
    * headers
      + X-total-count: int

    * body: audio[]
*/

module.exports = routes;