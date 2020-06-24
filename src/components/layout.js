import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../page-assets/global/components/header/header'
import Footer from '../page-assets/global/components/footer/footer'
import Menu from '../page-assets/global/components/menu/menu'

class Layout extends React.Component {
  componentDidMount() {
    if (!document.getElementById('webfontloader')) {
      const wf = document.createElement('script')
      const s = document.scripts[0]
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
      wf.async = true
      wf.id = 'webfontloader'
      wf.onload = () => {
        WebFont.load({
          custom: {
            families: ['BrandonPrinted'],
          },
        })
      }

      s.parentNode.insertBefore(wf, s)
    }
  }

  render() {
    var header = <Header {...this.props} />
    var pageClass = 'regular-page'
    if (this.props.pageType === 'homepage') {
      header = ''
      pageClass = 'homepage'
    }

    return (
      <div>
        <Helmet
          title="Eric Johnson, Web Developer and Vanquisher of Boring Websites"
          meta={[
            {
              name: 'description',
              content:
                "Eric Johnson's portfolio of web animations, code, and other skills.",
            },
            { name: 'keywords', content: 'frontend web developer, portfolio' },
          ]}
        ></Helmet>
        <div className={`page-wrapper ${pageClass}`}>
          {header}
          <div>{this.props.children}</div>
          <Footer />
          <div className="mobile-nav">
            <Menu />
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
