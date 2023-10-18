import React from 'react'
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function FooterImgSection() {
  
  const navigate = useNavigate()

  return (
    <div>
        <Col style={{ paddingLeft: '0px', paddingRight: '0px', position: 'relative' }} sm={12}>
  <img
    src='assets/pricegraph.jpg'
    style={{ width: '100%', height: 'auto' }}
    alt='img'
  />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%',color:"#f9f9f9" }}>
    <h2 style={{ color: 'white' }}>Enable Business Transformation with AI Driven Retail Insights</h2>
    <Button 
    onClick={()=>{
      navigate("/contact-us")
    }}
    style={{ borderRadius:"30px",backgroundColor:"#faa71c",border:"none",width:"130px",padding:"12px" }} >Contact Us</Button>
  </div>
        </Col>
    </div>
  )
}

export default FooterImgSection;