import React from 'react'

//styles
import visualDesignStyles from '../../page-assets/work-ive-done/subpages/visual-design/styles/visual-design.sass'

//page assets
import runWalkLogo from '../../page-assets/work-ive-done/subpages/visual-design/images/5K-logo-ciricle.png'
import iowaTplantLogo from '../../page-assets/work-ive-done/subpages/visual-design/images/IowaTransplant.png'
import iowaTplantInTheWild from '../../page-assets/work-ive-done/subpages/visual-design/images/IowaTransplant-on-car.jpg'
import majorLeagueReading from '../../page-assets/work-ive-done/subpages/visual-design/images/MajorLeagueReading--Sticker2.png'
import iowaBookFestival from '../../page-assets/work-ive-done/subpages/visual-design/images/IowaCityBookFestival.jpg'



const VisualDesignPage = () => (

    <div>
        <section className="visual-design-banner">
            <h1 className="visual-design-banner__heading">
                Visual Design
            </h1>
        </section>

        <section className="site__section">
            <p className="site__paragraph-text">Here, I showcase some of the logos, stickers, and t-shirts I've designed
                in my spare time.
            </p>
        </section>

        <hr className="section-divider"/>

        <section className="site__section">
            <h2 className="site__section-heading">Run/Walk 5k Logo</h2>
            <p className="site__paragraph-text">I designed this logo for a
                <a className="site__paragraph-link" href="https://runforvictimsofclimatechange.org" target="_blank"> charity run/walk</a>
                that I organized in April 2017.
                I tried to design the logo so that it was clear what the race participants were raising money for. I also tried to keep the
                level of detail down so it would work well on a t-shirt.</p>
            <p className="site__paragraph-text">
                <img className="work-example__image--5k-logo" src={runWalkLogo} alt="Run/Walk for Climate Change logo"/>
            </p>
        </section>

        <hr className="section-divider"/>

        <section className="site__section">
            <h2 className="site__section-heading">Iowa Transplant Bumper Sticker</h2>
            <p className="site__paragraph-text">
                Iowa has a famous "Iowa Native" sticker. My wife is from Illinois but considers herself an Iowan now, so I
                designed this
                sticker for her. I've put it up for sale online and at a few local shops, and it's been pretty popular in the area.
            </p>
            <p>
                <img className="site__image" src={iowaTplantLogo} alt="Iowa Transplant logo"/>
                <figure className="site__figure">
                    <img className="site__image" src={iowaTplantInTheWild} alt="Random mini-van with Iowa Transplant stickers on it"/>
                    <figcaption className="site__caption">A random mini-van I saw at a recreational area near Iowa City.</figcaption>
                </figure>
            </p>
        </section>

        <hr className="section-divider"/>

        <section className="site__section">
            <h2 className="site__section-heading">Major League Reading</h2>
            <p className="site__paragraph-text">
                I love baseball, and I also love reading. I wanted to create a sticker that would help celebrate reading as
                much as people celebrate sports.
                The design was noticed by <a className="site__paragraph-link" href="http://www.signals.com/" target="_blank">Signals catalog</a>,
                and I licensed the design to them for a year. It's also available online and in local shops.
            </p>
            <p>

                <img className="site__image" src={majorLeagueReading} alt="Major League Reading sticker" />

            </p>

        </section>

        <hr className="section-divider"/>

        <section className="site__section">
            <h2 className="site__section-heading">Iowa City Book Festival</h2>
            <p className="site__paragraph-text">
                Due to my involvement in the local t-shirt scene and my wife's involvement in the Iowa City literary community,
                I was asked to do the t-shirts for the 2011 Iowa City Book Festival t-shirts. Below is the design I created using the
                festival's logo.
            </p>
            <img className="site__image" src={iowaBookFestival} alt="Iowa Book Festival logo"/>

        </section>

        <hr className="section-divider"/>
    </div>
)

export default VisualDesignPage