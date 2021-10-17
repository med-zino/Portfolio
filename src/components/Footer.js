import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faSchool,
  faHome,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col md='3'>
            <div className='ligne'>
              <FontAwesomeIcon icon={faHome} />
              <p>Mostaganem , Algeria</p>
            </div>
          </Col>
          <Col md='3'>
            <div className='ligne'>
              <FontAwesomeIcon icon={faSchool} />
              <p>Esi Sba</p>
            </div>
          </Col>
          <Col md='3'>
            <div className='ligne'>
              <FontAwesomeIcon icon={faPhone} />
              <p>+213 556076536</p>
            </div>
          </Col>
          <Col md='3'>
            <a href='#contact'>
              <FontAwesomeIcon icon={faEnvelope} className='social' />
            </a>

            <a
              href='https://www.facebook.com/zinou.med.35/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} className='social' />
            </a>
            <a
              href='https://www.linkedin.com/in/feddag-mohammed-zineddine-879861187/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} className='social' />
            </a>

            <a
              href='https://github.com/med-zino'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} className='social' />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
