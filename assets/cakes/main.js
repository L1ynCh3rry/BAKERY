$(document).ready(function() {

    /* NAVIGATION SCROLL */
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('#cakesheader').addClass('shrink');
      } else {
        $('#cakesheader').removeClass('shrink');
      }
    });










     /* NAVIGATION TOGGLE BUTTON */ 
$('#cakesmenutoggle').click(function() {
    event.preventDefault();
$('#cakesmenu').addClass('cakesmenuactive');
$('#body').addClass('overflow');
});

$('#cakesmenuclose').click(function() {
    event.preventDefault();
$('#cakesmenu').removeClass('cakesmenuactive');
$('#body').removeClass('overflow');
});


/* SOCIAL BUTTON TOGGLE */
$('#cakessocialtoggle').click(function() {
    event.preventDefault();
$('#socialbutton').toggleClass('socialbuttonactive');
$('#topsocialul').toggleClass('topsocialactive');
});











/* BOOK A TABLE VALIDATION */
$("#reservation").validate({
rules: {
  name: {
      required: true,
      minlength: 5
  },
  email: {
      required: true,
      email: true
  },
  peopleno: {
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
  name: {
      required: '<p style="color: #f00;">Name field is required</p>',
      minlength: '<p style="color: #f00;">Name must have at least 5 characters</p>'
  },
  email: {
      required: '<p style="color: #f00;">E-mail field is required</p>',
      email: '<p style="color: #f00;">Please enter a valid email adress'
  },
  peopleno: {
      required: '<p style="color: #f00;">People No. field is required</p>'
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
      email: {
          required: true,
          email: true
      }
    },
    messages: {
      email: {
          required: '<p style="color: #f00;">E-mail field is required</p>',
          email: '<p style="color: #f00;">Please enter a valid email adress'
      }
    }
    });

    





    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });



});