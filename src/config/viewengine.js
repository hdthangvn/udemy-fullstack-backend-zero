const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
    // config template engine
    console.log(">>> check __dirname: ",path.join('./src', 'views'));
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    // app.set(key, value)

    // config static files : image/css/js
    app.use(express.static(path.join('./src', 'public')));
}
// exports = xuất khẩu
module.exports = configViewEngine;
// ko thêm () sau configViewEngine vì nó sẽ hiểu là thực thi cái hàm này 


// LƯU Ý : sau này khi cấu hình cái viewEngine thì tùy thuộc vào file mà chúng ta đặt. 
// để tùy chỉnh cái đường link như thế nào.
// để nói với thằng express biết nơi nào là thư mục view.