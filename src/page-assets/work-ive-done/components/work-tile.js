import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { TimelineMax } from 'gsap'
import $ from 'jquery'

class WorkTile extends React.Component {
  componentDidMount() {
    if (this.props.link === 'web-animations') {
      var newtonsCradleTl = new TimelineMax()
      var $leftBall = $('#newtons-cradle #left-ball')
      var $rightBall = $('#newtons-cradle #right-ball')

      newtonsCradleTl
        .fromTo(
          $leftBall,
          0.25,
          { rotation: '15deg', transformOrigin: 'top center' },
          { rotation: '0deg', ease: Power4.easeIn },
          0
        )
        .to(
          $rightBall,
          0.25,
          {
            rotation: '-15deg',
            transformOrigin: 'top center',
            ease: Power4.easeOut,
          },
          0.25
        )
        .to($rightBall, 0.25, { rotation: '0deg', ease: Power4.easeIn }, 0.5)
        .to($leftBall, 0.25, { rotation: '15deg', ease: Power4.easeOut }, 0.75)
        .repeat(-1)
    }
  }

  render() {
    var link = '/work-ive-done/' + this.props.link

    return (
      <Link to={link} className={`work-tile -${this.props.link}`}>
        <div className="work-tile__image">{this.props.svg}</div>
        <div className="work-tile__text">
          <h2 className="work-tile__heading">{this.props.heading}</h2>
          <p className="work-tile__description">{this.props.description}</p>
        </div>
      </Link>
    )
  }
}

WorkTile.propTypes = {
  link: PropTypes.string,
  img: PropTypes.element,
  header: PropTypes.string,
  description: PropTypes.string,
}

export default WorkTile
