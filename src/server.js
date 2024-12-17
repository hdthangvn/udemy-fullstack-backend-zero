require('dotenv').config(); // giúp sử dụng dòng process.env....(in ra ...)
const express = require('express') // import express vào ứng dụng
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');
const connection = require('./config/database'); // Dòng này import cái connection từ file database.js
// get the client


const app = express() // tạo express application
const port =  process.env.PORT || 8888 // init port
console.log('>>>  chegitck :', process.env.PORT ) 
const hostname =  process.env.HOST_NAME 


// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies



configViewEngine(app); // gọi hàm 

app.use('/', webRoutes); // Gắn các routes vào ứng dụng Express


//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
