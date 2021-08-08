const model = require('../model/newpostModel') 


const POST = async (req, res) => {
  const data = {...req.body, category: +req.body.category, image: req.file.filename} 
  model.insertPost(data)
  res.redirect('/admin/post')    
};

const GET = async(req, res) => {
    res.render('admin/newpost.html', {category: await model.allCategories()})
}

module.exports = {
    POST,
    GET
}