const router = require('express').Router();
const {POST, GET} = require('../../controller/newpostController');
const upload = require('../../middleware/upload')

router.post('/admin/post/insert', upload.single('image'), POST);
router.get('/admin/post', GET);

module.exports = router