const model = require('../model/categoryModel') 

const POST = async (req, res) => {
    model.insertCategory(req.body)
    res.redirect('/admin/category')    
};

const GET = (req, res) => {
    res.render('admin/category.html')
}

module.exports = {
    POST,
    GET
}