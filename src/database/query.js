const GET_POSTS = `
    SELECT 
        p.id, 
        title, 
        image, 
        c.name as category, 
        content, 
        to_char(date, 'DD/MM/YYYY HH24:MI:SS') as date
    FROM posts p
    JOIN categories c ON c.id = p.category_id
    ORDER BY p.id DESC;
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
const DELETE_POST = `
        DELETE FROM posts
        WHERE id = $1
`

const GET_IMAGE_NAME =`
        SELECT image 
        FROM posts
        WHERE id = $1
`

module.exports = {
    GET_POSTS,
    GET_CATEGORIES,
    INSERT_CATEGORY,
    INSERT_POST,
    DELETE_POST,
    GET_IMAGE_NAME
}