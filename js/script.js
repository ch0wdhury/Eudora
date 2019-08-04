    $('.owl-carousel').owlCarousel({
        items:5,
        loop:true,
        center:true,
        margin:5,
        autoplay: false,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive : {
        0 : {
           items : 1,
        },
        480 : {
           items:3,
        },
        768 : {
            items:5,
        },
        1340 : {
          items:5,
        }
      }
    });
     $(".food_item_select a").click(function () {
      	$(this).addClass('active').siblings().removeClass('active');
    });
    $(".load_more").click(function () {
    	$(this).attr('aria-expanded', 'true').addClass('d-none');
    });