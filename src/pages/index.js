import React from 'react'
import Menu from '../layouts/menu'



import homepageStyles from '../page-assets/homepage/styles/homepage.sass'
import homePageMenuStyle from '../page-assets/global/styles/menu/_home-page.sass'

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div className="homepage-background eric-and-elwood">
                    <div className="just-eric"></div>
                    <div className="just-eric"></div>
                    <div className="just-eric"></div>
                    <div className="just-eric"></div>
                    <div className="just-eric"></div>
                </div>
                <div className="homepage-background-helper"></div>
                <div className="easter-egg">
                </div>
                <div className="easter-egg__video-container">
                    <div id="easter-egg__video" className="easter-egg__video"></div>
                    <div className="easter-egg__close">&#10005;</div>
                </div>
                <img className="easter-egg__appendage" src="/src/pages/homepage/images/clean-foot.png"/>
                <div className="homepage-container">
                    <div className="homepage-scaling-container">
                        <section className="homepage-banner">
                            <h1 className="homepage-banner__heading">Eric Johnson</h1>
                            <div className="homepage-banner__subheading">Web Developer, UX Guy, <br/> Llama Enthusiast</div>
                        </section>

                        <Menu {...this.props}></Menu>

                    </div>
                </div>
            </div>
        )
    }
}

export default IndexPage
