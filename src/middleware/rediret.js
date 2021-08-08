const redirect = (req, res, next) => {
    let token = req.cookies.token
    if(token){
        return next()
    }else{
        return res.redirect('/admin/login')
    }
}

module.exports = redirect