import React, { useEffect } from 'react'
import AnimatedHeading from '../page-assets/global/components/animated-heading/loadable-animated-heading'
import PhotoCredit from '../page-assets/global/components/photo-credit'

//import skillsIHaveInit from '../page-assets/skills-i-have/js/skills-i-have';
//include in try/catch because getting "window not defined error" when building with `gatsby build`
// try {
//   var skillsIHaveInit = require('../page-assets/skills-i-have/js/skills-i-have')
// } catch (e) {
//   console.log("Failed to import skillsIHaveInit", e);
// }

//styles
import '../page-assets/skills-i-have/styles/skills-i-have.sass'

//images
import waterEffectImage from '../page-assets/skills-i-have/images/jakob-owens-299038.jpg'
import elmCourseImage from '../page-assets/skills-i-have/images/elm-frontend-masters.jpg'
import svgAnimationImage from '../page-assets/skills-i-have/images/svg-animation-frontend-masters.jpg'
import jsGoodPartsImage from '../page-assets/skills-i-have/images/js-good-parts-frontend-masters.jpg'
import introReactImage from '../page-assets/skills-i-have/images/intro-to-react-frontend-masters.jpg'
import cutoutImage from '../page-assets/skills-i-have/images/cardboard-cutout.jpg'

import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const SkillsIHavePage = (props) => {


  const bgImageData = useStaticQuery(graphql`
  query SkillsIHaveQuery {
    desktop: file(relativePath: { eq: "skills-i-have/images/jakob-owens-299038.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mobile: file(relativePath: { eq: "skills-i-have/images/jakob-owens-299038--mobile.jpg"  }) {
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

  // console.log(props);
  // if (props.mocks) {
  //   skillsIHaveInit = props.mocks.skillsIHaveInit || skillsIHaveInit
  // }

  useEffect(() => {
    //skillsIHaveInit()
  }, [])

    return (
      <Layout>
        <BackgroundImage Tag='section' className="skills-banner" fluid={imageSources}>
          <div className="skills-banner__page-width">
            <AnimatedHeading
              headingText="Skills I Have"
              headingClassName="skills-banner__heading"
            />
            <PhotoCredit
              name="Jakob Owens"
              image_url="http://unsplash.com/@jakobowens1?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            />
          </div>
          <div className="skills-banner__background"></div>
          <img
            className="skills-banner__water-effect-target-image"
            src={waterEffectImage}
          />
        </BackgroundImage>
        <section className="site__section">
          <div className="site__page-width">
            <h2 className="site__section-heading">Web Skills</h2>
            <p className="site__paragraph-text">
              I have a BS in Computer Science from the University of Iowa and
              have been a professional web developer for{' '}
              {new Date().getFullYear() - 2006} years.
            </p>
            <p className="site__paragraph-text">
              I maintain and improve my coding skills by using a variety of
              tools and materials. I train on{' '}
              <a
                className="site__paragraph-link"
                href="https://www.codewars.com/users/ericdjohnson"
                target="_blank"
              >
                Codewars
              </a>
              and{' '}
              <a
                className="site__paragraph-link"
                href="https://codefights.com/profile/ericdjohnson_ia"
                target="_blank"
              >
                CodeFights
              </a>
              . I read books on programming like{' '}
              <span className="site__book-title">Clean Code</span> and{' '}
              <span className="site__book-title">The Pragmatic Programmer</span>
              .
            </p>
            <p className="site__paragraph-text">
              I also subscribe to{' '}
              <a
                className="site__paragraph-link"
                href="https://frontendmasters.com/"
                target="_blank"
              >
                Frontend Masters
              </a>{' '}
              so I can dive deeply into new technologies quickly. The courses
              range from 5 hours to 10 hours in length, but I usually spend
              double that coding the examples and creating flashcards of the
              material.
              <a
                className="web-course"
                href="https://frontendmasters.com/courses/elm/"
              >
                <img className="web-course__image" src={elmCourseImage} />
              </a>
              <a
                className="web-course"
                href="https://frontendmasters.com/courses/svg-animation/"
              >
                <img className="web-course__image" src={svgAnimationImage} />
              </a>
              <a
                className="web-course"
                href="https://frontendmasters.com/courses/good-parts-javascript-web/"
              >
                <img className="web-course__image" src={jsGoodPartsImage} />
              </a>
              <a
                className="web-course"
                href="https://frontendmasters.com/courses/react-intro/"
              >
                <img className="web-course__image" src={introReactImage} />
              </a>
            </p>
          </div>
        </section>

        <hr className="section-divider" />

        <section className="site__section">
          <h2 className="site__section-heading">Communication</h2>
          <p className="site__paragraph-text">
            Good communication is often taken for granted, but I know that it
            doesn't happen automatically. Here are some steps I take to improve
            communication:
          </p>
          <ul className="site__ol-or-ul-list">
            <li className="site__list-item">
              I try to reduce the number of emails required to reach a decision
              or convey information by summarizing long email chains, and by
              asking multiple choice questions instead of open-ended questions
              (when appropriate).
            </li>
            <li className="site__list-item">
              I'm aware of my audience and I adjust my language and jargon
              accordingly.
            </li>
            <li className="site__list-item">
              I convey my uncertainty when I'm not sure about something and ask
              for other's input when warranted.
            </li>
            <li className="site__list-item">
              I'm honest about weaknesses in my ideas (and other's ideas).
            </li>
            <li className="site__list-item">
              I use screenshots and screencasts to capture information and
              context when it would be harder to convey using solely words.
            </li>
          </ul>
        </section>

        <hr className="section-divider" />

        <section className="site__section">
          <h2 className="site__section-heading">Remote Work</h2>
          <p className="site__paragraph-text">
            After working in both corporate and home office environments, I've
            learned that working from home full-time takes a ton of
            self-discipline, as well as strong communication skills. My
            personality is a good match for this sort of work, and I've found
            that I can better attain a deep state of focus when I'm not in a
            bustling office.
          </p>
          <p className="site__paragraph-text">
            However, there are challenges to not being physically present in the
            office. Psychological and technical barriers to setting up
            face-to-face video chats result in fewer interactions with my
            coworkers, which makes me sad. I try to increase my connection to
            the office by advocating the use of video presence software (like
            PukkaTeam or Perch.co) and by using high-quality equipment for video
            chats. I even bought a life-size cardboard cutout of myself for my
            team to keep in the office, complete with a dry-erase word bubble so
            they could give me things to say! : )
            <img className="site__image--cutout" src={cutoutImage} />
          </p>
        </section>

        <hr className="section-divider" />

        <section className="site__section">
          <h2 className="site__section-heading">Deep Work</h2>
          <p className="site__paragraph-text">
            I’ve studied some ways of boosting my learning speed to help keep
            pace with the stream of new and shiny web technologies.
          </p>
          <p className="site__paragraph-text">
            I enrolled in a Coursera online class called "Learning to Learn" at
            UC San Diego. The class details the latest research on how we learn
            best and most efficiently. I was surprised to discover that our
            brains continue to work on problems even when we take a break and do
            other activities, like taking a walk. These breaks allow “diffuse
            thinking” to occur and actually help our brains learn and process
            information faster. I used to try to work straight through long
            stretches of my work day, but now I take short breaks every couple
            of hours or even do 15 minutes of mindfulness meditation to help
            engage diffuse thinking and stay sharp all day long.
          </p>

          <p className="site__paragraph-text">
            And according to{' '}
            <a
              className="site__book-title"
              href="http://a.co/1qULY7R"
              target="_blank"
            >
              Deep Work
            </a>{' '}
            by Cal Newport, the way we focus matters a lot, too. When we focus
            on a problem or learn new material, what we're really doing is
            repeatedly firing a set of related neurons. As we fire them more and
            more, the connections become stronger and we start to solve problems
            and solidify our learning. However, each time a distraction breaks
            our concentration, our neural connections weaken. Because of this, I
            put my phone facedown on my desk so I don't see the notifications
            flash by, and I periodically close my email client for a couple of
            hours in the morning when I really need to focus.
          </p>
        </section>

        <hr className="section-divider" />

        <section className="site__section">
          <h2 className="site__section-heading">Innovative Thinking</h2>
          <p className="site__paragraph-text">
            I often have unconventional ideas for new services, products, and
            work processes, and I love to share them. When my team sends out an
            email asking for ideas for a marketing campaign or event, I always
            reply. For example, the marketing team was working on a campaign for
            airports and one of the ideas I suggested was for airport bathrooms
            that would read "Don't flush away your talent".
          </p>
          <p className="site__paragraph-text">
            At a team retreat, my company hired{' '}
            <a
              className="site__paragraph-link"
              href="http://futurethink.com/"
              target="_blank"
            >
              FutureThink
            </a>{' '}
            to improve our innovative thinking. We learned how to give new ideas
            a fair shake instead of immediately shooting them down (i.e.,
            thinking “How might we pay for this new idea?” instead of “This new
            idea is too expensive”). We learned how to reverse our assumptions
            to avoid being constrained artificially (“What if a restaurant
            brought food to where people are instead of vice versa?”).
          </p>

          <p className="site__paragraph-text">
            When I have a frustrating experience with a device or a business, I
            like to troubleshoot the experience and figure out ways to make it
            better. Or—even more fun—envision new products or services that
            could solve the problem. To keep in our llamas, we use a
            semi-permanent fencing that needs re-adjusting every few months. My
            dream scenario would be a fluid fence made from self-charging
            drones. They could even have little water reservoirs to squirt the
            animals they're fencing if the animals challenge them.
          </p>
        </section>

        <hr className="section-divider" />

        <section className="site__section">
          <h2 className="site__section-heading">Entrepreneurship</h2>
          <p className="site__paragraph-text">
            Last year I participated in two{' '}
            <a
              className="site__paragraph-link"
              href="https://startupweekend.org/"
              target="_blank"
            >
              Startup Weekends
            </a>
            , which were challenging and exciting. During the second Startup
            Weekend, I pitched an idea to help elderly people record their
            family stories and memories. My team’s great collaboration on the
            idea led to our winning free tuition to the University of Iowa's
            six-week{' '}
            <a
              className="site__paragraph-link"
              href="https://iowajpec.org/entrepreneur-support/venture-school/"
              target="_blank"
            >
              Venture School
            </a>{' '}
            at the Pappajohn Entrepreneurial Center.
          </p>
          <p className="site__paragraph-text">
            In Venture School, my team and I conducted over 70 customer
            interviews to answer questions about our business model hypothesis.
            We also learned some of the pitfalls of startups, like focusing on
            launch dates instead of customer fit, or on an orderly set of steps
            instead of the messy process of discovery and learning. Each week we
            practiced five-minute pitches in front of the class (and sometimes
            investors) and worked closely with business community mentors and
            teachers to move as far through the startup process as we could in
            six weeks.
          </p>
          <p className="site__paragraph-text">
            I really enjoyed these experiences and would like to incorporate the
            customer validation and product development elements in my career.
            That's why I'm looking for a job where I get to be involved in the
            design of the user experience.
          </p>
        </section>

        <hr className="section-divider" />
      </Layout>
    );

}

export default SkillsIHavePage
