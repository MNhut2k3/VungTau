// Script.js (Các tính năng JavaScript có thể thêm vào sau này)
// Ví dụ: Hiển thị thông tin chi tiết khi click vào từng mục
document.querySelectorAll('.section ul li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Bạn đã chọn: ${item.textContent}`);
    });
});

// JavaScript for expanding/collapsing list items
document.addEventListener("DOMContentLoaded", function() {
    const listItemHeaders = document.querySelectorAll(".section h2");

    listItemHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const list = this.nextElementSibling.querySelector("ul");
            list.classList.toggle("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
