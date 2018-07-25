$(document).ready(function() {

    /* NAVIGATION SCROLL */
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('#header').addClass('shrink');
      } else {
        $('#header').removeClass('shrink');
      }
    });

     /* NAVIGATION TOGGLE BUTTON */ 
$('#hacmenutoggle').click(function() {
  event.preventDefault();
$('#hacmenu').addClass('hacmenuactive');
$('#body').addClass('overflow');
});

$('#hacmenuclose').click(function() {
  event.preventDefault();
$('#hacmenu').removeClass('hacmenuactive');
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



$("#subs").validate({
  rules: {
    email: {
        required: true,
        email: true
    }
  },
  messages: {
    email: {
        required: '<p style="color: #f00;">Email adress is required</p>',
        email: '<p style="color: #f00;">Please enter a valid email adress'
    }
  }
  });






var swiper = new Swiper('.topbannerswiper', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});