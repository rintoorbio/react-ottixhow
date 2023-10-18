import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function HelpBusiness() {
  return (
    <Container>
      <Row>
        <Col md={6} >
          <div style={{width:"200px"}}>
            <h2>How we help businesses?</h2>
          </div>
          <div>
            <p style={{color:"#7a7e83",fontSize:"17px" }} >Understanding your business is key to providing right solutions and that is where we are good at.</p>
          </div>
        </Col>
        <Col md={6} >
        </Col>
      </Row>
      </Container>
  )
}

export default HelpBusiness;