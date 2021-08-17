const router = require('express').Router();
const {GET, CATEGORY, SEARCH, PAGINATION} = require('../../controller/homeController');

router.get('/', GET);
router.get('/category/:id', CATEGORY);
router.get('/search', SEARCH);
router.get('/page/:num', PAGINATION);

module.exports = router
