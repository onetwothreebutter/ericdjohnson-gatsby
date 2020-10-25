import React from 'react'
import Menu from '../menu/menu'

//styles
import headerStyles from './styles/header.sass'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header__page-width">
          <a className="logo" href="/">
            Eric Johnson
          </a>
          <Menu {...this.props}></Menu>
        </div>
      </header>
    )
  }
}

export default Header
