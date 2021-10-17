import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'

function Contact(props) {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4glt5oj',
        'template_wjyfo77',
        e.target,
        'user_4gLVNCQf2wz2AaOTqLgdH'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div className='contact' id='contact'>
      <h1>Contact Me</h1>
      <hr data-aos='fade-right' data-aos-duration='1000' />
      <p className='description'>write me an email directly from this form</p>
      <Container>
        <form onSubmit={sendEmail}>
          <Row>
            <Col md='8'>
              <input type='text' placeholder='Name...' name='name' required />
            </Col>

            <Col md='8'>
              <input
                type='email'
                placeholder='Email Address...'
                name='email'
                required
              />
            </Col>

            <Col md='8'>
              <input
                type='text'
                placeholder='Subject...'
                name='subject'
                required
              />
            </Col>

            <Col md='8'>
              <textarea placeholder='Your message...' name='message' required />
            </Col>
          </Row>
          <button type='submit'>
            Send Message{' '}
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </button>
        </form>
      </Container>
    </div>
  )
}

export default Contact
