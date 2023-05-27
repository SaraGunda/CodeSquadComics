const Comic = require("../models/comic-model");
// const { response } = require('express');

module.exports = {
  admin: (request, response) => {
    if (request.isAuthenticated()) {
      Comic.find({}).then((allComics) => {
        response.render("pages/admin", {
          data: allComics,
        });
      });
    } else {
      response.redirect("/login");
    }
  },

  admin_update: (request, response) => {
    if (request.isAuthenticated()) {
      const { _id } = request.params;
      Comic.findOne({ _id: _id }).then((foundComic, error) => {
        if (error) {
          return error;
        } else {
          response.render("pages/update", {
            data: foundComic,
          });
        }
      });
    } else {
      response.redirect("/login");
    }
  },

  admin_create: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/create");
    } else {
      response.redirect("/login");
    }
  },
};
