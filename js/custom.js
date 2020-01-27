// Get the elements with class="column"
var elements = document.getElementsByClassName("column");
        
// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// scroll down hide top bar
// Hide Navbar on scroll down
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('.mainnav').addClass("fixed-top");
    } else {
        $('.mainnav').removeClass("fixed-top");
    }

});

// drag to scroll right side
$(function(){
  var curDown = false,
      curYPos = 0,
      curXPos = 0;
  
  $(".test").mousemove(function(m){
    if(curDown){
      window.scrollBy(curXPos - m.pageX, curYPos - m.pageY)
    }
  });
  
  $(".test").mousedown(function(m){
    curYPos = m.pageY;
    curXPos = m.pageX;
    curDown = true;
  });
  
  $(".test").mouseup(function(){
    curDown = false;
  });
})