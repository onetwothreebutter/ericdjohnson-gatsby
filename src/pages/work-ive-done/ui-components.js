import React from 'react'
import Codepen from 'react-codepen-embed'

//styles
import uiComponentStyles from '../../page-assets/work-ive-done/subpages/ui-components/styles/ui-components.sass'



const UIComponentsPage = () => {

    var codependProps = { className: 'codepen', height: 435, user: 'ericdjohnson', preview: false, defaultTab: 'result' }

    return (
        <div>
            <section className="ui-components-banner">
                <h1 className="ui-components-banner__heading">
                    UI Components
                </h1>
            </section>

            <section className="site__section">
                <p className="site__paragraph-text">These are some of the user interface elements I designed and developed for my current job at Cornerstone. In
                    most cases, I was
                    given a static visual design with no direction and left to create the animations and interactions using my best
                    judgement.</p>
            </section>

            <hr className="section-divider"/>

            <section className="site__section">
                <h2 className="site__section-heading">Aperture-style Play Button</h2>
                <p className="site__paragraph-text">I designed and coded this button, but it was inspired by this <a href="https://codepen.io/shshaw/pen/BxLbqO/">@keyframers codepen/episode</a>. I decided to deviate from the apparoch used in the @keyframers codepen, and instead, animate CSS clip-path to create the aperture effect.
                </p>
                <div className="site__codepen-embed">
                    <Codepen {...codependProps} height={385} hash="bKVxem"/>
                </div>
            </section>


            <hr className="section-divider"/>

            <section className="site__section">
                <h2 className="site__section-heading">Animated Banner</h2>
                <p className="site__paragraph-text">I designed the animations for this banner and figured out a way to make the background layers out
                    of a single repeating image. This allowed me more flexibility in animating the background.
                </p>
                <div className="site__codepen-embed">
                    <Codepen {...codependProps} height={785} hash="VMLdZX"/>
                </div>
            </section>

            <hr className="section-divider"/>

            <section className="site__section">

                <h2 className="site__section-heading">Displaying Cropped Text</h2>
                <p className="site__paragraph-text">Conference speaker bios tend to vary widely in length, and almost always exceed
                    the area provided for them in any design. On Cornerstone's conference website, we needed to to crop the text, while still allowing
                    users to easily access speaker's full bios.
                </p>
                <p className="site__paragraph-text">
                    Two obvious options were:
                </p>
                <ol className="site__ol-or-ul-list">
                    <li className="site__list-item">Expand the element containing a speaker's bio, pushing the other
                        elements out of the way
                    </li>
                    <li className="site__list-item">Open a modal that would have plenty of room to display the speaker's bio</li>
                </ol>
                <p className="site__paragraph-text">
                    In each approach, the user's eye would be distracted by a lot of movement on the screen,
                    and, in the second case, the user wouldn't be able to continue reading where he or she left off.
                </p>
                <p className="site__paragraph-text">
                    I devised the solution below, which reveals the hidden text using <code>overflow:hidden</code>.
                </p>
                <div className="site__codepen-embed">
                    <Codepen {...codependProps} height={665} hash="MmmNKP"/>
                </div>

            </section>

            <hr className="section-divider"/>

            <section className="site__section">
                <h2 className="site__section-heading">Making Web Forms Engaging</h2>
                <p className="site__paragraph-text">
                    For the reboot of one of our products, I was tasked with creating a multi-pane form for account creation. The
                    idea was to make the form engaging and user-friendly, and to try to encourage form completion by breaking the 10+ field
                    form into bite-size chunks.
                </p>
                <p className="site__paragraph-text">
                    The original design called for putting the form labels in the text field. I
                    initiated a conversation with
                    the designer and convinced him to move the form labels above the input boxes to improve usability. I also included
                    a fun shake effect, borrowed from Mac OS's login field, to play the user enters invalid information.
                </p>
                <div className="site__codepen-embed">
                    <Codepen {...codependProps} height={865} hash="JWZzEN"/>
                </div>
            </section>

            <hr className="section-divider"/>

            <section className="site__section">
                <h2 className="site__section-heading">Client Slider</h2>
                <p className="site__paragraph-text">I created this slider to display some of Cornerstone's featured clients and to play a
                    video of each client's story. I used an SVG filter to achieve the grayed-out logos, which ensured broad browser
                    compatibility, and also made it so our content admins would only need to upload a single image. Here I've replaced
                    the client quotes and videos with more fun material.
                </p>
                <div className="site__codepen-embed" style={ {width:'800px;'} }>
                    <Codepen {...codependProps} height={625} hash="b93e0578d2a42b3a8983431c02cf7a8d"/>
                </div>
            </section>

            <hr className="section-divider"/>

            <section className="site__section">
                <h2 className="site__section-heading">Morphing Video Play Button</h2>
                <p className="site__paragraph-text">
                    I've coded a few video play buttons in my time, and one night I had a dream about a play button that morphed into
                    the video. I created a couple versions of my concept below.
                </p>
                <p className="site__paragraph-text">Pure CSS proof-of-concept, animating the border property
                    (unfortunately, it's a little buggy on Safari).
                </p>
                <div className="site__codepen-embed">
                    <Codepen {...codependProps} height={465} hash="LNvxow"/>
                </div>
                <p className="site__paragraph-text">
                    SVG version, which uses Greensock web animation library to morph the play button triangle into a rectangle where
                    the video will play.
                </p>
                <div className="site__codepen-embed">
                    <Codepen {...codependProps} height={465} hash="QaLPjZ"/>
                </div>
            </section>

            <hr className="section-divider"/>
        </div>
    )
}

export default UIComponentsPage