$(document).ready(function() {

          /* NAVIGATION SCROLL */
          $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
              $('#ffnavigation').addClass('shrink');
            } else {
              $('#ffnavigation').removeClass('shrink');
            }
          });
     

});