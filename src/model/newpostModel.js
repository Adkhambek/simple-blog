const {fetch, fetchAll} = require('../database/connect');
const {INSERT_POST, GET_CATEGORIES} = require('../database/query');

const insertPost = ({title, category, post, image}) => fetch(
    INSERT_POST, title, image, category, post
    )
const allCategories = () => fetchAll(GET_CATEGORIES)
module.exports = {
    insertPost,
    allCategories
}