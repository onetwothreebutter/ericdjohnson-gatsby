import React from 'react'

//styles
import footerStyles from './styles/footer.sass'

//images
import gitHubWhiteLogo from './images/GitHub_Logo_White.png'
import gitHubBlackLogo from './images/GitHub_Logo.png'



const Footer = () => (
    <footer>
        <div className="footer__page-width">
            <span className="footer__hand-made">hand &#9829; made</span>
            <a className="footer__github-link" href="https://github.com/onetwothreebutter/ericdjohnson-gatsby" target="_blank">
                <img className="footer__github-logo--white" src={gitHubWhiteLogo}/>
                <img className="footer__github-logo--black" src={gitHubBlackLogo}/>
            </a>
        </div>
    </footer>
)

export default Footer