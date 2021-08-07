const GET_POSTS = `
    SELECT * FROM posts;
`

const GET_CATEGORIES = `
    SELECT * FROM categories; 
`
const INSERT_CATEGORY = `
    INSERT INTO categories (
        name
    )
    VALUES (
        $1
    )
`

module.exports = {
    GET_POSTS,
    GET_CATEGORIES,
    INSERT_CATEGORY
}