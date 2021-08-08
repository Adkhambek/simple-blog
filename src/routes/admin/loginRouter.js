const router = require('express').Router();
const {GET, POST} = require('../../controller/loginController');

router.get('/admin/login', GET);
router.post('/admin/login', POST);

module.exports = router