import React from 'react'
import AnimatedHeading from '../page-assets/global/components/animated-heading/loadable-animated-heading'
import PhotoCredit from '../page-assets/global/components/photo-credit'
import moment from 'moment'

//styles
import '../page-assets/who-i-am/styles/who-i-am.sass'

//images
import ruralNerdImage from '../page-assets/who-i-am/images/rural-nerd.jpg'

import Layout from '../components/layout'

const WhoIAmPage = () => {

    var cornerstoneStartDate = moment('2013-02-19')
    var telecommute_years = moment().diff(cornerstoneStartDate, 'years')

    return (
      <Layout>
        <section className="who-banner">
          <div className="site__page-width">
            <AnimatedHeading
              headingText="Who I Am"
              headingClassName="who-banner__heading"
            />
            <PhotoCredit
              name="Kristopher Roller"
              image_url="http://unsplash.com/@krisroller?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            />
          </div>
        </section>
        <section className="site__section">
          <p className="site__paragraph-text">
            I’m a creative, good-humored guy who cares a lot about user-friendly
            experiences, civic responsibility, and the environment. I've been a
            web developer for {new Date().getFullYear() - 2006} years, and for
            the past {telecommute_years} years I've been telecommuting from an
            acreage outside Iowa City, where my wife and I grow pick-your-own
            blueberries. We are also the stewards of two rambunctious llamas,{' '}
            <a
              className="site__paragraph-link"
              href="https://twitter.com/llama_jake"
              target="_blank"
            >
              Jake
            </a>{' '}
            and{' '}
            <a
              className="site__paragraph-link"
              href="https://twitter.com/llama_elwood"
              target="_blank"
            >
              Elwood
            </a>
            , and we're renovating our 100-year old barn to host rural events
            (scary movies are better in an old barn!).
          </p>

          <h2 className="site__section-heading">Rural Nerd</h2>
          <p className="site__paragraph-text">
            I grew up on a 2,000-acre corn and soybean farm in southeast Iowa. I
            did farm stuff like driving tractors and baling hay, and I rode our
            farm's old blue ATV like I was competing in the X Games. But I alse
            loved computers. My family got our first computer in 1990. It had a
            20 mHz processor, and one of the greatest presents I got was a
            SoundBlaster sound card. I was totally a rural nerd.
          </p>
          <img
            className="who-i-am__image"
            src={ruralNerdImage}
            alt="Eric showcasing his middle school art"
          />

          <h2 className="site__section-heading">Open-minded</h2>
          <p className="site__paragraph-text">
            I've made several reversals in my life when I have encountered
            compelling evidence to change. I used to believe running would lead
            to some kind of crippling injury, and I even bought an elliptical
            machine to protect my joints. But then I read{' '}
            <span className="site__book-title">Born to Run</span> by Christopher
            McDougall, which details evidence that humans actually evolved to be
            great long-distance runners. (Did you know humans can beat a horse
            in a marathon?) Now I run several times a week cross-country for
            exercise, and I own a treadmill.
          </p>
          <p className="site__paragraph-text">
            I'm also OK with being wrong. I feel like it's better to stick my
            neck out and and suggest an idea than it is to keep quiet (even if
            the idea is flawed, it may lead to a better idea). I welcome
            feedback from colleagues and stakeholders and happily make changes
            to my work.
          </p>

          <h2 className="site__section-heading">A Connector</h2>
          <p className="site__paragraph-text">
            I have an underlying drive to connect people and reveal their common
            ground. Part of the reason I like co-leading our local chapter of
            Citizens' Climate Lobby is that CCL's approach involves having
            civil, respectful conversations with Democrats and Republicans about
            climate change. And I have a pet project of developing an app that
            helps people have difficult conversations with each other.
          </p>

          <h2 className="site__section-heading">Egalitarian</h2>
          <p className="site__paragraph-text">
            I’m empathetic and a good listener. In meetings and conversations, I
            work hard to hear everyone and help them have the space to complete
            their thoughts. In video chats, it's not always obvious when someone
            interrupts another person, but when I notice it, I wait for the
            current speaker to finish and then I ask the interrupted person what
            they were trying to say.
          </p>

          <h2 className="site__section-heading">Arty</h2>
          <p className="site__paragraph-text">
            I love visual design. Though I don’t have formal training, I have a
            passion and talent for creating designs, both for the web and
            otherwise (my hobby business is designing funny t-shirts and
            stickers). It's thrilling when I stumble across a new idea and the
            design clicks into place. I have the most fun coding when inventing
            a visual animation or recreating a complex visual design in code.
          </p>

          <h2 className="site__section-heading">Community Oriented</h2>
          <p className="site__paragraph-text">
            I’m an engaged citizen and civic-minded. A few examples:
          </p>

          <ul className="site__ol-or-ul-list">
            <li className="site__list-item">
              I’m the co-leader of the Iowa City chapter of{' '}
              <a
                className="site__paragraph-link"
                href="https://citizensclimatelobby.org/"
                target="_blank"
              >
                Citizens' Climate Lobby
              </a>
              , which is an international organization focused on passing
              bipartisan climate change legislation at the federal level. I lead
              and organize monthly meetings and help chapter members write
              letters and meet with Iowa’s Senators and Representatives.
            </li>
            <li className="site__list-item">
              In Spring 2017, I organized a{' '}
              <a
                className="site__paragraph-link"
                href="https://runforvictimsofclimatechange.org/"
                target="_blank"
              >
                run/walk fundraiser
              </a>{' '}
              for climate change victims. We had 71 registrants and raised over
              $2,300 for the American Red Cross's Disaster Relief Fund.
            </li>
            <li className="site__list-item">
              I served on the Wellness Committee and the Coolness Committee at
              my previous job at Integrated DNA Technologies. We created a
              "Thinnest Winner" contest for weight loss (my name!), and helped
              plan office overhauls to modernize our workplace.
            </li>
          </ul>

          <h2 className="site__section-heading">Miscellaneous</h2>
          <div className="site__paragraph-text">
            <ul className="site__ol-or-ul-list">
              <li className="site__list-item">
                I love baseball and once led a co-ed slow-pitch softball team
                called the Monster Ballads.
              </li>
              <li className="site__list-item">
                I say "pop" instead of "soda" but don't drink either anymore.
              </li>
              <li className="site__list-item">
                I have a{' '}
                <a
                  className="site__paragraph-link"
                  href="https://onewheel.com/"
                  target="_blank"
                >
                  Onewheel+
                </a>{' '}
                and I love it to death!
              </li>
              <li className="site__list-item">
                I unfortunately pronounce the "h" in "white" and "whale."
              </li>
            </ul>
          </div>
        </section>

        <hr className="section-divider" />
      </Layout>
    )
}

export default WhoIAmPage
