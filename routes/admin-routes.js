const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');


// SITE ROUTES


router.route('/')
    .get(adminController.admin);

router.route('/create-book')
    .get(adminController.admin_create);

    //admin-console/create_book

router.route('/update-book/:_id')
    .get(adminController.admin_update);

module.exports = router;

// app.get('/admin', (request, response) => {
//     response.render('/admin-console', {
//         route: "This route points to the Admin page"
//     });
// });

// app.get('/create', (request, response) => {
//     response.render('/admin-console/create-book', {
//         route: "This route points to the Create page"
//     });
// });
