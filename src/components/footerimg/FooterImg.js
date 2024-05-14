import React from 'react'
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import styles from "./footerImg.module.css"

function FooterImgSection() {
  
  const navigate = useNavigate()

  return (
    <div>
        <Col style={{ paddingLeft: '0px', paddingRight: '0px', position: 'relative' }} sm={12}>
  <img
    src='assets/pricegraph.jpg'
    style={{ width: '100%', height: '433px',objectFit:"cover" }}
    alt='img'
  />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%',color:"#f9f9f9" }}>
    <h2 style={{ color: 'white' }}>Enable Business Transformation with AI Driven Retail Insights</h2>
    <button 
    onClick={()=>{
      navigate("/contact-us")
    }}
    className={`${styles.contactBtn}`} >Contact Us</button>
  </div>
        </Col>
    </div>
  )
}

export default FooterImgSection;