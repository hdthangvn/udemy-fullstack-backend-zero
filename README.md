Bạn gửi yêu cầu → server.js nhận → routes quyết định chuyển yêu cầu tới đâu → middleware xử lý trước → controller nhận và yêu cầu model lấy dữ liệu → model lấy dữ liệu từ cơ sở dữ liệu → view nhận dữ liệu và chuẩn bị giao diện → Trả về cho người dùng.

package.json :
Tại sao lại phân chia Dependencies và devDependencies ? - Muốn ứng dụng có được hiệu năng cao nhất có thể:
Vì khi sau này lên production chỉ có những package ở trong Dependencies mới được cài đặt còn cái kia thì ko.
Vì devDependencies có chỉ có tác dụng khi ta codeing thôi , khi sản phẩm đã hoàn thành rồi thì ko cần nữa.

config: Đóng vai trò như "sổ tay" ghi chú, chứa tất cả cấu hình như thông tin kết nối cơ sở dữ liệu. Ví dụ: nếu cơ sở dữ liệu đổi từ "localhost" sang một máy chủ khác, config sẽ ghi lại thông tin mới này để các phần khác biết cách kết nối.

migration: Khi cần thay đổi cấu trúc cơ sở dữ liệu, như thêm cột mới (ví dụ thêm "loại sản phẩm"), migration sẽ giúp quản lý việc thay đổi mà không làm hỏng cơ sở dữ liệu hiện có.

seeder: Để có dữ liệu thử nghiệm, seeder sẽ thêm sản phẩm giả lập vào cơ sở dữ liệu. Ví dụ: nó có thể tạo một vài sản phẩm mẫu để khi bạn kiểm tra ứng dụng, bạn không phải nhập liệu bằng tay.

    Tại sao lại phân chia Dependencies và devDependencies ? 
    - Muốn ứng dụng có được hiệu năng cao nhất có thể:
        Vì khi sau này lên production chỉ có những package ở trong Dependencies mới được cài đặt còn cái kia thì ko.
        Vì devDependencies có chỉ có tác dụng khi ta codeing thôi , khi sản phẩm đã hoàn thành rồi thì ko cần nữa.

MVC(part 1) :
    Chỉ cần tách thằng routes(web.js) và viewengine.js(config) là okay.
MVC(part 2) :
    Làm quen với thằng controllers(homeControllers.js), chia tách routes và viết code 1 cách hiệu quả khi sử dụng controllers.

=>>>    server.js:  Thiết lập các cấu hình liên quan đến view engine, ví dụ như dùng EJS để render các file view.
        routes/web.js:  Điều hướng các request từ người dùng đến controller thích hợp.
        controllers/homeControllers.js:  Xử lý logic cho các request và gửi phản hồi hoặc render các file view (như sample.ejs).
        views/sample.ejs:  Đây là file view (giao diện) được render phía server. Nó sử dụng EJS (Embedded JavaScript) để hiển thị dữ liệu mà controller truyền tới.
        server.js:  Đây là file chính, nơi bạn khởi tạo server Node.js, cài đặt middleware, và khởi động toàn bộ ứng dụng.

