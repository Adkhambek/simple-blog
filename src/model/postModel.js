const {fetch, fetchAll} = require('../database/connect');
const {GET_POSTS, DELETE_POST, GET_IMAGE_NAME} = require('../database/query');
const getAllPosts = () => fetchAll(GET_POSTS);
const deletePost = (id) => fetchAll(DELETE_POST, id)
const getImageName = (id) => fetch(GET_IMAGE_NAME, id)

module.exports = {
    getAllPosts,
    deletePost,
    getImageName
}