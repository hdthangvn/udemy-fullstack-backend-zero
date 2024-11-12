 require('dotenv').config();
const express = require('express') // commonjs 
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');
// get the client
const mysql = require('mysql2');


const app = express() // tạo express application
const port =  process.env.PORT || 8888 // init port
console.log('>>>  chegitck :', process.env.PORT )
const hostname =  process.env.HOST_NAME 

// config template engine
configViewEngine(app);

// khai báo routes
app.use('/', webRoutes);

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // default: 3306
    user: 'root', // default: empty
    password: '123456',
    database: 'hoidanit',
});

connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>> results = ", results);
        console.log(">>> fields = ", fields);
    }
  );

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
