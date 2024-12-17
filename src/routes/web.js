const express = require('express');
const { getHomepage, getABC, getHoidanit, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeControllers');
const router = express.Router();
// router.Method('/route',handler)

// req (request), res(response) là 2 object trong môi trường Node.js
router.get('/', getHomepage); // ko có dấu đóng mở ngoặc vì nếu có nó sẽ thực thi ngay tại đây
// bê tất cả logic qua thằng controllers  , 
    


router.get('/abc', getABC);
router.get('/hoidanit', getHoidanit);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);
router.get('/update/:id', getUpdatePage);

module.exports = router; // export default


