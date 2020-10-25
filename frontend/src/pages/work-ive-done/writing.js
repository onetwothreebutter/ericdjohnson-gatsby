import React from 'react'
import Layout from '../../components/layout'
import ZoomableImage from '../../page-assets/global/components/zoomable-image'

//styles
import '../../page-assets/work-ive-done/subpages/writing/styles/writing.sass'

//page assets
import runWalkPressRelease from '../../page-assets/work-ive-done/subpages/writing/images/run-for-climate-change-press-release.png'
import firstStepOpEd from '../../page-assets/work-ive-done/subpages/writing/images/first-step-toward-climate-change.jpg'
import iowaCityClimateMarchOpEd from '../../page-assets/work-ive-done/subpages/writing/images/Iowa-City-Climate-March.jpg'
import securityRiskOpEd from '../../page-assets/work-ive-done/subpages/writing/images/climate-change-security-risk.jpg'
import feeDividendOpEd from '../../page-assets/work-ive-done/subpages/writing/images/fee-dividend-curbs-climate-change.jpg'
import moreCoverageLTE from '../../page-assets/work-ive-done/subpages/writing/images/more-coverage.jpg'
import supervisorsThankYouLTE from '../../page-assets/work-ive-done/subpages/writing/images/supervisors-thank-you.png'
import schoolBoardLTE from '../../page-assets/work-ive-done/subpages/writing/images/school-board-like-climate-change.jpg'

const WritingPage = () => (
  <Layout>
    <section className="writing-banner">
      <h1 className="writing-banner__heading">Writing</h1>
    </section>
    <section className="site__section">
      <blockquote className="site__blockquote">
        “Even when you're writing code explicitly intended for the machine,
        you're still writing. For other people. Fallible, flawed, distracted
        human beings just like you. And that's the truly difficult part.”
        <cite className="site__cite">
          &ndash; Jeff Atwood, Co-founder, Stack Overflow
        </cite>
      </blockquote>

      <p className="site__paragraph-text">
        I value good writing, and I strive to write well, whether it's emails to
        friends and colleagues, or op-eds to newspapers and magazines. I believe
        my writing skills help me write better code that's easy to understand
        and modify. During code reviews I often suggest ways to make code more
        readable, and I enjoy refactoring my own code to make it simpler.
      </p>
      <p className="site__paragraph-text">
        Below are some writing samples that provide an example of my voice, my
        personality, and my critical thinking skills.
      </p>
    </section>

    <section className="site__section">
      <h2 className="site__section-heading">Press Release</h2>
      <p className="site__paragraph-text">
        <a
          className="news-item"
          href="https://runforvictimsofclimatechange.files.wordpress.com/2016/10/barbaraschlachter5kpressrelease.pdf"
        >
          <figure>
            <img
              className="news-item__thumbnail"
              src={runWalkPressRelease}
              alt="Screenshot of the Run/Walk for Climate Change Press Release"
            />
            <figcaption className="news-item__title">
              Barbara Schlachter Run/Walk for Victims of Climate Change
            </figcaption>
          </figure>
        </a>
      </p>
    </section>

    <hr className="section-divider" />

    <section className="site__section">
      <h2 className="site__section-heading">Op-Eds</h2>
      <p className="site__paragraph-text">
        As a member of my local newspaper's Writer’s Group, I regularly write
        700-word op-eds on climate change issues. The{' '}
        <span className="site__book-title">Press-Citizen</span> newspaper has a
        potential audience of 150,000 people.
      </p>
      <div className="site__paragraph-text">
        <a
          className="news-item -first-step"
          href="http://www.press-citizen.com/story/opinion/contributors/guest-editorials/2014/09/16/time-join-iowa-city-peoples-climate-march/15698613/
"
        >
          <figure>
            <img
              className="news-item__thumbnail"
              src={firstStepOpEd}
              alt="Photo of First Step Toward Climate Action op-ed"
            />
            <figcaption className="news-item__title">
              Take your first step toward climate action this Earth Day
            </figcaption>
          </figure>
        </a>

        <a
          className="news-item -climate-march"
          href="http://www.press-citizen.com/story/opinion/contributors/guest-editorials/2014/09/16/time-join-iowa-city-peoples-climate-march/15698613/
"
        >
          <figure>
            <img
              className="news-item__thumbnail"
              src={iowaCityClimateMarchOpEd}
              alt="Photo of Iowa City Climate March op-ed"
            />
            <figcaption className="news-item__title">
              Time to join the Iowa City people's climate march
            </figcaption>
          </figure>
        </a>

        <a
          className="news-item"
          href="http://www.press-citizen.com/story/opinion/contributors/guest-editorials/2016/04/20/climate-change-security-risk/83290412/"
        >
          <figure>
            <img
              className="news-item__thumbnail"
              src={securityRiskOpEd}
              alt="Photo of Climate Change is a Security Risk op-ed"
            />
            <figcaption className="news-item__title">
              Climate change is a security risk
            </figcaption>
          </figure>
        </a>

        <a
          className="news-item"
          href="http://www.press-citizen.com/story/opinion/contributors/guest-editorials/2016/10/19/fee-and-dividend-plan-would-curb-climate-change/92416366/"
        >
          <figure>
            <img
              className="news-item__thumbnail"
              src={feeDividendOpEd}
              alt="Photo of Fee and Dividend op-ed"
            />
            <figcaption className="news-item__title">
              Fee and dividend plan would curb climate change
            </figcaption>
          </figure>
        </a>
      </div>
    </section>

    <hr className="section-divider" />

    <section className="site__section">
      <h2 className="site__section-heading">Letters to the Editor</h2>
      <p className="letter-to-editor__paragraph-text">
        <ZoomableImage
          img={moreCoverageLTE}
          alt="Photo of More Coverage Needed letter to the editor"
          className="letter-item__thumbnail -more-coverage"
          parentClassName="letter-item__thumbnail-container"
        />
        <ZoomableImage
          img={supervisorsThankYouLTE}
          alt="Photo of Supervisors letter to the editor"
          className="letter-item__thumbnail -supervisors"
          parentClassName="letter-item__thumbnail-container"
        />
        <ZoomableImage
          img={schoolBoardLTE}
          alt="Photo of School Board letter to the editor"
          className="letter-item__thumbnail -school-board"
          parentClassName="letter-item__thumbnail-container"
        />
      </p>
    </section>

    <hr className="section-divider" />
  </Layout>
)

export default WritingPage
