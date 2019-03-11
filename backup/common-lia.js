
/*============================================================================
  add headerNav by ksk 20190115
==============================================================================*/
var headerNav = {
  init : function(){
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      e.preventDefault();
      $(this).siblings('.dropdown-container').toggle();
      // Close one dropdown when selecting another
      $('.dropdown-container').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.dropdown-container').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }
};

/*============================================================================
  add somethings by ksk 20190115
==============================================================================*/
var featuredPromotions = {
  init : function() {
    if ($(window).width() > 768) {
      $('.image-bar__overlay').hover(function(){
        $(this).find('.detail-description').slideDown('100', function(){
          $(this).addClass('reveal-details');
        });
      }, function(){
        $(this).find('.detail-description').removeClass('reveal-details');
        $(this).find('.detail-description').slideUp('100');
      });
    }
  }
};


var scrollTap = {
  init : function() {
    if ($(window).width() <= 768) {
      $(window).bind('scroll', function() {
        var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
            $('category-area').addClass('fixed');
          }
          else {
            $('category-area').removeClass('fixed');
          }
      });
    }
  }  
};


var getCurrentScroll = function() {
  return window.pageYOffset || document.documentElement.scrollTop;
};

function fixedAni() {
  var shrinkHeader = 100;
  var innerHeader = $('.inner-header');
  
  $(window).scroll(function(){
     var scroll = getCurrentScroll();   
     var logo = $('.logo','.logo-area');
     if (scroll>=shrinkHeader) {
       innerHeader.addClass('shrink');
       logo.attr('src','images/logo-white.png');
     }
     else {
       innerHeader.removeClass('shrink');
       logo.attr('src','images/logo.png');
     }       
  });
};

function pageTop() {
  var browserWidth = window.innerWidth;
  var topBtn = $('.pagetop');
  
  if (browserWidth <= 768) {
    topBtn.hide();
    $(window).scroll(function(){
      var shrinkHeader = 100;
      var scroll = getCurrentScroll();
      if (scroll>=shrinkHeader) {
          topBtn.fadeIn()
      }else {
          topBtn.fadeOut();
      }
    })
  } 

  topBtn.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });  
};



$(document).ready(function(){  
  pageTop();
  fixedAni();
  // categorySlider.init();
  headerNav.init();
  featuredPromotions.init();
  // bigSlider.init();


    $('.main-carousel-1').owlCarousel({
      // options
    loop:true,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }         
    }); 
    $('.main-carousel-2').owlCarousel({
      // options
    loop:true,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }         
      });  
    $('.main-carousel-3').owlCarousel({
      // options
    loop:true,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }       
      });  
    $('.main-carousel-4').owlCarousel({
      // options
    loop:true,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }         
      });  
    $('.main-carousel-5').owlCarousel({
      // options
    loop:true,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }        
    }); 
    $('.main-carousel-6').owlCarousel({
      // options
    loop:true,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }       
    });    
    $('.main-carousel-7').owlCarousel({
      // options
    loop:true,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }      
    });                                              
    $('.big-carousel-top').owlCarousel({
      center: true,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:3000,
      items:1,
      loop:true,
      margin:10,
      navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
      responsive:{
          600:{
              items:1
          }
      }
 
    });    
    $('.big-carousel').owlCarousel({
      center: true,
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:3000,
      navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
      responsive:{
          600:{
              items:1
          }
      }
 
    }); 

    layerBlock();
    function layerBlock() {
      let body = $('body');
      let tdays = 172800000;
      setTimeout(function(){
        if(!body.hasClass('main')) {
          $('.dimmed').css({
            'position':'fixed',
            'left':0,
            'top':0,
            'width':'100%',
            'height':'100%',
            'background':'rgba(0,0,0,.5)',
            'z-index':9999
          })
        }
      },tdays)

    }    

});



function openClothes(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}