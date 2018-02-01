import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class WorkTile extends React.Component{

    render() {

        var link = "/work-ive-done/" + this.props.link;

        return (
            <Link to={link} className={`work-tile -${this.props.link}`}>
                <div className="work-tile__image">
                    { this.props.svg }
                </div>
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
};


export default WorkTile