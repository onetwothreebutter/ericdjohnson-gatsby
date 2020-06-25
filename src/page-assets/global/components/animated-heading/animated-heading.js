import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

//include in try/catch because getting "window not defined error" when building with `gatsby build`
if (typeof window !== 'undefined') {
  const Splitting = require('splitting')
}

//Animations are stored in _banner.sass and sass files for each inner page (eg, work-ive-done.sass)

const AnimatedHeading = ({headingClassName, headingText}) => {

  useEffect(()=> {
    Splitting()
    document.body.classList.remove('-animate-banner-heading')
    //trick to trigger the browser to recognize the class change (https://css-tricks.com/restart-css-animation/)
    void document.body.offsetWidth
    document.body.classList.add('-animate-banner-heading')
  },[]);


  return (
    <div>
      <h1 className={headingClassName} data-splitting="">
        {headingText}
      </h1>
    </div>
  )

}

AnimatedHeading.propTypes = {
  headingText: PropTypes.string,
  headingClassName: PropTypes.string,
}

AnimatedHeading.defaultProps = {
  headingText: 'Hello',
  headingClassName: 'site-banner__heading',
}

export default AnimatedHeading
