import React from 'react'
import Layout from '../../components/layout'
import AnimatedHeading from '../../page-assets/global/components/animated-heading/loadable-animated-heading'
import WorkTile from '../../page-assets/work-ive-done/components/work-tile'
import PhotoCredit from '../../page-assets/global/components/photo-credit'
//svg for the "Web Animation" tile
import NewtonsCradle from '../../page-assets/work-ive-done/images/newtons-cradle.inline.svg'

import '../../page-assets/work-ive-done/styles/work-ive-done.sass'

import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const WorkIveDonePage = () => {

  const bgImageData = useStaticQuery(graphql`
  query WorkIveDoneQuery {
    desktop: file(relativePath: { eq: "work-ive-done/images/michal-grosicki-221225.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mobile: file(relativePath: { eq: "work-ive-done/images/michal-grosicki-221225--mobile.jpg"  }) {
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

    return (
      <Layout>
        <BackgroundImage Tag="section" className="work-banner" fluid={imageSources}>
          <div className="work__page-width">
            <AnimatedHeading
              headingText="Work I've Done"
              headingClassName="work-banner__heading"
            />
            <PhotoCredit
              name="Michał Grosicki"
              image_url="http://unsplash.com/@groosheck?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            />
          </div>
        </BackgroundImage>

        <section className="work-tiles">
          <WorkTile
            link="web-animations"
            svg={<NewtonsCradle />}
            heading="Web Animation"
            description="I love bringing the web to life!"
          />
          <WorkTile
            link="ui-components"
            heading="UI Components"
            description="My fun, reusable interface elements"
          />
          <WorkTile
            link="ux-design"
            heading="UX Design"
            description="A couple of examples of UX improvement ideas"
          />
          <WorkTile
            link="product-design"
            heading="Product Design"
            description="Some of my bright ideas"
          />
          <WorkTile
            link="visual-design"
            heading="Visual Design"
            description="Stickers, t-shirts, and logos I've designed"
          />
          <WorkTile
            link="writing"
            heading="Writing"
            description="Good writing makes good code"
          />
        </section>
      </Layout>
    )
}

export default WorkIveDonePage
