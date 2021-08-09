const model = require('../model/postModel')

const GET = async (req, res) => {
    const {id} = req.params
    res.render('admin/editpost.html', {
        data: await model.getPostById(id)
    })
}

module.exports = {
    GET
}