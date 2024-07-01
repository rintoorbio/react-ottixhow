import React from 'react'
import styles from "./aboutintro.module.css";

import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function AboutIntro() {
  const navigate = useNavigate()
  return (
    <Container>
    <Row  style={{display:"flex",justifyContent:"center", alignItems:"center",}} >
    <Col md={6} >
        <div>
        <img 
        style={{height:"auto",width:"100%"}}
        src="assets/whatwedo.WebP"
        alt="img"
        />
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"18px"}} >
        <button onClick={()=>navigate("/contact-us")} className={`${styles.abtbtn}`} >Contact Us</button>
        </div>
      </Col>
      <Col md={6} className='mt-5' >
             <p style={{color:"#7a7e83",maxWidth:"100%",textAlign:"justify",wordWrap: "breakWord" }} >
              OttixHow is a robust, integrated retail analytics SaaS platform
              owned by Orbio that analyses your products and helps to predict
              customer demands. Orbio Solutions is one of the leading technology
              solution providers from India with Clients around the Globe. It’s
              scalable and innovative technology solutions, combined with
              insights from the robust data analytics allow businesses to gain a
              competitive edge and deliver exciting user experiences that help
              them fuel their growth. Orbio handhold their customers in a
              variety of business processes and requirements exclusively tailor
              made for them. Orbio solutions deals with Machine Learning &
              Artificial Intelligence that includes Technological
              Implementations such as Enterprises Application Services,
              Technology Consulting, Data Intelligence, Quality Engineering etc.
              Enterprises Application Services Technology Consulting Data
              Intelligence Quality Engineering
            </p>
            <div className='mt-4' >
              <ul style={{ lineHeight:"18px" }} >
                <li><p className={`${styles.navitemlink}`} ><a target='_blank' rel="noopener noreferrer" href="https://www.orbiosolutions.com/business-it-solutions">Enterprises Application Services</a></p></li>
                <li><p className={`${styles.navitemlink}`} ><a target='_blank' rel="noopener noreferrer" href="https://www.orbiosolutions.com/technology-consulting">Technology Consulting</a></p></li>
                <li><p className={`${styles.navitemlink}`} ><a target='_blank' rel="noopener noreferrer" href="https://www.orbiosolutions.com/data-analytics">Data Intelligence</a></p></li>
                <li><p className={`${styles.navitemlink}`} ><a target='_blank' rel="noopener noreferrer" href="https://www.orbiosolutions.com/quality-engineering">Quality Engineering</a></p></li>
              </ul>
            </div>
      </Col>
    </Row>
    </Container>
  )
}

export default AboutIntro;