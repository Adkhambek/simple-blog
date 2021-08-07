const {fetch, fetchAll} = require('../database/connect');
const {GET_POSTS} = require('../database/query');
const getPosts = () => fetchAll(GET_POSTS);

module.exports = {
    getPosts
}