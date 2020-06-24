import React, { useEffect } from 'react'
import Menu from '../page-assets/global/components/menu/menu'
import HomePage from '../page-assets/homepage/js/homepage'
import Layout from '../components/layout'

//styles
import '../page-assets/homepage/styles/homepage.sass'
import '../page-assets/global/components/menu/styles/_home-page.sass'

//images
import cleanFoot from '../page-assets/homepage/images/clean-foot.png'
import EasterEggSvg from '../page-assets/homepage/images/easter-egg.inline.svg'

const IndexPage = props => {
  useEffect(() => {
    HomePage().init()
  }, [])

  return (
    <Layout pageType="homepage">
      <div className="homepage-background eric-and-elwood">
        <div className="just-eric" />
        <div className="just-eric" />
        <div className="just-eric" />
        <div className="just-eric" />
        <div className="just-eric" />
      </div>
      <div className="easter-egg"></div>
      <div className="easter-egg__video-container">
        <div id="easter-egg__video" className="easter-egg__video"></div>
        <div className="easter-egg__close">&#10005;</div>
      </div>
      <img className="easter-egg__appendage" src={cleanFoot} />
      <div className="homepage-container">
        <div className="homepage-scaling-container">
          <section className="homepage-banner">
            <h1 className="homepage-banner__heading">Eric Johnson</h1>
            <div className="homepage-banner__subheading">
              Web{'\u00A0'}Developer & Vanquisher of Boring Websites
            </div>
          </section>

          <Menu {...props} />
        </div>
      </div>
      <div className="glitch-egg-controls">
        <div className="glitch-eric">
          <button
            className="glitch-eric__button -active"
            data-glitch-action="stop"
          >
            stop glitch
          </button>
          <button className="glitch-eric__button" data-glitch-action="start">
            start glitch
          </button>
        </div>
        <div className="easter-egg-container">
          <EasterEggSvg />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
