const model = require('../model/homeModel') 

const GET = async (req, res) => {
    res.render('index.html', {data: await model.getPosts()})
};

module.exports = {
    GET
}