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
          <h2 className="site__section-heading">Motion Design</h2>
          <p className="site__paragraph-text">
              I love implementing motion designs on the web and imagining ways in which a static design can be animated.
              Motion is fundamental to how people understand the physical environment around them. Our brains have a dedicated
              visual processing center (similar to a GPU!) that can process user interfaces seamlessly and free up our conscious mind
              to stay focused on the larger task (eg, completing a checkout process or learning about something new).
              However, if the motion doesn't "feel real", is unexpected, or is too extreme, our brain's GPU interrupts our conscious mind to
              figure out what's going on. I'm passionate getting motion design right and I get great satisfaction tweaking
              easing curves until the UI animation feels as natural possible. I'm looking for opportunities to
              work with people who are as excited about motion as I am.
          </p>
      </section>

          <section className="site__section">
              <h2 className="site__section-heading">Pixel Perfection</h2>
              <p className="site__paragraph-text">
                  I have a great design eye and I love figuring out what CSS and media queries (and sometimes JS) I need
                  to bring a designer's vision
                  to life. Spacing issues are a big deal to me (I use a page ruler browser plugin to check my work),
                  I know that the right gray depends on the colors in use around it,
                  and too much content on the screen at once is like nails
                  on a chalkboard. I want to work with people who are passionate about making stunning designs so I can build stunning
                  web experiences.
              </p>
          </section>

        <section className="site__section">
          <h2 className="site__section-heading">A User-Centered Universe</h2>
          <p className="site__paragraph-text">
            I'm happiest and most productive when I'm working on user-facing
            interfaces or trying to improve a design for the user. I want a workplace
            where everyone understands how easy it is to get out of sync with
            the user's needs, and is careful to think about everything in the
            user's frame of reference.
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
