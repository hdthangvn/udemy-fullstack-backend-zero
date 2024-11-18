require('dotenv').config();
const express = require('express') // commonjs 
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
// get the client


const app = express() // tạo express application
const port =  process.env.PORT || 8888 // init port
console.log('>>>  chegitck :', process.env.PORT ) 
// khi nào muốn sử dụng process thì xuất cái thư viện dotenv (dòng 1)
const hostname =  process.env.HOST_NAME 


// config template engine
configViewEngine(app);

// khai báo routes
app.use('/', webRoutes);

//test connection


/*
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>>>>> results = ", results );
        // console.log(">>> fields = ", fields);
    }
);
*/

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
