const router = require('express').Router();
const {DELETE, GET} = require('../../controller/allpostsController');

router.get('/admin/posts', GET);
router.get('/admin/delete/post/:id', DELETE);

module.exports = router