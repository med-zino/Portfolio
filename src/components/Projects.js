import React from 'react'
import {
  Card,
  Col,
  Button,
  CardImg,
  CardTitle,
  CardText,
  Row,
  CardSubtitle,
  CardBody,
  Container,
} from 'reactstrap'
import data from '../data'

function Projects(props) {
  return (
    <Container className='projects' id='projects'>
      <h1>My projects</h1>
      <hr data-aos='fade-right' data-aos-duration='1000' />
      <p className='description'>
        This is a list of official projects that i have made , some of em as a
        front end devoloper and others were realised by firebase and react
      </p>
      <Row>
        {data.Projects.map((item) => {
          return (
            <Col md='4'>
              <Card data-aos='fade-up' data-aos-duration='2000'>
                <CardImg top width='100%' src={item.url} alt='Card image cap' />
                <CardBody className='cardbdy'>
                  <CardTitle tag='h5'>{item.name}</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    {item.category}
                  </CardSubtitle>
                  <CardText>{item.discription}</CardText>
                  {item.actions.map((action) => {
                    return (
                      <a href={action.link} target='_blank' rel='noreferrer'>
                        <Button>{action.tit}</Button>
                      </a>
                    )
                  })}
                  {item.actions2.map((action) => {
                    return (
                      <a href={action.link}>
                        <Button>{action.tit}</Button>
                      </a>
                    )
                  })}
                </CardBody>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Projects
