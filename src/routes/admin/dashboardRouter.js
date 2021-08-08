const router = require('express').Router();
const {GET} = require('../../controller/dashboardController');
const redirect = require('../../middleware/rediret')

router.get('/admin', redirect, GET);

module.exports = router