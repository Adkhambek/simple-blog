const {fetch, fetchAll} = require('../database/connect');
const {CHECK_AUTH} = require('../database/query');

const checkAuth = async ({username, password}) => {
    const validation = await fetch(CHECK_AUTH, username, password)
    return validation
} 

module.exports = {
    checkAuth 
}