
class BookController {
  static store(request, response) {
    const name = string(request.body.name);
    const phone = string(request.body.phone);
    const categories = Array(...request.body.categories);

    if( !name || !phone ){
      return response.status(416);
    }

    // const connection = 


    return response.send('Hello World');
  }
}

module.exports = BookController;