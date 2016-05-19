
$(window).scroll(function() {
if ($(this).scrollTop() > 1000){  
    $('.background').addClass("background-blur");
  }
  else {
    $('.background').removeClass("background-blur");
  }
});