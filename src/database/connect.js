const {Pool} = require('pg');
// const {dbConfig} = require('../config');
const dbConfig = {
    user: 'svsnmydy',
    host: 'chunee.db.elephantsql.com',
    password: 'pLBGS98DXa-4WL9EIKBShn_hBdHV8epu',
    database: 'svsnmydy',
    ssl: {
        rejectUnauthorized: false
      }
};

const pool = new Pool(dbConfig);

const fetch  = async (query, ...params) => {
    const client = await pool.connect()
    try {
       const { rows: [row] } = await client.query(query, params ? params : null)
       return row
    } catch (err) {
        console.log(err);
    } finally {
        client.release()
    }
};

const fetchAll = async (query, ...params) => {
    const client = await pool.connect()
    try {
       const { rows } = await client.query(query, params ? params : null)
       return rows
   
    } catch (err) {
        console.log(err);
    } finally {
        client.release()
    }
};


module.exports = {fetch, fetchAll};