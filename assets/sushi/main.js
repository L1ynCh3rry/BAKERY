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



/* BOOK A TABLE VALIDATION */
$("#bookatable").validate({
rules: {
  fullname: {
      required: true,
      minlength: 5
  },
  email: {
      email: true
  },
  phone: {
      required: true
  },
  time: {
      required: true
  },
  date: {
      required: true
  }
},
messages: {
  fullname: {
      required: '<p style="color: #f00;">Name field is required</p>',
      minlength: '<p style="color: #f00;">Name must have at least 5 characters</p>'
  },
  email: {
      email: '<p style="color: #f00;">Please enter a valid email adress'
  },
  phone: {
      required: '<p style="color: #f00;">Phone number is required</p>'
  },
  time: {
      required: '<p style="color: #f00;">Time field is required</p>'
  },
  date: {
      required: '<p style="color: #f00;">Date field is required</p>'
  }
}
});





/* NEWSLETTER VALIDATION */
$("#newsletter").validate({
    rules: {
      name: {
          required: true,
          minlength: 5
      },
      email: {
          email: true
      }
    },
    messages: {
      name: {
          required: '<p style="color: #f00;">Name field is required</p>',
          minlength: '<p style="color: #f00;">Name must have at least 5 characters</p>'
      },
      email: {
          email: '<p style="color: #f00;">Please enter a valid email adress'
      }
    }
    });


});