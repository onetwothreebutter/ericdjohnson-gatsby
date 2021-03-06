import React from 'react'
import Link from 'gatsby-link'

//styles
import './styles/_regular-page.sass'

const Menu = () => (
  <div>
    <nav className="menu">
      <Link to="/work-ive-done/" className="menu-item">
        <span className="menu-item__heading">Work</span>
        <span className="menu-item__sub-text">i've done</span>
      </Link>
      <Link to="/skills-i-have/" className="menu-item">
        <span className="menu-item__heading">Skills</span>
        <span className="menu-item__sub-text">i have</span>
      </Link>
      <Link to="/who-i-am/" className="menu-item">
        <span className="menu-item__mobile-heading">Bio</span>
        <span className="menu-item__heading">Who</span>
        <span className="menu-item__sub-text">i am</span>
      </Link>
      <Link to="/what-im-looking-for/" className="menu-item">
        <span className="menu-item__mobile-heading">Goals</span>
        <span className="menu-item__heading">What</span>
        <span className="menu-item__sub-text">i'm looking for</span>
      </Link>
      <Link to="/contact-me/" className="menu-item">
        <span className="menu-item__heading">Resume</span>
        <span className="menu-item__sub-text">& contact info</span>
      </Link>
    </nav>
  </div>
)

export default Menu
