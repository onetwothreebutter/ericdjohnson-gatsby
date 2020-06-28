import React, { useEffect } from 'react'
import Menu from '../page-assets/global/components/menu/menu'
import HomePage from '../page-assets/homepage/js/homepage'
import Layout from '../components/layout'

import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

//styles
import '../page-assets/homepage/styles/homepage.sass'
import '../page-assets/global/components/menu/styles/_home-page.sass'

//images
import cleanFoot from '../page-assets/homepage/images/clean-foot.png'
import EasterEggSvg from '../page-assets/homepage/images/easter-egg.inline.svg'

const IndexPage = props => {

  const bgImageData = useStaticQuery(graphql`
  query HomepageQuery {
    desktop: file(relativePath: { eq: "homepage/images/eric-and-elwood-2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mobile: file(relativePath: { eq: "homepage/images/eric-and-elwood-2.jpg"  }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 400) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }`);

  const imageSources = [
    bgImageData.mobile.childImageSharp.fluid,
    {
      ...bgImageData.desktop.childImageSharp.fluid,
      media: `(min-width: 400px)`,
    }
  ];

  useEffect(() => {
    //HomePage().init()
  }, [])

  return (
    <Layout pageType="homepage">
      <BackgroundImage
        Tag="div"
        backgroundColor="gray"
        className="homepage-background eric-and-elwood"
        fluid={imageSources}
        style={{position: 'absolute'}}
        onLoad={HomePage().init()}
      >
        <div className="just-eric" />
        <div className="just-eric" />
        <div className="just-eric" />
        <div className="just-eric" />
        <div className="just-eric" />
      </BackgroundImage>
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
