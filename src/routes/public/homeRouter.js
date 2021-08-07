const router = require('express').Router();
const {GET} = require('../../controller/homeController');

router.get('/', GET);

module.exports = router
