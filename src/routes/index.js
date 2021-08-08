const homeRouter = require('./public/homeRouter');
const categoryRouter = require('./admin/categoryRouter');
const newpostRouter = require('./admin/newpostRouter');
const allpostsRouter = require('./admin/allpostsRouter');
const dashboardRouter = require('./admin/dashboardRouter');
const updatepostRouter = require('./admin/updatepostRouter');
const loginRouter = require('./admin/loginRouter');

module.exports = [
    homeRouter,
    categoryRouter,
    newpostRouter,
    allpostsRouter,
    dashboardRouter,
    updatepostRouter,
    loginRouter
]