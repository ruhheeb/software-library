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


  // var tabsItem = $(".trend-tabs__item");
  // var contentItem = $('.trend-tabs__content');

  // tabsItem.on('click', function (event) {
  //   var activeContent = $(this).attr('data-target');
  //   tabsItem.removeClass("trend-tabs__item--active");
  //   contentItem.removeClass("trend-tabs__content--active");
  //   $(activeContent).addClass("trend-tabs__content--active");
  //   $(this).addClass("trend-tabs__item--active");
  // });



});