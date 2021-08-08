const router = require('express').Router();
const {GET} = require('../../controller/dashboardController');

router.get('/admin', GET);

module.exports = router