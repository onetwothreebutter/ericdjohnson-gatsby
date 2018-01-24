(function($) {

    "use strict";

    $(document).ready(function(){

        var $html5Video = $('.site__video-embed');
        var $videoContainer = $('.work-example__video-container');

        $html5Video.on('click', function(e) {
            $html5Video[0].play();
        });

        //if the video starts playing by itself then autoplay is supported
        $html5Video.on('playing', autoPlayIsSupported);

        function autoPlayIsSupported() {
            $html5Video.unbind('playing');
            $videoContainer.removeClass('-autoplay-not-supported');
            $html5Video.unbind('click');
        }

    });

})(jQuery);