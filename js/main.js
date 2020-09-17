$(document).ready(function(){
    "use strict";

    $("#mainav").slicknav({
        prependTo: '.mobile-menu',
        allowParentLinks:true,
    });

    $(".homepage-slides").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        navText: ["<i class='fa long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.team-list, .testimonail-list').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('.brand-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    $('.web-design-skillbar').circleProgress({
        value: 0.9,
        size: 270,
        thickness:3,
        fill:  "#22bacf",
      }).on('circle-animation-progress', function(event, progress){
        $(this).find('span').html(Math.round(90*progress)+'<i>%</i>');
    });
    $('.graphics-design-skillbar').circleProgress({
        value: 0.85,
        size: 270,
        thickness:3,
        fill:  "#22bacf",
      }).on('circle-animation-progress', function(event, progress){
        $(this).find('span').html(Math.round(85*progress)+'<i>%</i>');
    });
    $('.digital-skillbar').circleProgress({
        value: 0.8,
        size: 270,
        thickness:3,
        fill:  "#22bacf",
      }).on('circle-animation-progress', function(event, progress){
        $(this).find('span').html(Math.round(80*progress)+'<i>%</i>');
    });

// Portfolio Isotop Masonry 
$(".protfolio-filter li").on('click', function(){
    $(".protfolio-filter li").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).attr("data-filter");

    $(".porfolio-list").isotope({
        filter:filterValue,
    });
});
$(".porfolio-list").isotope({
    layoutMode:'masonry',
    masonry:{
        columnWidth:'.col-md-3'
    }
});















})



