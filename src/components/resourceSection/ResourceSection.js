import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "./resource.css"

import {SiMoleculer} from "react-icons/si"
import {TbTargetArrow} from "react-icons/tb"
import {BsArrowRight} from "react-icons/bs"

function ResourceSection() {
  return (
    <div style={{background:"#f6f6f6"}}>
    <Container fluid >
     <Row>
          <Col sm={12} className="text-center mt-5 mb-4" ><span>MODERN DESIGN</span></Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center mt-1 mb-5" >
            <h1>We develop & create digital future.</h1>
          </Col>
        </Row>
        <Row className="mt-4" >
          <Col md={4} >
            <div style={{display:"flex",flexDirection:"row",padding:"12px"}}>
                <SiMoleculer fontSize={45} style={{ color: '#0676b3' }} />
                <h4 style={{color:"#222739",marginLeft:"17px",}}>Endless Possibilities</h4>
            </div>
            <div style={{display:"flex",flexDirection:"row",padding:"12px"}}>
                <TbTargetArrow fontSize={45} style={{ color: '#0676b3' }} />
                <h4 style={{color:"#222739",marginLeft:"17px",}}>Multiple Options</h4>
            </div>
            <div style={{display:"flex",flexDirection:"row",padding:"12px"}}>
                <SiMoleculer fontSize={45} style={{ color: '#0676b3' }} />
                <h4 style={{color:"#222739",marginLeft:"17px",}}>Endless Possibilities</h4>
            </div>
            <div className="more-info" style={{display:"flex",flexDirection:"row",padding:"12px"}}>
  <h4 style={{color:"#222739",marginLeft:"17px",fontSize:"20px",cursor:"pointer"}} className="fs-12 fs-sm-12" >More Info <BsArrowRight /></h4>
</div>

          </Col>
          <Col md={8}>
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