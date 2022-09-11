$(document).ready(function () {
    //NavBar
    $('.header-bar').click(function (e) { 
        e.preventDefault();
        $('.header__navbar').addClass('active');
        $('.cover').addClass('active')
    });

    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.header__navbar').removeClass('active');
        $('.cover').removeClass('active')
    });

    $('.header-bar').click(function (e) { 
        e.preventDefault();
        $('.header__navbar').addClass('active');
    });

    //Product
    $('.product-tab a').click(function (e) { 
        e.preventDefault();
        const tab_target = $(this).attr('tab-target');
        // Xóa active của các product-list và product-tab a
        $('.product-tab a').removeClass('active');
        $('.product-inner').removeClass('active');
         // /Khi click vào product-tab nào thì nó sẽ được thêm class active
         // Đồng thời product list có id = giá trị của thuộc tính tab - target cũng được thêm class active
        $(this).addClass('active');
        $(tab_target).addClass('active');
    });

    //Slick
    $('.news-slick').slick({
        dots: true, // hiện dot
        arrows: false, // bỏ mũi tên 2 bên
    });


    //Footer
    $('.footer-heading').click(function (e) { 
        e.preventDefault();
        $('.footer-heading').not(this).next().removeClass('active')       
        const addActive = $(this).next()
        addActive.toggleClass('active')
    });

});
