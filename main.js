
$(window).scroll(function() {

var posterHeight = $(".poster").outerHeight();

if ($(this).scrollTop() > (posterHeight - 200)){  
    $('body').addClass("background-blur");
  }
  else {
    $('body').removeClass("background-blur");
  }
});
