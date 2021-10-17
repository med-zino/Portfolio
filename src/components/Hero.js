import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SideBar from './Sidebar'

function Hero({ toggleTheme }) {
  const des =
    'A web developer who is exited to add more knowledge and experience in his career. learn by doing is my slogan , i am a hard worker and a perfectionist'

  return (
    <div className='hero' id='hero'>
      <NavBar toggleTheme={toggleTheme} />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Container className='hero-row'>
          <Row>
            <Col
              className='hero-picture'
              data-aos='fade-up'
              data-aos-duration='2000'
              md='5'
              sm='12'
            >
              <div className='hero-picture-circle2'>
                <div className='hero-picture-circle'>
                  <img src='profile.jpg' alt='rocket' />
                </div>
              </div>
            </Col>
            <Col
              className='hero-col'
              data-aos='fade-in'
              data-aos-duration='3000'
            >
              <h1 style={{ fontWeight: '600' }}>HI , I'M ZINO</h1>
              <p>{des}</p>
              <a href='#about'>
                <button>
                  View More
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {Array(50)
        .fill(0)
        .map(() => ({
          X: Math.floor(Math.random() * window.innerWidth),
          duration: Math.random() * 2,
          h: Math.random() * 100,
        }))
        .map((randmos) => (
          <i
            style={{
              left: randmos.X,
              height: randmos.h,
              animationDuration: randmos.duration + 's',
            }}
            className='star'
          >
            .
          </i>
        ))}
    </div>
  )
}

export default Hero
