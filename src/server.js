require('dotenv').config();
const express = require('express') // commonjs 
const configViewEngine = require('./config/viewengine');
const webRouter = require('./routes/web');


const app = express() // tạo express application
const port =  process.env.PORT || 8888 // init port
console.log('>>>  check :', process.env.PORT )
const hostname =  process.env.HOST_NAME 

// config template engine
configViewEngine(app);

// khai báo routes
app.use('/test1', webRouter);



//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
