const model = require('../model/postModel') 

const GET = async (req, res) => {
    res.render('admin/dashboard.html')
}

module.exports = {
    GET
}