$(document).ready(function(){
    // banner slider 
    $(".banner-slider").owlCarousel({
        items: 1,
        loop : true,
        autoplay : true,
        nav : true,
        navText: ['<i class="fa-solid fa-arrow-up-long"></i>', '<i class="fa-solid fa-arrow-down-long"></i>']
    });

// best tour slider 
    $(".best-selling-tour-slider").owlCarousel({
        loop : true,
        items: 3,
        nav : true,
        margin: 50,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1,
               
            },
            // breakpoint from 480 up
            480 : {
             items: 2,
            },
            // breakpoint from 768 up
            768 : {
             items: 3
            }
        }

    });
  });