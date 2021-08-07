CREATE DATABASE blog;
CREATE EXTENSION pgcrypto;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    image VARCHAR(50) NOT NULL,
    category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    date timestamptz default current_timestamp
);

CREATE TABLE admins (
    id  SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(250) NOT NULL
);

INSERT INTO categories (
    name
)
VALUES
('Coding'),
('SEO');

INSERT INTO posts (
    title,
    image,
    category_id,
    content
) 
VALUES 
('My first blog post', 'blog.jpg', 1, 'This is my first blog post...');

INSERT INTO admins (
    username,
    password
)
VALUES
('Adham', crypt('heaven_8', gen_salt('bf')));

SELECT * FROM admins WHERE username = 'Adham' AND password = crypt('heaven_8', password);

