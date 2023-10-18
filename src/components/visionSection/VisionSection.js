import React from 'react';
import styles from "./vision.module.css";
import { Col, Container, Row } from 'react-bootstrap';

import {FaRegEye} from "react-icons/fa"
import {TbTargetArrow} from "react-icons/tb"

function VisionSection() {
  return (
    <Container className='mt-4'>
    <Row>
    <Col md={6} >
        
        <div className={`${styles.newcard}`} >
      <Row>
        <Col md={2}  >
        <FaRegEye style={{ fontSize: '50px', color: '#0676b3',marginLeft:"-7px" }} />
        </Col>
        <Col md={10} >
          <h6>Oru Vision</h6>
          <p style={{color:"#7a7e83"}} >To enable continuous development with access to the best technology services and solutions.</p>
        </Col>
      </Row>  
        </div>
      
    </Col>  

    <Col md={6} >
      
    <div className={`${styles.newcard}`} >
      <Row>
        <Col md={2}  >
        <TbTargetArrow style={{ fontSize: '50px', color: '#0676b3',marginLeft:"-7px" }} />
        </Col>
        <Col md={10} >
          <h6>Oru Mission</h6>
          <p style={{color:"#7a7e83"}} >Strategize and implement futureproof digital initiatives that evolve with your business goals.</p>
        </Col>
      </Row>  
        </div>

    </Col>
    </Row>
    </Container>
  )
}

export default VisionSection;