const model = require('../model/postModel') 
const fs = require('fs')
const path = require('path')

const GET = async (req, res) => {
    const {id} = req.params
    res.render('admin/editpost.html', {post: await model.getPostById(id)})
}

const POST = async (req, res) => {
    const {id} = req.params
    if(!req.file){
        model.updatePost(+id, req.body)
        res.redirect('/admin/posts')
    }else{
        const imageName = await model.getImageName(+id)
        fs.unlinkSync(path.join(process.cwd(), 'src', 'images', imageName.image))
        
        const data = {...req.body, image: req.file.filename}
        model.updatePostWithImage(+id, data)
        res.redirect('/admin/posts')
    }
    
//   const data = {...req.body, category: +req.body.category, image: req.file.filename} 
//   model.insertPost(data)
//   res.redirect('/admin/post')    
};


module.exports = {
    GET,
    POST
}