$(document).ready(function(){


    $('.faq-card').click(function(){
        $(this).children(".hide-text").slideToggle();          
    });




    getScrollTopValue();
    homeBanner();
    reviewAutoplay();
    showingNavButton();
    newsFlesh();
    aboutClick();
    caseStudiesClick();
    operationsClick();
    locationClick();
    contactClick();
    navContentClick();


    $('.location video').playbackRate = 2.00;
   





    // function for navigation bar content click
    function navContentClick(){
        var width = $(window).width();
        console.log(width);
        if(width <= 768){
            $('nav ul li a').click(function(){
            $('nav').slideToggle();
            });
        }
 }

// function for about button click
    function aboutClick(){       
        $("#nav-about").click(function() {
            $('html, body').animate({
                scrollTop: $(".about").offset().top - 126              
            }, 500);
        });
    }
    // function for blog button click
    function caseStudiesClick(){       
        $("#nav-blog").click(function() {
            $('html, body').animate({
                scrollTop: $(".blog").offset().top - 40
              
            }, 500);
        });
    }
    // function for operation button click
    function operationsClick(){       
        $("#nav-operations").click(function() {
            $('html, body').animate({
                scrollTop: $(".operations").offset().top - 40
              
            }, 500);            
        });
    }
    // function for location button click
    function locationClick(){       
        $("#nav-operation").click(function() {
            $('html, body').animate({
                scrollTop: $(".location").offset().top - 100              
            }, 500);            
        });
    }
    function contactClick(){       
        $("#nav-footer").click(function() {
            $('html, body').animate({
                scrollTop: $("#footer").offset().top-100
            }, 500);             
        });
    }



    // function for news flesh slider
    function newsFlesh(){
        $(".newsflesh").owlCarousel({
            loop:true,
            nav:false,
            autoplay:2000,
            autoplayTimeout:3500,
            autoplaySpeed:1000,
            slideTransition:'linear',
            autoplayHoverPause:true, 
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
          });
    }



    // function for nav button
 function showingNavButton(){
     $('.nav-button').click(function(){
        $('nav').css({
            textAlign : 'center',
            marginTop : '15px'
        });
        $('nav ul').css({
            flexDirection: 'column'
        });
        $('nav ul li').css({
            marginBottom : '10px',
        });
        $('nav').slideToggle();
        
     });
 }

    // function for scrill top value
    function getScrollTopValue(){
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll >= 640){
                $('header').css({
                    background : '#fff',
                    boxShadow : '0px 0px 5px 2px #ddd4d4'
                });
            }else{
                $('header').css({
                    background : 'transparent',
                    boxShadow : 'none'
                });
            }
            // Do something
        });
    }


 // function forclints review banner slider 
   function reviewAutoplay(){
    $('.reviews').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay: true,
        autoplay:3000,
        autoplayTimeout:4500,
        autoplaySpeed:500,
        slideTransition:'linear',
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
   }

    // function for home screen video banner slider 
    function homeBanner(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:3000,
            autoplayTimeout:4500,
            autoplaySpeed:1500,
            slideTransition:'linear',
            autoplayHoverPause:true, 
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    }
 
});