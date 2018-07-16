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
$("#order").validate({
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

    




      var swiper = new Swiper('.recommendswiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.bakeryswiper-pagination',
          type: 'fraction',
        }
      });

      var swiper = new Swiper('.videothumb', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      

      /* RATE */
      $(function() {
        $('.cakesheart').click(function(){
          $(this).attr('class',"fas fa-star fa-2x cakesheart");
        });
      });

      $(function() {
          $('.defprevent').click(function(){
            event.preventDefault();
          })
      })







      /* MAP */
      // Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(40.725118, -73.997699);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "New York"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);
});