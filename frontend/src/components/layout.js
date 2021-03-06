import React, {useEffect} from 'react'
import Helmet from 'react-helmet'
import Header from '../page-assets/global/components/header/header'
import Footer from '../page-assets/global/components/footer/footer'
import Menu from '../page-assets/global/components/menu/menu'

const Layout = ({pageType, children, ...props}) => {

  useEffect(()=>{
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
  }, []);

    var header = <Header {...props} />
    var pageClass = 'regular-page'
    if (pageType === 'homepage') {
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
          <div>{children}</div>
          <Footer />
          <div className="mobile-nav">
            <Menu />
          </div>
        </div>
      </div>
    )

}

export default Layout
