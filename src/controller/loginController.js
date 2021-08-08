const model = require('../model/loginModel') 
const {sign} = require('../lib/jwt')

const GET = async (req, res) => {
    res.render('admin/login.html')
}

const POST = async (req, res) => {
    const admin = await model.checkAuth(req.body)
    if(admin){
        res.cookie('token', sign(admin), {maxAge: 24*60*60*1000})
        .redirect('/admin') 
    }else{
        res.status(400).json({message: 'Wrong password or username'})
    }
}

module.exports = {
    GET,
    POST
}