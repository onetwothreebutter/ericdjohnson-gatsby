import React from 'react'
import ZoomableImage from '../../page-assets/global/components/zoomable-image'
import YouTube from 'react-youtube'

//styles
import productDesignStyles from '../../page-assets/work-ive-done/subpages/product-design/styles/product-design.sass'

//page assets
import rememberWhenImg from '../../page-assets/work-ive-done/subpages/product-design/images/RememberWhen.jpg'
import goodMeetingCollage from '../../page-assets/work-ive-done/subpages/product-design/images/good-meeting/GoodMeeting-Collage.png'



const ProductDesign = () => {

    let youtubeOpts = {
        playerVars: {
            allowfullscreen: 1
        }
    }

    return (
        <div>
            <section className="product-design-banner">
                <h1 className="product-design-banner__heading">
                    Product Design
                </h1>
            </section>

            <section className="site__section">
                <p className="site__paragraph-text">My experience in product design is limited, but I think I have a talent
                    for creating novel solutions to problems.
                    I participated in a local <a className="site__paragraph-link" href="https://startupweekend.org/" target="_blank">StartUp Weekend</a>,
                    and my product idea&mdash;Remember When&mdash;won
                    my team admission to <a className="site__paragraph-link" href="https://iowajpec.org/entrepreneur-support/venture-school/" target="_blank">Venture School</a>, a
                    six-week program to help startups evaluate their business idea.
                </p>
                <p className="site__paragraph-text">
                    Also, I've come up with a couple of interesting product ideas in the course of my current job. I detail one
                    of them in the second section below.</p>
            </section>

            <hr className="section-divider"/>

            <section className="site__section">
                <h2 className="site__section-heading">Remember When</h2>
                <p className="site__paragraph-text">My grandmother passed away in 2015. I had always told myself I'd spend
                    more time with her, to hear more of her family stories, but I didn't spend as much time with her as I would have liked.
                    And like a lot of people, she wasn't forthcoming with stories and didn't like to draw too much attention to
                    herself.</p>

                <p className="site__paragraph-text">
                    I participated in a Startup Weekend in 2016 and pitched an idea for an app to help elderly people tell
                    their stories. My team and I visited a nursing home, where we witnessed stories pour
                    out of residents when looking through family photo albums.
                </p>
                <p className="site__paragraph-text">Based on that experience, we designed an app concept that was ostensibly a digital
                    photo album on a smartphone or tablet,
                    but would record any audio spoken during the viewing of each photo. Later, a person fulfilling the role of
                    family story curator would review
                    the audio clips and save any that contained stories worth keeping.
                </p>
                <p className="site__paragraph-text">
                    The app solved the problem of people feeling self-conscious when obviously being recorded.  And secondly, by
                    automatically associating audio captions with the photos, it saved a huge amount of time for the family historian.
                </p>
                <p className="site__paragraph-text">
                    This was our mockup:
                </p>

                <figure className="site__figure">
                    <img className="site__image" src={rememberWhenImg} alt="Mockup of photo app for elderly people"/>
                    <figcaption>My mock-up for a story collection app</figcaption>
                </figure>

                <p className="site__paragraph-text">
                    At the end of Startup Weekend, our idea and pitch won us admission to Venture School at the University of
                    Iowa Pappajohn Business School. Venture School is
                    a six-week course that helps students learn how to evaluate business ideas to
                    see if they are feasible. The main focus of the course is getting feedback from mentors and conducting
                    user research by doing in-person interviews.
                </p>
                <p className="site__paragraph-text">

                </p>
                <p className="site__paragraph-text">
                    My team and I conducted over 70 interviews,
                    interviewing people at the local shopping mall about their desires
                    and experiences capturing and recording family memories. It was clear we had found something that people
                    were interested in and struggled with.
                </p>


            </section>

            <hr className="section-divider"/>

            <section className="site__section">
                <h2 className="site__section-heading">GoodMeeting</h2>
                <p className="site__paragraph-text">When my company announced its annual hackathon, I drew upon my experiences with
                    unproductive and inefficient meetings, to create a wireframe of an
                    app that improves the quality and efficiency of meetings.</p>

                <p className="site__paragraph-text">
                    Below is my video pitch of the idea that I submitted to my company's hackathon committee.
                </p>

                <p className="site__paragraph-text">
                    <YouTube className="work-example__iframe" width="660" height="371" videoId="YF79IgUjfUU" opts={youtubeOpts}/>
                </p>

                <div className="site__page-width">
                    <ZoomableImage img={goodMeetingCollage} alt="Collage of 3 pages of the GoodMeeting wireframes"/>
                </div>
            </section>

            <hr className="section-divider"/>
        </div>
    )
}

export default ProductDesign
