import React from 'react'
import Layout from '../../components/layout'
import ZoomableImage from '../../page-assets/global/components/zoomable-image'

//styles
import '../../page-assets/work-ive-done/subpages/ux-design/styles/ux-design.sass'

//page assets
import compInitial from '../../page-assets/work-ive-done/subpages/ux-design/images/comp--initial.png'
import compFinal from '../../page-assets/work-ive-done/subpages/ux-design/images/comp--final.png'
import resourceCenterCurrent from '../../page-assets/work-ive-done/subpages/ux-design/images/csod-resource-center--current.png'
import resourceCenterConcept from '../../page-assets/work-ive-done/subpages/ux-design/images/csod-resource-center--concept.png'

const UXDesignPage = () => (
  <Layout>
    <section className="ux-design-banner">
      <h1 className="ux-design-banner__heading">UX Design</h1>
    </section>

    <section className="site__section">
      <p className="site__paragraph-text">
        Although I'm not a full-time user experience designer, I care strongly
        about UX. When I come across UX issues in the projects I work on, I do
        my best to correct them. Below are a few examples.
      </p>
    </section>

    <hr className="section-divider" />

    <section className="site__section">
      <div className="site__page-width">
        <h2 className="site__section-heading">
          The Case of the Wrong Audience
        </h2>
        <p className="site__paragraph-text">
          I received a comp from the design team for a page listing online
          training classes for new clients. It looked this:
        </p>

        <ZoomableImage img={compInitial} alt="Initial design of page" />

        <p className="site__paragraph-text">
          Instead of diving right into coding, I took a step back and thought
          about the intended audience, human resources administrators trying to
          learn our software. These HR admins care more about what they're
          learning than about the time the course is being taught.
        </p>
        <p className="site__paragraph-text">
          I suggested the below information architecture, which de-empahsized
          the date and time of the course offerings, making the course content
          much easier to visually scan.
        </p>

        <ZoomableImage img={compFinal} alt="Design of page after my feedback" />

        <p className="site__paragraph-text">
          I also recommended other UX improvements, such as moving the
          instructions for attending the webinar from the bottom of the page to
          a popup triggered by hovering over the "Attend Live Webex" button.
        </p>
      </div>
    </section>

    <hr className="section-divider" />

    <section className="site__section">
      <div className="site__page-width">
        <h2 className="site__section-heading">
          The Case of Unscannable Content
        </h2>
        <p className="site__paragraph-text">
          The below web page lists all its information resources in a randomized
          tile format. These include several different types of resources
          (webinars, infographics, briefs, etc.).
        </p>

        <ZoomableImage
          img={resourceCenterCurrent}
          alt="Resource Center without organization"
        />

        <p className="site__paragraph-text">
          I felt that the information cards on the page were hard to scan. The
          only way for the user to make sense of the cards was to locate the
          card type filter dropdown at the top of the page (not shown).
        </p>

        <p className="site__paragraph-text">
          I proposed the below restructuring concept to increase scannability of
          the page and decrease the number of steps a user would have to take to
          make sense of the content:
        </p>

        <ZoomableImage
          img={resourceCenterConcept}
          alt="Resource Center after organization"
        />

        <p className="site__paragraph-text">
          This format also makes it easier for the user to re-browse to the same
          piece of content, and to easily tell if new content of a particular
          type has been added.
        </p>
      </div>
    </section>

    <hr className="section-divider" />
  </Layout>
)

export default UXDesignPage
