$(document).ready(function(){

$(window).scroll(function(){
  var showAfter = 60;
  if($(this).scrollTop() > showAfter){
    $('#top__btn').fadeIn();
  }else{
    $('#top__btn').fadeOut();
  }
});

$('#top__btn').click(function(){
  $('html, body').animate({scrollTop : 0}, 800);
  return false;
});

});