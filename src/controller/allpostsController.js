const model = require('../model/postModel') 
const fs = require('fs')
const path = require('path')

const DELETE = async (req, res) => {
    const {id} = req.params
    const imageName = await model.getImageName(+id)
    fs.unlinkSync(path.join(process.cwd(), 'src', 'images', imageName.image))
    await model.deletePost(+id)
    res.redirect('/admin/posts')
    
}

const GET = async (req, res) => {
    res.render('admin/allposts.html', {posts: await model.getAllPosts()}) 
}

module.exports = {
    DELETE,
    GET
}