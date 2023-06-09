const Comic = require("../models/comic-model");
// const { response } = require('express');

module.exports = {
  all_books: (request, response) => {
    Comic.find({}).then((allComics) => {
      if (error) {
        return error;
      } else {
        response.render("pages/index", {
          inventoryArray: allComics,
        });
      }
    });
  },

  create_book: (request, response) => {
    const { title, author, publisher, genre, pages, rating, synopsis, image } =
      request.body;
    const newComic = new Comic({
      title: title,
      author: author,
      publisher: publisher,
      genre: genre,
      pages: pages,
      rating: rating,
      synopsis: synopsis,
      photo: image,
    });

    Comic.save(newComic);

    response.redirect("/pages/admin-console");
  },

  single_book: (request, response) => {
    const { _id } = request.params;
    Comic.findOne({ _id: _id }).then((foundBook, error) => {
      if (error) {
        return error;
      } else {
        response.render("pages/card", {
          data: foundBook,
        });
      }
    });
  },

  // update_book: (request, response) => {
  // const { id } = request.params;
  // Comic.findOne({ _id: _id }).then((foundBook, error) => {
  //   if (error) {
  //     return error;
  //   } else {
  //     response.render("pages/card", {
  //       data: foundBook,
  //     });
  //   }
  // });
  // const { title, author, publisher, genre, pages, rating, synopsis, image } =
  // request.body;
  // const { _id } = request.params;
  // Comic.findOne({ _id, id }).then((foundBook, error) => {
  //   if (error) {
  //     return error;
  //   } else {
  //     const {
  //       title,
  //       author,
  //       publisher,
  //       genre,
  //       pages,
  //       rating,
  //       synopsis,
  //       image,
  //     } = request.body;
  //     foundBook = {
  //       title: title,
  //       author: author,
  //       publisher: publisher,
  //       genre: genre,
  //       pages: pages,
  //       rating: rating,
  //       synopsis: synopsis,
  //       photo: image,
  //     };
  //     foundBook.save();
  //     response.redirect("pages/admin-console");
  //   }
  // });
  //   Comic.findOneAndUpdate(
  //     { _id: id },
  //     {
  //       $set: {
  //         title: title,
  //         author: author,
  //         publisher: publisher,
  //         genre: genre,
  //         pages: pages,
  //         rating: rating,
  //         synopsis: synopsis,
  //         image: image,
  //       },
  //     }
  //   ).then({ new: true }, (error) => {
  //     if (error) {
  //       return error;
  //     } else {
  //       response.redirect("/admin-console");
  //     }
  //   });

  //refactor?
  update_book: (request, response) => {
    const { _id } = request.params;
    const { title, author, publisher, genre, pages, rating, synopsis, image } =
      request.body;
    Comics.findByIdAndUpdate(
      _id,
      {
        $set: {
          title: title,
          author: author,
          publisher: publisher,
          genre: genre,
          page: pages,
          rating: rating,
          synopsis: synopsis,
          image: image,
        },
      },
      { new: tue }
    )
      .then(() => {
        request.redirect("admin-console");
      })
      .catch((error) => {
        console.log(error);
      });
  },

  book_delete: (request, response) => {
    const { _id } = request.params;
    Comic.deleteOne({ _id: _id }).then((_, error) => {
      if (error) {
        return error;
      } else {
        response.redirect("/admin-console");
      }
    });
  },
};
