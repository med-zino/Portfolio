import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  Collapse,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import data from '../data'

function About(props) {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false])
  const toggle = (index) => {
    setIsOpen(isOpen.map((bool, idx) => (index === idx ? !bool : false)))
  }

  return (
    <div className='About' id='about'>
      <h1>About Myself</h1>
      <hr data-aos='fade-right' data-aos-duration='1000' />
      <p className='me'>{data.description}</p>
      <Container className='container'>
        <Row>
          <Col data-aos='fade-left'>
            <Card>
              <CardHeader>Studies</CardHeader>
              <CardBody>
                <ListGroup>
                  {data.Studies.map((item, index) => {
                    return (
                      <ListGroupItem
                        className='Item'
                        onClick={() => toggle(index)}
                      >
                        <div>
                          {item.name}
                          <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <Collapse isOpen={isOpen[index]}>
                          <p>{item.describe}</p>
                        </Collapse>
                      </ListGroupItem>
                    )
                  })}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col data-aos='fade-right'>
            <Card>
              <CardHeader>Work</CardHeader>
              <CardBody>
                <ListGroup>
                  {data.Work.map((item, index) => {
                    return (
                      <ListGroupItem
                        className='Item'
                        onClick={() => toggle(index + 2)}
                      >
                        <div>
                          {item.name}
                          <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <Collapse isOpen={isOpen[index + 2]}>
                          <p>{item.describe}</p>
                        </Collapse>
                      </ListGroupItem>
                    )
                  })}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <a href='CV.pdf' target='_blank'>
        <button>
          View CV <FontAwesomeIcon icon={faFileAlt} />
        </button>
      </a>
      <a href='#contact'>
        <button>Contact Me</button>
      </a>
    </div>
  )
}

export default About
