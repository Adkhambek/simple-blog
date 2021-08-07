const {fetch, fetchAll} = require('../database/connect');
const {INSERT_CATEGORY} = require('../database/query');

const insertCategory = ({name}) => fetch(INSERT_CATEGORY, name)

module.exports = {
    insertCategory 
}