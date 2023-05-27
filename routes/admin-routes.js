const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');


router.route('/')
    .get(adminController.admin);

router.route('/create-book')
    .get(adminController.admin_create);

router.route('/update-book/:_id')
    .get(adminController.admin_update);

module.exports = router;
