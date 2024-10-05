const getHomepage = (req, res) => {
    // process data
    // call model
    res.send('Hello World with hoi dan IT && nodemon')
}

const getABC = (req, res) => {
    res.send('check ABC');
}

const getHoidanit = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getABC, getHoidanit
}

