import React from 'react'
import PropTypes from 'prop-types'

const PhotoCredit = ({name, image_url}) => {

    var aStyle = {"color":"white","textDecoration":"none","padding":"4px 6px","fontSize":"12px","fontWeight":"bold","lineHeight":"1.2","display":"inline-block","borderRadius":"3px", "fontFamily": "-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue;, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif"}
    var spanStyle = {"display":"inline-block","padding":"2px 3px"}
    var svgStyle = {"height":"12px","width":"auto","position":"relative","verticalAlign":"middle","top":"-1px","fill":"white"}

    return (
        <div>
            <a className="site__photo-credit" style={aStyle} href={image_url} target="_blank" rel="noopener noreferrer" title="`Download free do whatever you want high-resolution photos from ${name}`">
            <span style={spanStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} viewBox="0 0 32 32">
                    <title></title>
                    <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
                </svg>
            </span>
                <span style={spanStyle}>{name}</span>
            </a>
        </div>
    )
};

PhotoCredit.propTypes = {
    name: PropTypes.string,
    image_url: PropTypes.string
};

export default PhotoCredit;