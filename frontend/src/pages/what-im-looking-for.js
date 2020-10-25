import React from 'react'
import AnimatedHeading from '../page-assets/global/components/animated-heading/loadable-animated-heading'
import PhotoCredit from '../page-assets/global/components/photo-credit'

//styles
import '../page-assets/what-im-looking-for/styles/what-im-looking-for.sass'

//images
//...
import Layout from '../components/layout'

import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const WhatImLookingForPage = () => {

  const bgImageData = useStaticQuery(graphql`
  query LookingForQuery {
    desktop: file(relativePath: { eq: "what-im-looking-for/images/ray-hennessy-233399.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mobile: file(relativePath: { eq: "what-im-looking-for/images/ray-hennessy-233399--mobile.jpg"  }) {
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

  const bgCssOveride = { backgroundPosition: 'top'};

    return (
      <Layout>
        <BackgroundImage Tag="section" className="what-banner" fluid={imageSources} style={bgCssOveride}>
          <div className="site__page-width">
            <AnimatedHeading
              headingText="What I'm Looking For"
              headingClassName="what-banner__heading"
            />
            <PhotoCredit
              name="Ray Hennessy"
              image_url="http://unsplash.com/@rayhennessy?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            />
          </div>
        </BackgroundImage>

        <section className="site__section">
          <h2 className="site__section-heading">A User-Centered Universe</h2>
          <p className="site__paragraph-text">
            I'm happiest and most productive when I'm working on user-facing
            interfaces or trying to improve a design for the user. I get
            dispirited when I see content or functionality on our websites that
            I know is not as user-friendly as it could be. I want a workplace
            where everyone understands how easy it is to get out of sync with
            the user's needs, and is careful to think about everything in the
            user's frame of reference.
          </p>
        </section>

        <hr className="section-divider" />

        <section className="site__section">
          <h2 className="site__section-heading">
            The Sweet Embrace of Open Minds
          </h2>
          <p className="site__paragraph-text">
            Brainstorming ideas makes me happy. But sharing ideas is often
            difficult; everyone is busy, or interpersonal and hierarchical
            dynamics inhibit idea sharing. Basic human traits like aversion to
            the new and different result in a "shoot-down" response. I want a
            workplace where everyone is brainstorming like mad and invigorated
            by new ideas.
          </p>
        </section>

        <hr className="section-divider" />

        <section className="site__section">
          <h2 className="site__section-heading">Crossfit for Brains</h2>
          <p className="site__paragraph-text">
            It feels great when I train regularly and keep improving my skills.
            Working with people who are better or different than I am is a great
            way to keep learning. And a lot of learning happens through teaching
            too, so I'd like to mentor newer developers as well. I want a
            workplace that recognizes all these things and fosters them.
          </p>
        </section>

        <hr className="section-divider" />

        <section className="site__section">
          <h2 className="site__section-heading">What's Right</h2>
          <p className="site__paragraph-text">
            I care a lot about helping move society forward. I spend a decent
            chunk of my personal life volunteering for civic and environmental
            matters, like climate change and local zoning. I'd like to work on
            something that feels important to me like those issues do.
          </p>
        </section>

        <hr className="section-divider" />
      </Layout>
    )
}

export default WhatImLookingForPage
