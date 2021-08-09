const model = require('../model/homeModel') 

const GET = async (req, res) => {
    res.render('public/index.html', {
        categories: await model.getCategories(),
        posts: await model.getPosts(),
        message: "Recent Posts",
        section: "post"
    })
};

const CATEGORY = async (req, res) => {
    const {id} = req.params
    const {name} = await model.getCategoriesById(+id)
    res.render('public/index.html', {
        categories: await model.getCategories(),
        filter: await model.filterCategory(+id),
        message: `Posts related to "${name}"`,
        section: "category"
    })
}

const SEARCH = async (req, res) => {
    const {search} = req.query
    const result = await model.search(search)
    if(result.length){
        res.render('public/index.html', {
            categories: await model.getCategories(),
            search: await model.search(search),
            message: `Search results for: "${search}"`,
            section: "search"
        })
    }else{
        res.render('public/index.html', {
            categories: await model.getCategories(),
            message: 'Nothing found',
            section: "not-found"
        })
    }
    
}

module.exports = {
    GET,
    CATEGORY,
    SEARCH
}