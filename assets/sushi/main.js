$(document).ready(function() {

    /* NAVIGATION SCROLL */
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('#sushi').addClass('shrink');
      } else {
        $('#sushi').removeClass('shrink');
      }
    });

     /* NAVIGATION TOGGLE BUTTON */ 
$('#sushimenutoggle').click(function() {
    event.preventDefault();
$('#sushimenu').addClass('sushimenuactive');
$('#body').addClass('overflow');
});

$('#sushimenuclose').click(function() {
    event.preventDefault();
$('#sushimenu').removeClass('sushimenuactive');
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


    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


});


