$(function () {

    // swiperプラグイン設定
    const swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // wowプラグイン初期設定
    new WOW().init();

    // ナビゲーションクリック時の下線の設定
    $('.header-nav-item a').click(function() {
        $('.header-nav-item a').removeClass( 'active' );
        $(this).addClass( 'active' );
        return false;
    });

    // スマホレスポンシブ時のヘッダーメニューアイコン表示設定
    $(".drawer-icon").on("click", function(e) {
        e.preventDefault;
        $(this).toggleClass("active");
        $(".drawer-content").toggleClass("active");    
        $(".drawer-background").toggleClass("active");
        $(".drawer-content-item a").on("click", function() {
            $(".drawer-icon").removeClass("active");
            $(".drawer-content").removeClass("active");
            $(".drawer-background").removeClass("active");
        });
        return false;
    });

    // スムーズスクロール設定
    $('a[href^="#"]').click(function(){
        let header = $("header").innerHeight();
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - header;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

      // トップへ戻るボタンのフローティング設定
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $(".totop").addClass("active");
        } else {
            $(".totop").removeClass("active");
        }
    });

    // モーダルウィンドウ設定
    let target = $(".modal-open").data("target");
    let modalDisplay = $("." + target);

    $(".modal-open").click(function () { 
        modalDisplay.addClass("show");
        $('html, body').css('overflow-y', 'hidden');
        return false;
    });
    $(".md-closed a").click(function () {
        modalDisplay.removeClass("show");
        $('html, body').css('overflow-y', 'visible');
        return false;
    });
    $(".md-closed a").click(function () {
        modalDisplay.removeClass("show");
        $('html, body').css('overflow-y', 'visible');
        return false;
    });

})