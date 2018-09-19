import React from 'react'
import PropTypes from 'prop-types'
//include in try/catch because getting "window not defined error" when building with `gatsby build`
try {
    var Splitting = require('splitting');
} catch (e) {
    console.log(e);
}

//Animations are stored in _banner.sass and sass files for each inner page (eg, work-ive-done.sass)

class AnimatedHeading extends React.Component {

    componentDidMount() {
        Splitting()
        document.body.classList.remove('-animate-banner-heading')
        //trick to trigger the browser to recognize the class change (https://css-tricks.com/restart-css-animation/)
        void document.body.offsetWidth
        document.body.classList.add('-animate-banner-heading')
    }

    render() {
        return (
            <div>
                <h1 className={this.props.headingClassName} data-splitting="">{this.props.headingText}</h1>
            </div>
        )
    }

}

AnimatedHeading.propTypes = {
    headingText: PropTypes.string,
    headingClassName: PropTypes.string
};

AnimatedHeading.defaultProps = {
    headingText: 'Hello',
    headingClassName: 'site-banner__heading'
};

export default AnimatedHeading;