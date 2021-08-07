const router = require('express').Router();
const {POST, GET} = require('../../controller/categoryController');

router.post('/admin/category/insert', POST);
router.get('/admin/category', GET);

module.exports = router