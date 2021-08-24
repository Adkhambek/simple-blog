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

const GET_POSTS_BY_LIMIT = `
    SELECT 
        p.id, 
        title, 
        image, 
        c.name as category, 
        content, 
        to_char(date, 'DD/MM/YYYY HH24:MI:SS') as date
    FROM posts p
    JOIN categories c ON c.id = p.category_id
    ORDER BY p.id DESC
    LIMIT $1;
`

const GET_CATEGORIES = `
    SELECT * FROM categories; 
`

const FILTER_CATEGORIES = `
    SELECT * FROM posts
    WHERE category_id = $1
`
const SEARCH_FROM_POSTS = `
    SELECT 
        p.id, 
        title, 
        image, 
        c.name as category, 
        content, 
        to_char(date, 'DD/MM/YYYY HH24:MI:SS') as date
    FROM posts p
    JOIN categories c ON c.id = p.category_id
    WHERE title ILIKE '%'||$1||'%' OR content ILIKE '%'||$1||'%'
    ORDER BY p.id DESC;
`

const PAGINATION = `
    SELECT
        id,
        title,
        image,
        content
    FROM posts
    ORDER BY id DESC
    OFFSET $1 LIMIT $2;
`

const COUNT_POSTS = `
    SELECT
        COUNT(id)
    FROM posts
`

const GET_CATEGORY_BY_ID = `
        SELECT name 
        FROM categories
        WHERE id = $1;
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
const GET_POST_BY_ID = `
    SELECT 
        p.id, 
        title, 
        image, 
        c.name as category, 
        content
    FROM posts p
    JOIN categories c ON c.id = p.category_id
    WHERE p.id = $1; 
`
const UPDATE_POST = `
        UPDATE posts
        SET title = $1, content =$2
        WHERE id = $3
`

const UPDATE_POST_WITH_IMAGE = `
        UPDATE posts
        SET title = $1, content =$2, image = $3
        WHERE id = $4
`
const CHECK_AUTH = `
    SELECT 
        id
    FROM admins
    WHERE username = $1 AND password = crypt($2, password)
`

module.exports = {
    GET_POSTS,
    GET_POSTS_BY_LIMIT,
    GET_CATEGORIES,
    FILTER_CATEGORIES,
    GET_CATEGORY_BY_ID,
    SEARCH_FROM_POSTS,
    PAGINATION,
    COUNT_POSTS,
    INSERT_CATEGORY,
    INSERT_POST,
    DELETE_POST,
    GET_IMAGE_NAME,
    GET_POST_BY_ID,
    UPDATE_POST,
    UPDATE_POST_WITH_IMAGE,
    CHECK_AUTH
}