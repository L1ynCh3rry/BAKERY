$(document).ready(function() {

          /* NAVIGATION SCROLL */
          $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
              $('#ffnavigation').addClass('shrink');
            } else {
              $('#ffnavigation').removeClass('shrink');
            }
          });

           /* NAVIGATION TOGGLE BUTTON */ 
    $('#ffmenutoggle').click(function() {
      $('#ffmenu').addClass('ffmenuactive');
      $('#body').addClass('overflow');
  });

  $('#ffmenuclose').click(function() {
      $('#ffmenu').removeClass('ffmenuactive');
      $('#body').removeClass('overflow');
  });
     

});