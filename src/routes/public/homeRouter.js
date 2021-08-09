const router = require('express').Router();
const {GET, CATEGORY, SEARCH} = require('../../controller/homeController');

router.get('/', GET);
router.get('/category/:id', CATEGORY);
router.get('/search', SEARCH);

module.exports = router
