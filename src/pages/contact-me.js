import React from 'react'
import AnimatedHeading from '../page-assets/global/components/animated-heading/loadable-animated-heading'
import PhotoCredit from '../page-assets/global/components/photo-credit'

//style
import '../page-assets/contact-me/styles/contact-me.sass'

//assets
import resumePDF from '../page-assets/contact-me/files/Eric-Johnson-Resume.pdf'
import EmailIcon from '../page-assets/contact-me/images/opened-email-envelope.inline.svg'
import PhoneIcon from '../page-assets/contact-me/images/cell-phone.inline.svg'
import linkedInIcon from '../page-assets/contact-me/images/In-Black-81px-R--colored.png'

import Layout from '../components/layout'

const ContactMePage = () => {

    const resumeStyle = {
      width: '100%',
      height: '100%',
      display: 'block',
    }

    return (
      <Layout>
        <section className="resume-banner">
          <div className="site__page-width">
            <AnimatedHeading
              headingText="Resume"
              headingClassName="resume-banner__heading"
            />
            <PhotoCredit
              name="Hello I'm Nik"
              image_url="http://unsplash.com/@helloimnik?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            />
          </div>
        </section>

        <section className="site__section">
          <h2 className="site__section-heading">Resume</h2>
          <p className="resume__paragraph-text">
            <object
              data={resumePDF}
              style={resumeStyle}
              type="application/pdf"
            ></object>
          </p>
        </section>
        <hr className="section-divider" />
        <section className="site__section">
          <h2 className="site__section-heading">Contact Info</h2>
          <p className="contact__paragraph-text">
            <a className="contact-link" href="mailto:eric.d.johnson@gmail.com">
              <EmailIcon
                className="email-icon"
                alt="envelope with @ sign"
                title="Icon made by https://www.flaticon.com/authors/ocha"
              />
              <span className="contact-link__text">
                eric.d.johnson@gmail.com
              </span>
            </a>
          </p>
          <p className="contact__paragraph-text">
            <a className="contact-link" href="tel:+13194009903">
              <PhoneIcon
                className="phone-icon"
                alt="cell phone"
                title="Icon made by https://www.flaticon.com/authors/freepik"
              />
              <span className="contact-link__text">(319) 400-9903</span>
            </a>
          </p>
          <p className="contact__paragraph-text">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/er1cj0hns0n/"
            >
              <img
                className="linked-in-logo"
                src={linkedInIcon}
                alt="LinkedIn logo"
              />
              <span className="contact-link__text">
                linkedin.com/in/er1cj0hns0n
              </span>
            </a>
          </p>
        </section>

        <hr className="section-divider" />
      </Layout>
    )
}

export default ContactMePage
