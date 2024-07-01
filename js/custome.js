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
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>']
    });
  });