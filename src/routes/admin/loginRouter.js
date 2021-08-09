const router = require('express').Router();
const {GET, POST, LOGOUT} = require('../../controller/loginController');

router.get('/admin/login', GET);
router.post('/admin/login', POST);
router.get('/admin/logout', LOGOUT);

module.exports = router