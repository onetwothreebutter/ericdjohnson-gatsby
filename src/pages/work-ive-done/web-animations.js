import React from 'react'
import Codepen from 'react-codepen-embed'

//var css = require('!css-loader!resolve-url-loader!sass-loader?sourceMap!../../page-assets/work-ive-done/subpages/web-animations/styles/web-animations.sass');
//console.log(css);
import webAnimationsStyles from '../../page-assets/work-ive-done/subpages/web-animations/styles/web-animations.sass'


const WebAnimations = () => (
    <div>
        <section className="work-example-banner">
            <h1 className="web-animations__heading">
                Web Animations
            </h1>
        </section>

        <section className="site__section">
            <p className="site__paragraph-text">I've got a knack for visualizing how a static design can be animated.
                Below are static designs that I've brought to life with my animation vision and coding skills.
            </p>
        </section>

        <hr className="section-divider"/>

        <section className="site__section">
            <h2 className="site__section-heading">SVG Icon Animations</h2>
            <p className="site__paragraph-text">At Cornerstone, our marketing website needed to feel more alive, personable, and less stock-photo-y.
                To address this, the designers wanted custom SVG icons to be animated as the user scrolled over them. I was given the static design and I
                designed the animation and coded it.</p>
            <div className="web-animations__codepen-embed">
                <div className="web-animations__instructions">scroll to animate</div>
                <Codepen className="codepen" height={435} hash="XROOyy" user="ericdjohnson" />
            </div>
            <div className="web-animations__codepen-embed">
                <div className="web-animations__instructions">scroll to animate</div>
                <Codepen className="codepen" height={435} hash="pPGGMK" user="ericdjohnson" />
            </div>
            <div className="web-animations__codepen-embed">
                <div className="web-animations__instructions">scroll to animate</div>
                <Codepen className="codepen" height={435} hash="OmdqPg" user="ericdjohnson" />
            </div>
            <div className="work-example__button-container">
                <a className="site__button" href="http://codepen.io/collection/DyVgBV/" target="_blank">Full Collection on Codepen</a>
            </div>
        </section>

        <hr className="section-divider"/>

        <section className="site__section">
            <h2 className="site__section-heading">Cornerstone Conference Logo</h2>
            <p className="site__paragraph-text">I love Cornerstone's 2016 conference logo. Its vibrant rainbow colors
                inspired me to see if I could animate it in an eye-catching way.
                We added the animation as a hover effect for the logo on the conference website.</p>
            <div className="site__codepen-embed">
                <Codepen className="codepen" height={435} hash="vKQJvG" user="ericdjohnson" />
            </div>
            <p className="site__paragraph-text">
                Here is the animation in action on the website:
            </p>
            <iframe className="work-example__iframe" width="560" height="315" src="//www.youtube.com/embed/Phlgxt4lE8A"
                    frameBorder="0" allowFullScreen></iframe>


        </section>

        <hr className="section-divider"/>

        <section className="site__section">
            <h2 className="site__section-heading">Cornerstone Product Wheel</h2>
            <p className="site__paragraph-text">Our design team created a "product wheel" to illustrate how our products fit together and cover the employee lifecycle (hiring, learning, performance review, etc).
                I was given a static design and I crafted this animation for the Cornerstone home page. </p>
            <div className="site__codepen-embed">
                <Codepen className="codepen" height={400} hash="ZOqEwo" user="ericdjohnson" />
            </div>
        </section>

        <hr className="section-divider"/>

        <section className="site__section">
            <h2 className="site__section-heading">Founder's Timeline</h2>
            <p className="site__paragraph-text">
                Cornerstone's CEO wanted a fun and lively webpage describing the company's journey from startup to IPO. Our creative director handed
                me a static Photoshop file and I ran with it. I designed and coded the animations using ScrollMagic and GreenSock.
            </p>
            <p className="site__paragraph-text">
                Here's a quick screencast of a user scrolling through the page (for this demo, I refactored the page to remove company-specific information and added some fun fake companies).
            </p>
            <div className="work-example__video-container -autoplay-not-supported">
                <span className="site__video-instructions">click to play</span>
                <video className="site__video-embed" autoPlay loop width="600">
                    <source
                        src="/src/pages/work-ive-done/subpages/web-animations/videos/founders-page-demo--optimized.webm"
                        type="video/webm"/>
                    <source
                        src="/src/pages/work-ive-done/subpages/web-animations/videos/founders-page-demo--optimized.mp4"
                        type="video/mp4"/>
                </video>
                <a className="work-example__button" href="https://codepen.io/ericdjohnson/project/live/AwknqA" target="_blank">Live Codepen
                    demo</a>

            </div>
        </section>

        <hr className="section-divider"/>
    </div>
)


export default WebAnimations