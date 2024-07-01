import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./resource.css"

function ResourceSection() {
  return (
    <div style={{background:"#f6f6f6"}}>
    <Container  >
     <Row>
          <Col sm={12} className="text-center mt-5 mb-3" ><span>MODERN DESIGN</span></Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center mt-1 mb-1" >
            <h1>We develop & create digital future.</h1>
          </Col>
        </Row>
        <Row className="mt-4" >
          <Col md={12}>
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
  <iframe
      title="YouTube Video"
      src="https://www.youtube.com/embed/HWC_uVT_PBg?si=73T2Vts5tSphxZkf"
      allowFullScreen
      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '80%' }}
    ></iframe>
  </div>
</Col>

        </Row>
    </Container>
    </div>
  )
}

export default ResourceSection