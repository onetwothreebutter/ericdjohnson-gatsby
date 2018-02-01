import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Menu from '../page-assets/global/components/menu/menu'

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

    componentWillMount() {
        if (!document.getElementById('webfontloader')) {
            const wf = document.createElement('script');
            const s = document.scripts[0];
            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
            wf.async = true;
            wf.id = 'webfontloader';
            wf.onload = () => {
                WebFont.load({
                    custom: {
                        families: ['BrandonPrinted']
                    },
                });
            };

            s.parentNode.insertBefore(wf, s);
        }
    }

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
                        { name: 'description', content: 'Eric Johnson\'s portfolio of web animations, code, and other skills.'  },
                        { name: 'keywords', content: 'web developer, portfolio' },
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

