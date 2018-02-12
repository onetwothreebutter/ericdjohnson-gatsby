import React from 'react'
import Menu from '../page-assets/global/components/menu/menu'
import HomePage from '../page-assets/homepage/js/homepage'

//styles
import homepageStyles from '../page-assets/homepage/styles/homepage.sass'
import homePageMenuStyle from '../page-assets/global/components/menu/styles/_home-page.sass'

//images
import cleanFoot from '../page-assets/homepage/images/clean-foot.png'


class IndexPage extends React.Component {

    constructor(props) {
        super(props)
        //HomePage().init()
    }

    render() {
        return (
            <div>
                {/*<div className="homepage-background eric-and-elwood">*/}
                    {/*<div className="just-eric"></div>*/}
                    {/*<div className="just-eric"></div>*/}
                    {/*<div className="just-eric"></div>*/}
                    {/*<div className="just-eric"></div>*/}
                    {/*<div className="just-eric"></div>*/}
                {/*</div>*/}
                {/*<div className="homepage-background-helper"></div>*/}
                {/*<div className="easter-egg">*/}
                {/*</div>*/}
                {/*<div className="easter-egg__video-container">*/}
                    {/*<div id="easter-egg__video" className="easter-egg__video"></div>*/}
                    {/*<div className="easter-egg__close">&#10005;</div>*/}
                {/*</div>*/}
                {/*<img className="easter-egg__appendage" src={cleanFoot}/>*/}
                {/*<div className="homepage-container">*/}
                    {/*<div className="homepage-scaling-container">*/}
                        {/*<section className="homepage-banner">*/}
                            {/*<h1 className="homepage-banner__heading">Eric Johnson</h1>*/}
                            {/*<div className="homepage-banner__subheading">Web Developer, UX Guy, <br/> Llama Enthusiast</div>*/}
                        {/*</section>*/}

                        {/*<Menu {...this.props}></Menu>*/}

                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="photo-focus">*/}
                    {/*<button className="photo-focus__button -focus -active">focus photo</button>*/}
                    {/*<button className="photo-focus__button -blur">blur photo</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default IndexPage
