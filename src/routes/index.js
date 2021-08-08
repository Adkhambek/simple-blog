const homeRouter = require('./public/homeRouter');
const categoryRouter = require('./admin/categoryRouter');
const newpostRouter = require('./admin/newpostRouter');
const allpostsRouter = require('./admin/allpostsRouter');

module.exports = [
    homeRouter,
    categoryRouter,
    newpostRouter,
    allpostsRouter
]