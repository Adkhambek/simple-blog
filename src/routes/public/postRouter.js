const router = require('express').Router();
const {GET} = require('../../controller/postController');

router.get('/post/:id', GET);

module.exports = router
