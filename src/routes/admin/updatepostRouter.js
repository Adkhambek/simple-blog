const router = require('express').Router();
const {GET, POST} = require('../../controller/updatepostController');
const upload = require('../../middleware/upload')
const redirect = require('../../middleware/rediret')

router.get('/admin/post/update/:id', redirect, GET);
router.post('/admin/post/update/:id', upload.single('image'), POST);

module.exports = router



