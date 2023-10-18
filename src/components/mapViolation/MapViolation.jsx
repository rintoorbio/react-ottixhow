import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ScheduleDemoArrow from '../scheduledemoarrow/ScheduleDemoArrow'

function MapViolation() {
  return (
    <div>
    <Container className="p-5">
          <Row>
            <Col md={6} >
            <div>
                <h1>MAP Violations</h1>
              </div>
              <div style={{color: "#717780" }}>
                <p>Ensure the integrity of your brand’s reputation by attaining a thorough understanding of individuals who violate Minimum Advertised Price (MAP) policies. Acquire valuable intelligence on resellers who deviate from the desired pricing range, empowering you to promptly and effectively resolve the matter.</p>
                <p>Through vigilant surveillance and proactive measures against MAP infringements, you can cultivate fair competition, sustain favorable profit margins, and preserve the inherent worth of your products within the market.</p>
              </div>
            </Col>
            <Col md={6} >
              <img 
              src="assets/pricecut.jpg"
              alt="img"
              style={{height:"auto",width:"100%"}}
              />
              <ScheduleDemoArrow />
              {/* <div onClick={()=>navigate("/contact-us")} style={{ color: "black",cursor:"pointer" }}>
            <span style={{marginTop:"79px",fontSize:"16px"}} >Schedule a demo to know more <span><LiaLongArrowAltRightSolid /></span> </span>
          </div> */}
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default MapViolation;