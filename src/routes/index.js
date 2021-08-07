const homeRouter = require('./public/homeRouter');
const categoryRouter = require('./admin/categoryRouter');
const newpostRouter = require('./admin/newpostRouter');

module.exports = [
    homeRouter,
    categoryRouter,
    newpostRouter
]