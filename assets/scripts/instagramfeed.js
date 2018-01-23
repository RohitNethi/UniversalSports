/* global $ */
$(document).ready(function() {


    // var userFeed = new Instafeed({
    //     get: 'user',
    //     userId: '222614337',
    //     limit: 12,
    //     resolution: 'standard_resolution',
    //     accessToken: '222614337.1677ed0.57b448d2e9554bde938212c9c53d8de5',
    //     sortBy: 'most-recent',
    //     template: '<div class="col-md-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    // });

    // userFeed.run();
     var feed = new Instafeed({
        get: 'user',
        userId: '222614337', 
        accessToken: '222614337.1677ed0.57b448d2e9554bde938212c9c53d8de5',
        filter: function(image) {
            return image.tags.indexOf('football') >= 0;
        },
        limit: 12,
        resolution: 'standard_resolution',
        template: '<div class="col-md-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
    });
    feed.run();

});