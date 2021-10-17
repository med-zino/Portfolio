import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap'
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar({ toggleTheme, dark }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)

  const [nav, setNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 1) {
      setNav(true)
    } else {
      setNav(false)
    }
  }
  window.addEventListener('scroll', changeNav)

  return (
    <div className={nav ? 'nav active' : 'nav'}>
      <div className='rocket'>
        <img src='rocket pic.png' id='Rocket01' alt='rocket' />
      </div>
      <ul className='nav-ul'>
        <a href='#about'>
          <p>About</p>
        </a>
        <a href='#projects'>
          <p>Portfolio</p>
        </a>
        <a href='#contact'>
          <p>Contact me</p>
        </a>
        <a href='#testemonies'>
          <p>Testemonies</p>
        </a>
      </ul>
      <FontAwesomeIcon
        className='nav-moon nav-theme'
        icon={faMoon}
        onClick={toggleTheme}
      />
      <FontAwesomeIcon
        className='nav-sun nav-theme'
        icon={faSun}
        onClick={toggleTheme}
      />
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className='nav-bar'>
        <DropdownToggle caret>
          <FontAwesomeIcon icon={faBars} className='nav-bar' />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className='dropitem'>
            <a href='#about'>
              <p>About</p>
            </a>
          </DropdownItem>
          <DropdownItem className='dropitem'>
            <a href='#projects'>
              <p>Portfolio</p>
            </a>
          </DropdownItem>
          <DropdownItem onClick={toggleTheme} className='dropitem'>
            <FontAwesomeIcon
              className='nav-moon'
              icon={faMoon}
              onClick={toggleTheme}
            />
          </DropdownItem>
          <DropdownItem onClick={toggleTheme} className='dropitem'>
            <FontAwesomeIcon
              className='nav-sun'
              icon={faSun}
              onClick={toggleTheme}
            />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default NavBar
