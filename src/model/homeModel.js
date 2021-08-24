const {fetch, fetchAll} = require('../database/connect');
const {
    GET_POSTS_BY_LIMIT, 
    GET_CATEGORIES, 
    FILTER_CATEGORIES, 
    SEARCH_FROM_POSTS,
    GET_CATEGORY_BY_ID,
    COUNT_POSTS,
    PAGINATION 
    } = require('../database/query');
const getPosts = (limit) => fetchAll(GET_POSTS_BY_LIMIT, limit);
const getCategories = () => fetchAll(GET_CATEGORIES);
const filterCategory = (id) => fetchAll(FILTER_CATEGORIES, id);
const search = (search) => fetchAll(SEARCH_FROM_POSTS, search);
const getCategoriesById = (id) => fetch(GET_CATEGORY_BY_ID, id);
const countPosts = () => fetch(COUNT_POSTS);
const pagination = (offset, limit) => fetchAll(PAGINATION, offset, limit );

module.exports = {
    getPosts,
    getCategories,
    getCategoriesById,
    filterCategory,
    search,
    countPosts,
    pagination
}