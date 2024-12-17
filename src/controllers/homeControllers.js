
const connection = require('../config/database');
const router = require('../routes/web');
const {getAllUsers} = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers()
    // let ky vong ve phai tra ra dang array -> dung await
    console.log(">>> check rows:", results);
    return res.render('home.ejs', {listUsers: results})
   
}

const getABC = (req, res) => {
    res.send('check ABC');
}

const getHoidanit = (req, res) => {
    res.render('sample.ejs');
}

const getCreatePage = (req,res) => {
    res.render('create.ejs');
}

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body)
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    //  let {email, name, city} = req.body;
    
    console.log(">>> email =", email, "   >>> name = ", name, "  >>> city = ", city)

    

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email , name , city ],
    ); 
    console.log(">>> Check results: ", results);
    res.send(' Created user succeed  !!');
}

const getUpdatePage = (req,res) => {
    const userId = req.params.id;
    console.log(">>> req.params:: ", req.params) // kieu du lieu String
    res.render('edit.ejs');
}

module.exports = {
    getHomepage, getABC, getHoidanit, 
    postCreateUser, getCreatePage, getUpdatePage
}

