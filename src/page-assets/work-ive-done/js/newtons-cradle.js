(function($) {

    "use strict";

    $(document).ready(function() {

        //listen for hover
        $('.work-tile.-animations').hover(startAnimation, stopAnimation);

        function startAnimation() {
            newtonsCradleTl.play();
        }

        function stopAnimation() {
            newtonsCradleTl.pause();
        }


        //set up animation
        var newtonsCradleTl = new TimelineMax();
        var $leftBall = $("#newtons-cradle #left-ball");
        var $rightBall = $("#newtons-cradle #right-ball");

        newtonsCradleTl
            .pause()
            .fromTo($leftBall, 0.25, {rotation: "15deg", transformOrigin: "top center"}, {rotation: "0deg", ease: Power4.easeIn}, 0)
            .to($rightBall, 0.25, {rotation: "-15deg", transformOrigin: "top center", ease: Power4.easeOut}, 0.25)
            .to($rightBall, 0.25, {rotation: "0deg", ease: Power4.easeIn}, 0.50)
            .to($leftBall, 0.25, {rotation: "15deg", ease: Power4.easeOut}, 0.75)
            .repeat(-1);

    });
})(jQuery);
