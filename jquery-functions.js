$(function() {

  // Open/close question group menu
  $('.qg-menu').click( function() {
    $(this).siblings('.mdc-menu').toggleClass('mdc-menu-surface--open');
  });
  $('.qg-menu').click( function(e) {
    e.stopPropagation();
    $(document.body).click( function(e) {
      $('.mdc-menu').removeClass('mdc-menu-surface--open');
    });
  });

  // Open/close logic diaglog 
  $('.qg-logic').click( function() {
    $('.qg-logic-dialog').toggleClass('mdc-dialog--open');
  });

  // Open/close logic diaglog 
  $('.qg-logic-dialog .mdc-dialog__button').click( function() {
    $('.qg-logic-dialog').removeClass('mdc-dialog--open');
  });

  // Survey Preview page

  // Toggle mobile/desktop class
  $('.sp-toggle-width').click( function() {
    $(this).toggleClass('sptw-selected');
    $('.sp-iframe-wrapper').toggleClass('sp-mobile');
  });

  // Hide/show Preview Bar
  $('.sp-hide-bar').click( function() {
    $('.sp-bar').toggleClass('sp-bar-hidden');
    $('.sp-main-container').toggleClass('sp-bar-hidden-container');
  });


});