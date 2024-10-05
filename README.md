package.json :
    Tại sao lại phân chia Dependencies và devDependencies ? 
    - Muốn ứng dụng có được hiệu năng cao nhất có thể:
        Vì khi sau này lên production chỉ có những package ở trong Dependencies mới được cài đặt còn cái kia thì ko.
        Vì devDependencies có chỉ có tác dụng khi ta codeing thôi , khi sản phẩm đã hoàn thành rồi thì ko cần nữa.

MVC(part 1) :
    Chỉ cần tách thằng routes(web.js) và viewengine.js(config) là okay.
MVC(part 2) :
    Làm quen với thằng controllers(homeControllers.js), chia tách routes và viết code 1 cách hiệu quả khi sử dụng controllers.

=>>>    server.js:  Khởi động ứng dụng, cấu hình view engine và các route.
        routes/web.js:  Điều hướng các request từ người dùng đến controller thích hợp.
        controllers/homeControllers.js:  Xử lý logic cho các request và gửi phản hồi hoặc render các file view (như sample.ejs).
