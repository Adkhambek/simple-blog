const router = require('express').Router();
const {POST, GET} = require('../../controller/newpostController');

router.post('/admin/post/insert', POST);
router.get('/admin/post', GET);

module.exports = router