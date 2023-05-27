const Comic = require('../models/comic-model');
// const { response } = require('express');


module.exports = {
 
  all_books: (request, response) => {
    Comic.find({}).then(allComics => {
      if(error){
        return error;
      } else {
        response.render('pages/index', {
            inventoryArray: allComics
        });
      }
    })
  },


  create_book: (request, response) => {
    const {title, author, publisher, genre, pages, rating, synopsis, image} = request.body;
    const newBook = new Book ({
      title: title,
      author: author,
      publisher: publisher,
      genre: genre,
      pages: pages,
      rating: rating,
      synopsis: synopsis,
      photo: image
    });

    Comic.save(newBook); 

    response.redirect("/pages/admin-console"); 
  },

  single_book: (request, response) => {
    const {_id} = request.params;
    Comic.findOne({_id: _id}).then((foundBook, error) => {
      if(error) {
        return error;
      } else {
        response.render('pages/card', {
          data: book
        });
      }
    })
  },


  update_book: (request, response) => {
    const {_id} = request.params;
    
    const {image, title, author, publisher, genre, pages, rating, synopsis} = request.body;

    Comic.findByIdAndUpdate(_id, {$set: {
      title: title,
      author: author,
      publisher: publisher,
      genre: genre,
      page: pages,
      rating: rating,
      synopsis: synopsis,
      image: image, 
    }}, {new: true}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin-console');
      }
    })
  },
 //refactor?
  
  book_delete: (request, response) => {
    const { _id } = request.params;
    Comic.deleteOne({_id: _id}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin-console')
      }
    }); 
  }
}
