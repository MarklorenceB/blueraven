$("#footer").css(
  "margin-top",
  $(document).height() -
    ($("#header").height() + $("#content").height()) -
    $("#footer").height()
);

$("#back-to-top").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    700
  );
});

$(function () {
  $(".toggle-button").click(function (j) {
    $(".toggle-button").not(this).children(".rotate").removeClass("down");

    $(this).children(".rotate").toggleClass("down");

    var accordion = $(this)
      .closest(".accordion-body")
      .find(".body-content-accor");

    $(this)
      .closest(".accordion-list")
      .find(".body-content-accor")
      .not(accordion)
      .slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this)
        .closest(".accordion-list")
        .find(".toggle-button.active")
        .removeClass("active");

      $(this).addClass("active");
    }
    accordion.stop(false, true).slideToggle();

    j.preventDefault();
  });
});

$(function () {
  $(".product").matchHeight({ byRow: false });
});

$(function () {
  $(".imgs").matchHeight({ byRow: false });
});

$(function () {
  $(".content-rental").matchHeight({ byRow: false });
});

$(function () {
  $(".images-gal").matchHeight({ byRow: false });
});

// for toggle button on header
$(".navbar-toggler").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("navbar-toggler--active");
});

// for toggling button
$(".navbar-toggler").click(function () {
  $("header").toggleClass("change_header_bg").toggleClass("main_header_bg");
});

// Navbar BG effect when scrolling
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $("header").addClass("active_bg");
    } else {
      $("header").removeClass("active_bg");
    }
  });
});

// for owl carousel


//  (function(){

//     var doc = document.documentElement;
//     var w = window;

//     var prevScroll = w.scrollY || doc.scrollTop;
//     var curScroll;
//     var direction = 0;
//     var prevDirection = 0;

//     var header = document.getElementById('site-header');

//     var checkScroll = function() {

//       /*
//       ** Find the direction of scroll
//       ** 0 - initial, 1 - up, 2 - down
//       */

//       curScroll = w.scrollY || doc.scrollTop;
//       if (curScroll > prevScroll) {
//         //scrolled up
//         direction = 2;
//       }
//       else if (curScroll < prevScroll) {
//         //scrolled down
//         direction = 1;
//       }

//       if (direction !== prevDirection) {
//         toggleHeader(direction, curScroll);
//       }

//       prevScroll = curScroll;
//     };

//     var toggleHeader = function(direction, curScroll) {
//       if (direction === 2 && curScroll > 52) {

//         //replace 52 with the height of your header in px

//         header.classList.add('hide');
//         prevDirection = direction;
//       }
//       else if (direction === 1) {
//         header.classList.remove('hide');
//         prevDirection = direction;
//       }
//     };

//     window.addEventListener('scroll', checkScroll);

//   })();
