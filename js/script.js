$(document).ready(function () {
  // burger button
  $(".menu-button").on('click', function (e) {
    $(this).toggleClass("menu-button--active");
  });


  // sub-menu script 
  var navbarMenuLink = $(".navbar-menu__link");
  var subMenu = $('.sub-menu');

  navbarMenuLink.on("click", function (event) {
    var activeSubMenu = $(this).attr("data-target");
    // console.log($(activeSubMenu));
    // subMenu.removeClass("sub-menu--active");
    $(activeSubMenu).toggleClass("sub-menu--active");
  });

  // pages Arrow
  var navbarPages = $(".navbar__pages");
  var pagesArrow = $(".navbar__pages-arrow");

  navbarPages.on("click", function (event) {
    pagesArrow.toggleClass("navbar__pages-arrow--active");
  });

  // landings Arrow
  var navbarLandings = $(".navbar__landings");
  var navbarLandingsArrow = $(".navbar__landings-arrow");

  navbarLandings.on("click", function (event) {
    navbarLandingsArrow.toggleClass("navbar__landings-arrow--active");
  });


  // sub-sub-menu script
  var subMenuLink = $(".sub-menu__link");
  var subSubMenu = $(".sub-sub-menu");

  subMenuLink.on("click", function (event) {
    var activeSubSubMenu = $(this).attr("data-target");
    subSubMenu.removeClass("sub-sub-menu--active");
    $(activeSubSubMenu).addClass("sub-sub-menu--active");
  });


  // Activate mobile menu
  var menuButton = $(".menu-button");
  var mobileMenu = $(".navbar__mobile-menu");

  menuButton.on("click", function (event) {
    mobileMenu.addClass("navbar__mobile-menu--visible");
  });

  // closing mobile menu
  var closeMobileButton = $(".mobile-menu__close-button");
  var closeMobileMenu = $(".navbar__mobile-menu");

  closeMobileButton.on("click", function (event) {
    closeMobileMenu.removeClass("navbar__mobile-menu--visible");
  });


  // install tabs
  var tabsItem = $(".tabs__item");
  var contentItem = $(".install__tabs-content");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");

    tabsItem.removeClass("tabs__item--active")
    contentItem.removeClass("install__tabs-content--active");
    $(activeContent).addClass("install__tabs-content--active");
    $(this).addClass("tabs__item--active");
  });

  // faq menu script
  var questionsMenu = $('.questions-menu__link');
  var questionsSubMenu = $('.faq__questions-sub');

  questionsMenu.on('click', function (event) {
    var activeMenu = $(this).attr("data-target");
    event.preventDefault();
    questionsMenu.removeClass('questions-menu__link--active');
    questionsSubMenu.removeClass('faq__questions-sub--active');
    $(activeMenu).addClass('faq__questions-sub--active');
    $(this).addClass('faq__questions-sub--active');
  });


  // reviews slider
  var reviewsSlider = new Swiper('.reviews-slider__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 7000,
    },

    pagination: {
      el: '.about-slider__pagination',
      clickable: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // mousewheel: {
    //   invert: true,
    // },

  });

});