const { fetch, fetchAll } = require("../database/connect");
const {
  GET_POSTS,
  DELETE_POST,
  GET_IMAGE_NAME,
  GET_POST_BY_ID,
  UPDATE_POST,
  UPDATE_POST_WITH_IMAGE,
  UPDATE_VIEWS,
} = require("../database/query");
const getAllPosts = () => fetchAll(GET_POSTS);
const deletePost = (id) => fetchAll(DELETE_POST, id);
const getImageName = (id) => fetch(GET_IMAGE_NAME, id);
const getPostById = (id) => fetch(GET_POST_BY_ID, id);
const updatePost = (id, { title, post }) => fetch(UPDATE_POST, title, post, id);
const updatePostWithImage = (id, { title, post, image }) =>
  fetch(UPDATE_POST_WITH_IMAGE, title, post, image, id);
const updateViews = (id) => fetch(UPDATE_VIEWS, id);

module.exports = {
  getAllPosts,
  deletePost,
  getImageName,
  getPostById,
  updatePost,
  updatePostWithImage,
  updateViews,
};
