import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Menu from './menu'

import headerStyles from '../page-assets/global/styles/_header.sass';



class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header__page-width">
                    <a className="logo" href="/">Eric Johnson</a>
                    <Menu {...this.props}></Menu>
                </div>
            </header>
        )
    }
}

class TemplateWrapper extends React.Component {

    render (){

        var header = <Header {...this.props} />
        if(this.props.location.pathname == '/') {
            header = ''
        }

        return (
            <div>

                <Helmet
                    title="Eric Johnson, Web Developer/UX Guy/Creative Person"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>
                { header }
                <div>
                    {this.props.children()}
                </div>
            </div>
        )
    }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

