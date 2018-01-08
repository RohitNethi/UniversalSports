/* global $ */
$(document).ready(function() {
    
    /*For the sticky navigation*/
    $('.js--section-sticky').waypoint(function(direction) {
      if(direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      } 
    }, {
        offset: '-500px;'
    });
}); 