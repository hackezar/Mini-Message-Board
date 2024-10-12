// route file - routes/indexRoutes.js

const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();

try {
router.get('/', indexController.getHomepage)
} catch(error) {
    console.error(error);
}

router.get('/new', indexController.getNewMessageForm);

router.post('/new', indexController.postForm);

router.get('/message/:messageId', indexController.getMessage);

module.exports = router;