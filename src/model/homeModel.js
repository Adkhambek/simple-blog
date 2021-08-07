const {fetch, fetchAll} = require('../database/connect');
const {GET_POSTS, GET_CATEGORIES} = require('../database/query');
const getPosts = () => fetchAll(GET_POSTS);
const getCategories = () => fetchAll(GET_CATEGORIES);

module.exports = {
    getPosts,
    getCategories
}