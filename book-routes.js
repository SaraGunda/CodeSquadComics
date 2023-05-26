const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');
const siteCtrl = require('../controllers/site-controller');


// SITE ROUTES

router.route('/')
  .get(bookController.all_books)
  .post(bookController.create_book);

router.route('/:_id')
  .get(bookController.single_book)
  .put(bookController.update_book)

  .delete(bookController.book_delete);


module.exports = router;