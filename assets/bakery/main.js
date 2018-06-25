$(document).ready(function() {

    /* SEARCH TOGGLE */ 
    $('#bakerysearchtoggle').click(function() {
        $('#bakerysearch').addClass('bakerysearch');
    });

    $('#bakerysearchclose').click(function() {
        $('#bakerysearch').removeClass('bakerysearch');
    });



    /* NAVIGATION TOGGLE BUTTON */ 
    $('#bakerynavbutton').click(function() {
      $('#bakerymenu').addClass('bakerymenuactive');
      $('#body').addClass('overflow');
  });

  $('#bakerymenuclose').click(function() {
      $('#bakerymenu').removeClass('bakerymenuactive');
      $('#body').removeClass('overflow');
  });


   
        // TOP SWIPER
        var swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
          });



        // PICTURES SWIPER
          var swiper = new Swiper('.PSWIPER', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            freeMode: true,
            navigation: {
              nextEl: '.bakeryswiper-button-next',
              prevEl: '.bakeryswiper-button-prev',
            },
            pagination: {
              el: '.bakeryswiper-pagination',
              type: 'fraction',
            }
          });


          /* NAVIGATION SCROLL */
          $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
              $('#bakerynav').addClass('shrink');
            } else {
              $('#bakerynav').removeClass('shrink');
            }
          });
     

});
