import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function SideBar(props) {
  return (
    <div className='side'>
      <a href='https://github.com/med-zino' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href='https://www.facebook.com/zinou.med.35/'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href='https://www.linkedin.com/in/feddag-mohammed-zineddine-879861187/'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  )
}

export default SideBar
