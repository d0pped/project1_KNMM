var $body = $('body');

$('.menu-open-btn').on('click', function(){
  $body.addClass('is-menu-open');
  return false;
});

$('.menu-close-btn').on('click', function(){
  $body.removeClass('is-menu-open');
  return false;
});

$('.menu-nav').on('click',
function(){
  $body.removeClass('is-menu-open');
  return true;    
});