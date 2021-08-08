const router = require('express').Router();
const {POST, GET} = require('../../controller/categoryController');
const redirect = require('../../middleware/rediret')

router.post('/admin/category/insert', redirect, POST);
router.get('/admin/category', GET);

module.exports = router