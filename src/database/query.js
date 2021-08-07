const GET_POSTS = `
    SELECT * FROM posts;
`;

const GET_CATEGORIES = `
    SELECT * FROM categories; 
`

module.exports = {
    GET_POSTS,
    GET_CATEGORIES
}