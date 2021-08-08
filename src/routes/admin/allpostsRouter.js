const router = require('express').Router();
const {DELETE, GET} = require('../../controller/allpostsController');
const redirect = require('../../middleware/rediret')

router.get('/admin/posts', redirect, GET);
router.get('/admin/post/delete/:id', redirect, DELETE);

module.exports = router