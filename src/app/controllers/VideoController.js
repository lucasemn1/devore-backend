const connection = require('../../database/connection');

class VideoController {
  static async index(request, response) {
    return response.send('Hello World');
  }
}

module.exports = VideoController;