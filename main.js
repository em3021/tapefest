
$(window).scroll(function() {

var posterHeight = $(".poster").outerHeight();

if ($(this).scrollTop() > (posterHeight - 100)){  
    $('.background').addClass("background-blur");
  }
  else {
    $('.background').removeClass("background-blur");
  }
});
