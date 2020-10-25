import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

class VideoElement extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $(document).ready(function() {
      var $html5Video = $('.site__video-embed')
      var $videoContainer = $('.work-example__video-container')

      $html5Video.on('click', function(e) {
        $html5Video[0].play()
      })

      //if the video starts playing by itself then autoplay is supported
      $html5Video.on('playing', autoPlayIsSupported)

      function autoPlayIsSupported() {
        $html5Video.unbind('playing')
        $videoContainer.removeClass('-autoplay-not-supported')
        $html5Video.unbind('click')
      }
    })
  }

  render() {
    return (
      <div className="work-example__video-container -autoplay-not-supported">
        <span className="site__video-instructions">click to play</span>
        <video className="site__video-embed" autoPlay loop width="600">
          <source src={this.props.webm} type="video/webm" />
          <source src={this.props.mp4} type="video/mp4" />
        </video>
      </div>
    )
  }
}

VideoElement.propTypes = {
  mp4: PropTypes.string,
  webm: PropTypes.string,
}

export default VideoElement
