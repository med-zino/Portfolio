import React from 'react'
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap'
import data from '../data'

function Testemonies(props) {
  return (
    <div className='testemonies' id='testemonies'>
      <h1>Testemonies</h1>
      <hr data-aos='fade-right' data-aos-duration='1000' />
      <p className='description'>Click to view on Linkdin</p>
      <Container>
        {data.Testemonies.map((item) => {
          return (
            <Card data-aos='fade-up' data-aos-duration='2000'>
              <a
                href='https://www.linkedin.com/in/feddag-mohammed-zineddine-879861187/'
                target='_blank'
                rel='noreferrer'
              >
                <CardBody className='cardbdy'>
                  <img src={item.url} alt='user' />
                  <CardTitle tag='h5'>{item.name}</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    {item.situation}
                  </CardSubtitle>
                  <CardText>{item.word}</CardText>
                </CardBody>
              </a>
            </Card>
          )
        })}
      </Container>
    </div>
  )
}

export default Testemonies
