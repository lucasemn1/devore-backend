
class BookController {
  static store(request, response) {
    const name = request.body.name;
    const categories = Array(...request.body.categories);


    return response.send('Hello World');
  }
}

module.exports = BookController;