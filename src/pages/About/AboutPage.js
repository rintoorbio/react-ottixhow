import React from 'react'
import {TiTick} from "react-icons/ti";
import AboutImageSection from '../../components/aboutImage/AboutImageSection'
import AboutIntro from '../../components/aboutintro/AboutIntro';
import VisionSection from '../../components/visionSection/VisionSection';
import FooterImgSection from '../../components/footerimg/FooterImg';
import { Col, Container, Row } from 'react-bootstrap';


function AboutPage() {
  return (
    <div>

    <AboutImageSection />
    
    <div style={{color:"#383c47",fontSize:"14px",fontWeight:600,padding:"25px",marginLeft:"20px"}} >
    WHAT WE DO
    </div>
    <AboutIntro />
    <VisionSection />
    <Container>
      <Row>
        <Col md={6} >
          <div >
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
    <Container className='mt-4 mb-4'>
    <Row>
    <Col lg={6}>
        <img src="/assets/helpbusinesses.WebP"  alt='chart'
        style={{ width: '100%', height: 'auto' }} />
    </Col>
    <Col lg={6}>
    <table >
  <tbody>
    <tr>
      <td>
        <div style={{ marginTop: '10px' }}>
          <TiTick style={{ fontSize: '20px', color: '#0676b3' }} />
        </div>
      </td>
      <td>Synergize access to technology with strategic implementation of digital solutions</td>
    </tr>
    <tr>
      <td>
        <div style={{ marginTop: '10px' }}>
          <TiTick style={{ fontSize: '20px', color: '#0676b3' }} />
        </div>
      </td>
      <td>Professionally cultivate reliable solutions to business-centric challenges</td>
    </tr>
    <tr>
      <td>
        <div style={{ marginTop: '10px' }}>
          <TiTick style={{ fontSize: '20px', color: '#0676b3' }} />
        </div>
      </td>
      <td>Diversify the use of technology across verticals for enterprise growth</td>
    </tr>
    <tr>
      <td>
        <div style={{ marginTop: '10px' }}>
          <TiTick style={{ fontSize: '20px', color: '#0676b3' }} />
        </div>
      </td>
      <td>Study customers and employee experiences for intuitive product development</td>
    </tr>
    <tr>
      <td>
        <div style={{ marginTop: '10px' }}>
          <TiTick style={{ fontSize: '20px', color: '#0676b3' }} />
        </div>
      </td>
      <td>Bridge the gap left behind by legacy processes for business process efficiency</td>
    </tr>
    <tr>
      <td>
        <div style={{ marginTop: '10px' }}>
          <TiTick style={{ fontSize: '20px', color: '#0676b3' }} />
        </div>
      </td>
      <td>Leverage big data and analytics to maximize value of data-driven decisions</td>
    </tr>
    <tr>
      <td>
        <div style={{ marginTop: '10px' }}>
          <TiTick style={{ fontSize: '20px', color: '#0676b3' }} />
        </div>
      </td>
      <td>Plan and execute digital initiatives and web services to improve business visibility and market penetration</td>
    </tr>
  </tbody>
</table>
    </Col>
    </Row>
    </Container>
    <FooterImgSection />


    </div>
  )
}

export default AboutPage