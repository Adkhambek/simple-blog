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
    );
`

const INSERT_POST = `
    INSERT INTO posts(
        title,
        image,
        category_id,
        content
    )
    VALUES ($1, $2, $3, $4);
`

module.exports = {
    GET_POSTS,
    GET_CATEGORIES,
    INSERT_CATEGORY,
    INSERT_POST
}