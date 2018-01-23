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
        offset: '-300px;'
    });
    
    $('.js--nav-icon').click(function() {
        var icon = $('.js--nav-icon i');
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    })

});

