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
    $('.logic-dialog').toggleClass('mdc-dialog--open');
  });
  $('.logic-dialog .mdc-dialog__button').click( function() {
    $('.logic-dialog').removeClass('mdc-dialog--open');
  });

  // Open/close Question Library diaglog 
  $('.ql-dialog-button').click( function() {
    $('.question-library-dialog').toggleClass('mdc-dialog--open');
  });
  $('.question-library-dialog .mdc-dialog__button').click( function() {
    $('.question-library-dialog').removeClass('mdc-dialog--open');
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

  // Logic modal tabs
  $('.logic-tabs .mdc-tab').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.logic-tabs .mdc-tab').removeClass('mdc-tab--active');
    $('.logic-tabs .mdc-tab .mdc-tab-indicator').removeClass('mdc-tab-indicator--active');
    $('.logic-tabs .mdc-tab').removeClass('mdc-tab--active');

    $('.tab-content').removeClass('current');

    $(this).addClass('mdc-tab--active');
    $(this).children('.mdc-tab-indicator').addClass('mdc-tab-indicator--active');
    $("#"+tab_id).addClass('current');
  })

  // Question Library Hover preview
  $('.question-library-dialog li').hover(function(){
    var tab_id = $(this).attr('data-tab');
    $('.tab-content').removeClass('current');
    $("#"+tab_id).addClass('current');
  })

  // Themes/Customize Design Tabs
  $('.create-design-menu .customize-button').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.tab-content').removeClass('current');
    $("#"+tab_id).addClass('current');
  })

});