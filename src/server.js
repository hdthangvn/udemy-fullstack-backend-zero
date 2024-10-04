require('dotenv').config();
const express = require('express') // commonjs 
const path = require('path') // commonjs
const configViewEngine = require('./config/viewengine');



const app = express() // tạo express application
const port =  process.env.PORT || 8888 // init port
console.log('>>>  check :', process.env.PORT )
const hostname =  process.env.HOST_NAME 

// config template engine
configViewEngine(app);



// khai báo routes
// req (request), res(response) là 2 object trong môi trường Node.js
app.get('/', (req, res) => {
    res.send('Hello World with hoi dan IT && nodemon')
})

app.get('/acb', (req, res) => {
    res.send('Hello ACB!')
})

app.get('/hoidanit', (req, res) => {
    // res.send('<h1> Hello HoiDanIT! </h1>')
    res.render('sample.ejs')
})

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
