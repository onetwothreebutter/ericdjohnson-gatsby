import $ from 'jquery'
import { TimelineMax } from 'gsap'
//imclude Draggable this way to avoid error during server side rendering
// because it requires "navigator" in scope and gatsby build won't work
try {
    var Draggable = require('gsap/Draggable');
} catch (e) {
    console.log(e);
}
import imagesLoaded from 'imagesloaded'

//assets
import footSound from '../files/foot-sound-effect.mp3'
import cartoonPopSound from '../files/cartoon-pop-sound.mp3'
import stretchingSound from '../files/stretching-sound.mp3'



module.exports = function HomePage() {


        var $appendage;
        var $homepageContainer;

        function init() {
            startLoadingAnimation();
            $(document).ready(function(){
                $appendage = $('.easter-egg__appendage');
                $homepageContainer = $('.homepage-scaling-container');
                initBackgroundFocusButtons();
                setupEasterEgg();
            });
        }

        function startLoadingAnimation() {
            imagesLoaded('.homepage-background', function () {
                $('body').addClass('-text-in-focus');
            });
        }

        function initBackgroundFocusButtons() {
            $('.photo-focus__button').on('click', function (e) {
                var $clickedButton = $(e.currentTarget);
                $clickedButton.removeClass('-active');

                if ($clickedButton.hasClass('-focus')) {
                    $clickedButton.next().addClass('-active');
                    $('body').removeClass('-text-in-focus');
                } else {
                    $clickedButton.prev().addClass('-active');
                    $('body').addClass('-text-in-focus');
                }
            });
        }

        function setupEasterEgg() {
            loadYoutubeAPI();
            keepDivOnMyNostril();
            setUpAppendage();
            $('.easter-egg').on('click', tweenEasterEggVideo);
            $('.easter-egg__close').on('click', triggerAppendage);
        }

        var youtubePlayer = null;
        function loadYoutubeAPI() {
            var tag = document.createElement('script');
            tag.src = "//www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



            window.onYouTubeIframeAPIReady = function () {
                youtubePlayer = new YT.Player('easter-egg__video', {
                    height: '315',
                    width: '419',
                    videoId: '-rutX0I6NxU',
                    events: {
                        'onStateChange': HomePage.onPlayerStateChange
                    }
                });
            }
        }

        function onPlayerStateChange(event) {
            if(event.data === YT.PlayerState.ENDED) {
                triggerAppendage();
            }
        }

        function setUpAppendage() {
            $appendage.on('click', restoreOrder);
        }

        function restoreOrder(event) {
            event.preventDefault();
            new TimelineMax()
                .to($appendage, 0.4, {'bottom': '100vh', ease: Power2.easeIn}, 0);

            var $body = $('body');
            if(!$body.hasClass('-text-in-focus')) {
                $body.addClass('-text-in-focus');
                new TimelineMax()
                    .set($homepageContainer, {scaleX: 1.0});
            }
        }

        var youtubePlayer = null;
        function triggerAppendage() {

            setupHomepageDrag();

            youtubePlayer.pauseVideo();

            //animate in the appendage, squish the text
            var homepageContainerDistance = $(window).height() - 450;
            var $easterEggVideoContainer = $('.easter-egg__video-container');
            new TimelineMax()
                .set($homepageContainer, {transition: 'none', transformOrigin: "center bottom"})
                .to($appendage, 0.4, {'bottom': 0, ease: Power2.easeIn}, 0)
                .fromTo($homepageContainer, 0.25, {y: 0}, {y: homepageContainerDistance, ease: Power2.easeIn, onComplete: playAudio, onCompleteParams: ["foot-sound-effect"] }, "moveText-=0.3")
                .to($easterEggVideoContainer, 0.15, {y: 50, scaleY: 0.1, opacity: 0}, "moveText-=0.2")
                .fromTo(['footer', $homepageContainer, '.photo-focus'], 0.1, {scaleY: 1}, {scaleY: 0.1}, "moveText-=0.1")
                .fromTo('body', 0.2, {y:0}, {y:5, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"y"})
                .set($easterEggVideoContainer, {display: "none"})
                .timeScale(1);

            addAudioFile(stretchingSound, 'stretching-sound');
            addAudioFile(cartoonPopSound, 'cartoon-pop-sound');
        }

        function setupHomepageDrag() {

            var dragHomepage = null;


            var $dragHandle = $('<div class="drag-handle"></div>');
            var $homepageHeading = $homepageContainer.find('.homepage-banner__heading');
            $homepageHeading.append($dragHandle);
            var dragHomepageHandle =
                Draggable.create($dragHandle, {type:"y", edgeResistance:0.65, cursor: "ns-resize", bounds: $homepageHeading, throwProps: true})[0];
            dragHomepageHandle.addEventListener("drag", onDrag);
            dragHomepageHandle.addEventListener("dragstart", onDragStart);
            dragHomepageHandle.addEventListener("dragend", onDragEnd);


            var scaleY = 0;
            function onDrag() {
                //if we're done restoring to normal size
                if (scaleY >= 0.9) {
                    if(dragHomepage === null) {
                        dragHomepageHandle.disable();
                        $dragHandle.css({display: 'none'});
                        TweenMax.to(['footer','.photo-focus', $homepageContainer], 1, {scaleY: 1, ease: Elastic.easeOut.config(2, 0.3)});
                        playAudio('cartoon-pop-sound');
                        dragHomepage =
                            Draggable.create($homepageContainer, {type:"x,y", edgeResistance:0.65, bounds: "body", throwProps: true})[0];
                    }
                    return;
                }

                //get the current y scaling
                scaleY = $homepageContainer.css('transform').split(',')[3];
                scaleY = parseFloat(scaleY);

                //increase or decrease!
                if(dragHomepageHandle.getDirection("start") === "up") {
                    TweenMax.set($homepageContainer, {scaleY: "+=0.005"});
                }

            }


            function onDragStart() {
                playAudio('stretching-sound');
            }


            function onDragEnd() {
                pauseAudio('stretching-sound');
            }
        }

        //Easter Egg
        function keepDivOnMyNostril () {

            //https://stackoverflow.com/questions/15836753/position-element-over-background-image-but-the-bg-img-changes-size-with-the-win
            // but tweaked for background-position: center top

            var image = { width: 1280, height: 960 };
            var target = { x: 750, y: 260 };

            var pointer;
            $(document).ready(function(){pointer = $('.easter-egg');});

            $(document).ready(updatePointer);
            $(window).resize(updatePointer);


            function updatePointer() {
                var windowWidth = $(window).width();
                var windowHeight = $(window).height();

                // Get largest dimension increase
                var xScale = windowWidth / image.width;
                var yScale = windowHeight / image.height;
                var scale;
                var xOffset = 0;

                if (xScale > yScale) {
                    // The image fits perfectly in x axis, stretched in y
                    scale = xScale;
                } else {
                    // The image fits perfectly in y axis, stretched in x
                    scale = yScale;
                    xOffset = (windowWidth - (image.width * scale)) / 2;
                }

                pointer.css('top', (target.y) * scale);
                pointer.css('left', (target.x) * scale + xOffset);
            }

        }

        var youtubePlayer = null;
        function tweenEasterEggVideo(event) {

            addAudioFile(footSound, 'foot-sound-effect');

            event.stopPropagation();

            youtubePlayer.playVideo();

            var $nostril = $('.easter-egg');
            var nostrilX =  $nostril.css('left').replace(/px/, '');
            var nostrilY =  $nostril.css('top').replace(/px/, '');

            var $window = $(window);
            var windowCenter = {x: $window.width()/2, y: $window.height()/2};
            var $easterEggVideoContainer = $('.easter-egg__video-container');

            new TimelineMax()
                .set($easterEggVideoContainer, {visibility: 'visible'})
                .fromTo($easterEggVideoContainer, 1, {left: nostrilX, top: nostrilY},
                    {left: windowCenter.x, top: windowCenter.y, scale: 1.0, opacity: 1});

            $('.easter-egg__video').css('pointerEvents','auto');

        }

        function addAudioFile(fileName, className) {
            var $audio = $('<audio class="' + className + '" src="' + fileName + '"></audio>');
            $('body').append($audio);
        }

        function playAudio(className) {
            $('audio').filter("." + className)[0].play();
        }

        function pauseAudio(className) {
            $('audio').filter("." + className)[0].pause();
        }

        return {
            init: init,
            onPlayerStateChange:onPlayerStateChange,
        }

}

