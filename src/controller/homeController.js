const model = require('../model/homeModel') 

const GET = async (req, res) => {
    res.render('public/index.html', {
        categories: await model.getCategories(),
        posts: await model.getPosts()
    })
};

module.exports = {
    GET
}