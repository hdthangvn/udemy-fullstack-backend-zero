
const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
   
}

const getABC = (req, res) => {
    res.send('check ABC');
}

const getHoidanit = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body)
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    //  let {email, name, city} = req.body;
    console.log(">>> email =", email, "   >>> name = ", name, "     >>> city = ", city)

    //   let {email, name, city} = req.body;

    //   INSERT INTO Users (email, name, city)
    //   VALUES ("test", "Hoang Duc Thang", "Nghe an");
    

    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?);`,
        [email , name , city ],
        function(err, results) {

            console.log(results);

            res.send(' Created user succeed  !!')
        }
    );
}

module.exports = {
    getHomepage, getABC, getHoidanit, 
    postCreateUser
}

