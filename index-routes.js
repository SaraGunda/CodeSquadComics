const express = require('express');
const router = express.Router();
const siteRouter = require('./site-routes');
const booksRouter = require('./book-routes');
const adminRouter = require('./admin-routes');

router.use('/', siteRouter);
router.use('/books', booksRouter);
router.use('/admin-console', adminRouter);



module.exports = router;