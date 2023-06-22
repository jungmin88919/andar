$(function(){

    let lastScroll = 0;

    $(window).scroll(function(){
        curr=$(this).scrollTop();


        if (curr > 0) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }

        if(curr < lastScroll){
            $('.fix-btn').addClass('on');
        }else{
            $('.fix-btn').removeClass('on');
        }

        lastScroll = curr;

    })

    $('.fix-btn .top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"})
    })

    $(window).trigger('scroll'); //강제실행

    $('.gnb .nav-open').click(function(){
        $('.gnb .group-gnb').toggleClass('on');
        $('.gnb .group-all').stop().slideToggle();
    })

    $('.group-header .btn-menu').click(function(){
        $('body').addClass('scroll-hidden');
        $('.side-nav').addClass('on');
    })
    $('.side-nav .close').click(function(e){
        e.preventDefault();
        $('body').removeClass('scroll-hidden');
        $('.side-nav').removeClass('on');
    })
    //해당영역 제외 클릭시 
    $('body').click(function(e){
        if ($('header').has(e.target).length < 1) {
            $('body').removeClass('scroll-hidden');
            $('.side-nav').removeClass('on');
        }
    })

    //배너스와이퍼
    const bannerSlide = new Swiper(".top-swiper", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
    // 메인스와이퍼
    const mainSlide = new Swiper(".visual-swiper", {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },  
        pagination: {
            el: ".pagination",
        },
    });
    //카테고리스와이퍼
    const cateSlide = new Swiper(".cate-swiper", {
        slidesPerView: 2.3,
        spaceBetween: 10,
      });

      //nav 슬라이드 토글
      $('.side-nav .nav-item .nav').click(function(e){

        if ($(this).siblings('ul').length>0) {
            e.preventDefault();

            $(this).toggleClass('on').siblings('ul').stop().slideToggle();
            
        }
      })
      // 베스트아이템 탭
      $('.best-tab a').click(function(e){
        e.preventDefault();

        id=$(this).data('tab');

        $('.best-tab a').removeClass('active');
        $(this).addClass('active');

        $(id).addClass('on').siblings('.cont').removeClass('on');
      })
})


