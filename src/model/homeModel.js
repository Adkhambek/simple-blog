const {fetch, fetchAll} = require('../database/connect');
const {
    GET_POSTS, 
    GET_CATEGORIES, 
    FILTER_CATEGORIES, 
    SEARCH_FROM_POSTS,
    GET_CATEGORY_BY_ID
    } = require('../database/query');
const getPosts = () => fetchAll(GET_POSTS);
const getCategories = () => fetchAll(GET_CATEGORIES);
const filterCategory = (id) => fetchAll(FILTER_CATEGORIES, id);
const search = (search) => fetchAll(SEARCH_FROM_POSTS, search);
const getCategoriesById = (id) => fetch(GET_CATEGORY_BY_ID, id)

module.exports = {
    getPosts,
    getCategories,
    getCategoriesById,
    filterCategory,
    search
}