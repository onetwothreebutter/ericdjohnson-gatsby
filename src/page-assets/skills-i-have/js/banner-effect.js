/**
 * Adapted from codrops article https://tympanus.net/codrops/2017/10/10/liquid-distortion-effects/
 */
//PixiJS has to be imported this way using the CommonJS ES5 module method
import * as Pixi from 'pixi.js'
import $ from 'jquery'



const BannerEffect = function (options) {

        //  SCOPE
        /// ---------------------------
        var that = this;


        //  OPTIONS
        /// ---------------------------
        options = options || {};
        options.stageWidth = options.hasOwnProperty('stageWidth') ? options.stageWidth : 1920;
        options.stageHeight = options.hasOwnProperty('stageHeight') ? options.stageHeight : 1080;
        options.backgroundImage = options.hasOwnProperty('backgroundImage') ? options.backgroundImage : [];
        options.centerSprites = options.hasOwnProperty('centerSprites') ? options.centerSprites : false;
        options.texts = options.hasOwnProperty('texts') ? options.texts : [];
        options.autoPlay = options.hasOwnProperty('autoPlay') ? options.autoPlay : true;
        options.autoPlaySpeed = options.hasOwnProperty('autoPlaySpeed') ? options.autoPlaySpeed : [10, 3];
        options.fullScreen = options.hasOwnProperty('fullScreen') ? options.fullScreen : true;
        options.displaceScale = options.hasOwnProperty('displaceScale') ? options.displaceScale : [200, 70];
        options.displacementImage = options.hasOwnProperty('displacementImage') ? options.displacementImage : '';
        options.navElement = options.hasOwnProperty('navElement') ? options.navElement : document.querySelectorAll('.scene-nav');
        options.displaceAutoFit = options.hasOwnProperty('displaceAutoFit') ? options.displaceAutoFit : false;
        options.wacky = options.hasOwnProperty('wacky') ? options.wacky : false;
        options.interactive = options.hasOwnProperty('interactive') ? options.interactive : false;
        options.interactionEvent = options.hasOwnProperty('interactionEvent') ? options.interactionEvent : '';
        options.displaceScaleTo = (options.autoPlay === false) ? [0, 0] : [20, 20];
        options.textColor = options.hasOwnProperty('textColor') ? options.textColor : '#fff';
        options.displacementCenter = options.hasOwnProperty('displacementCenter') ? options.displacementCenter : false;
        options.dispatchPointerOver = options.hasOwnProperty('dispatchPointerOver') ? options.dispatchPointerOver : false;


        //  PIXI VARIABLES
        /// ---------------------------
        var renderer = new PIXI.autoDetectRenderer(options.stageWidth, options.stageHeight, {transparent: true});
        var stage = new PIXI.Container();
        var slidesContainer = new PIXI.Container();
        debugger;
        var displacementSprite = new PIXI.Sprite.fromImage(options.displacementImage);
        var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);


        //  TEXTS
        /// ---------------------------
        var style = new PIXI.TextStyle({
            fill: options.textColor,
            wordWrap: true,
            wordWrapWidth: 400,
            letterSpacing: 20,
            fontSize: 14
        });


        /// ---------------------------
        //  INITIALISE PIXI
        /// ---------------------------
        this.initPixi = function () {

            // Add canvas to the HTML
            $('.skills-banner').append(renderer.view);


            // Add child container to the main container
            stage.addChild(slidesContainer);


            // Enable Interactions
            stage.interactive = true;


            // Fit renderer to the screen
            if (options.fullScreen === true) {
                renderer.view.style.objectFit = 'cover';
                renderer.view.style.width = '100%';
                renderer.view.style.height = '100%';
                renderer.view.style.top = '50%';
                renderer.view.style.left = '50%';
                renderer.view.style.webkitTransform = 'translate( -50%, -50% ) scale(1.2)';
                renderer.view.style.transform = 'translate( -50%, -50% ) scale(1.2)';
            } else {
                renderer.view.style.maxWidth = '100%';
                renderer.view.style.top = '50%';
                renderer.view.style.left = '50%';
                renderer.view.style.webkitTransform = 'translate( -50%, -50% )';
                renderer.view.style.transform = 'translate( -50%, -50% )';
            }


            displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;


            // Set the filter to stage and set some default values for the animation
            stage.filters = [displacementFilter];

            if (options.autoPlay === false) {
                displacementFilter.scale.x = 0;
                displacementFilter.scale.y = 0;
            }

            if (options.wacky === true) {

                displacementSprite.anchor.set(0.5);
                displacementSprite.x = renderer.width / 2;
                displacementSprite.y = renderer.height / 2;
            }

            displacementSprite.scale.x = 2;
            displacementSprite.scale.y = 2;

            // PIXI tries to fit the filter bounding box to the renderer so we optionally bypass
            displacementFilter.autoFit = options.displaceAutoFit;

            stage.addChild(displacementSprite);

        };


        /// ---------------------------
        //  LOAD SLIDES TO CANVAS
        /// ---------------------------
        this.loadPixiSprites = function () {

            var texture = new PIXI.Texture.fromImage(options.backgroundImage);
            var image = new PIXI.Sprite(texture);

            if (options.centerSprites === true) {
                image.anchor.set(0.5);
                image.x = renderer.width / 2;
                image.y = renderer.height / 2;
            }

            slidesContainer.addChild(image);


        };


        /// ---------------------------
        //  DEFAULT RENDER/ANIMATION
        /// ---------------------------
        if (options.autoPlay === true) {

            var ticker = new PIXI.ticker.Ticker();

            ticker.autoStart = options.autoPlay;

            ticker.add(function (delta) {

                displacementSprite.x += options.autoPlaySpeed[0] * delta;
                displacementSprite.y += options.autoPlaySpeed[1];

                renderer.render(stage);

            });

        } else {

            var render = new PIXI.ticker.Ticker();

            render.autoStart = true;

            render.add(function (delta) {
                renderer.render(stage);
            });

        }


        /// ---------------------------
        //  INIT FUNCTIONS
        /// ---------------------------

        this.init = function () {

            that.initPixi();
            that.loadPixiSprites();

        };


        /// ---------------------------
        //  INTERACTIONS
        /// ---------------------------
        function rotateSpite() {
            displacementSprite.rotation += 0.001;
            rafID = requestAnimationFrame(rotateSpite);
        }

        if (options.interactive === true) {

            var rafID, mouseX, mouseY;

            // Enable interactions on our slider
            slidesContainer.interactive = true;
            slidesContainer.buttonMode = true;

            // HOVER
            if (options.interactionEvent === 'hover' || options.interactionEvent === 'both') {

                slidesContainer.pointerover = function (mouseData) {
                    mouseX = mouseData.data.global.x;
                    mouseY = mouseData.data.global.y;
                    TweenMax.to(displacementFilter.scale, 1, {
                        x: "+=" + Math.sin(mouseX) * 100 + "",
                        y: "+=" + Math.cos(mouseY) * 100 + ""
                    });
                    rotateSpite();
                };

                slidesContainer.pointerout = function (mouseData) {
                    TweenMax.to(displacementFilter.scale, 1, {x: 0, y: 0});
                    cancelAnimationFrame(rafID);
                };

            }

            // CLICK
            if (options.interactionEvent === 'click' || options.interactionEvent === 'both') {

                slidesContainer.pointerup = function (mouseData) {
                    if (options.dispatchPointerOver === true) {
                        TweenMax.to(displacementFilter.scale, 1, {
                            x: 0, y: 0, onComplete: function () {
                                TweenMax.to(displacementFilter.scale, 1, {x: 20, y: 20});
                            }
                        });
                    } else {
                        TweenMax.to(displacementFilter.scale, 1, {x: 0, y: 0});
                        cancelAnimationFrame(rafID);
                    }

                };

                slidesContainer.pointerdown = function (mouseData) {
                    mouseX = mouseData.data.global.x;
                    mouseY = mouseData.data.global.y;
                    TweenMax.to(displacementFilter.scale, 1, {
                        x: "+=" + Math.sin(mouseX) * 1200 + "",
                        y: "+=" + Math.cos(mouseY) * 200 + ""
                    });
                };

            }

        }


        /// ---------------------------
        //  CENTER DISPLACEMENT
        /// ---------------------------
        if (options.displacementCenter === true) {
            displacementSprite.anchor.set(0.5);
            displacementSprite.x = renderer.view.width / 2;
            displacementSprite.y = renderer.view.height / 2;
        }


        /// ---------------------------
        //  START
        /// ---------------------------
        this.init();

}

export default BannerEffect
