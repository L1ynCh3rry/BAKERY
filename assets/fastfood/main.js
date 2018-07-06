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
        event.preventDefault();
      $('#ffmenu').addClass('ffmenuactive');
      $('#body').addClass('overflow');
  });

  $('#ffmenuclose').click(function() {
        event.preventDefault();
      $('#ffmenu').removeClass('ffmenuactive');
      $('#body').removeClass('overflow');
  });
  

  /* FAST FOOD HEART CLICK */
  $(function() {
    $('.ffheart').click(function(){
      $(this).attr('src',"assets/photos/fastfood/heartactive.png");
    });
  });

  $("#maoform").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true
        },
        order: {
            required: true,
            minlength: 5
        }
    },
    messages: {
        email: {
            required: '<p style="color: #f00;">Email adress is required</p>',
            email: '<p style="color: #f00;">Please enter a valid email adress'
        },
        name: {
            required: '<p style="color: #f00;">Name field is required</p>',
            minlength: '<p style="color: #f00;">Name must have at least 2 characters</p>'
        },
        phone: {
            required: '<p style="color: #f00;">Phone number is required</p>'
        },
        order: {
            required: '<p style="color: #f00;">Order field is required</p>',
            minlength: '<p style="color: #f00;">Order must have at least 5 characters</p>'
        }
    }
});


});