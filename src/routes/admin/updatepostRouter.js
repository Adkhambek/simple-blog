const router = require('express').Router();
const {GET, POST} = require('../../controller/updatepostController');
const upload = require('../../middleware/upload')

router.get('/admin/post/update/:id', GET);
router.post('/admin/post/update/:id', upload.single('image'), POST);

module.exports = router



