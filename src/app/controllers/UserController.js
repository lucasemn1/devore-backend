
class BookController {
  static store(request, response) {
    return response.send('Hello World');
  }
}

module.exports = BookController;