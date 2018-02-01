import React from 'react'
import PropTypes from 'prop-types'


class ZoomableImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {zoomClass: ''}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            zoomClass: !prevState.zoomClass ? '-zoomed' : ''
        }))
    }

    render() {
        return (
            <div className={this.props.parentClass}>
                <img onClick={this.handleClick} className={`site__image-zoom js-zoomable ${this.props.className} ${this.state.zoomClass}`} src={this.props.img} alt={this.props.alt}/>
            </div>

        )
    }

}

ZoomableImage.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    parentClass: PropTypes.optionalString
};

export default ZoomableImage