const connection = require("../config/database");   ;
const getAllUsers = async() => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}
// giong nhu models

const getUserById = async(userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ? ', [userId]); // do userID la truyen dong -> ?

    let user = results && results.length > 0 ? results[0] : {};
    return user
}

module.exports = {
    getAllUsers, getUserById
}