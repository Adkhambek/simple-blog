require('dotenv').config();

const PORT = process.env.PORT;
const host = 'localhost';
const secretKey = process.env.secret_key
const dbConfig = {
    user: process.env.db_user,
    host: process.env.db_host,
    port: process.env.db_port,
    password: process.env.db_password,
    database: process.env.db_database
}

module.exports = { PORT, host, dbConfig, secretKey }