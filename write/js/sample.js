$(function() {

  $('ul.sub').hide();
  $('ul#menu li').hover(function() {
    $('ul:not(:animated)', this).fadeIn('fast');
  }, function() {
    $('ul', this).fadeOut('fast');
  });

  // drawer-hambarger
  $('.menu').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle('fast');
  });
  
});