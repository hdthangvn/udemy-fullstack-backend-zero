const express = require('express');

const router = express.Router();


// req (request), res(response) là 2 object trong môi trường Node.js
router.get('/', (req, res) => {
    res.send('Hello World with hoi dan IT && nodemon')
})

router.get('/acb', (req, res) => {
    res.send('Hello ACB!')
})

router.get('/hoidanit', (req, res) => {
    // res.send('<h1> Hello HoiDanIT! </h1>')
    res.render('sample.ejs')
})
module.exports = router; // export default


