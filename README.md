package.json :
    Tại sao lại phân chia Dependencies và devDependencies ? 
    - Muốn ứng dụng có được hiệu năng cao nhất có thể:
        Vì khi sau này lên production chỉ có những package ở trong Dependencies mới được cài đặt còn cái kia thì ko.
        Vì devDependencies có chỉ có tác dụng khi ta codeing thôi , khi sản phẩm đã hoàn thành rồi thì ko cần nữa.