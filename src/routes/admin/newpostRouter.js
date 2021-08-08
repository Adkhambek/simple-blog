const router = require('express').Router();
const {POST, GET} = require('../../controller/newpostController');
const upload = require('../../middleware/upload')
const redirect = require('../../middleware/rediret')

router.post('/admin/post/insert', upload.single('image'), POST);
router.get('/admin/post', redirect, GET);

module.exports = router