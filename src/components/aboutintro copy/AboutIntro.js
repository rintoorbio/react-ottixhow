import React from 'react'
import styles from "./aboutintro.module.css";

import { Button, Col } from 'react-bootstrap';


function AboutIntro() {
  return (
    <>
    <Col md={6} >
        <div>
        <img 
        style={{height:"auto",width:"100%"}}
        src="assets/whatwedo.WebP"
        alt="img"
        />
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"18px"}} >
        <Button style={{ background:"#faa71c",width:"140px",padding:"14px",borderRadius:"33px",border:"none" }} >Contact Us</Button>
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
                <li><p className={`${styles.navitemlink}`} ><a href="https://www.orbiosolutions.com/our-services/digital-transformation-automation/">Enterprises Application Services</a></p></li>
                <li><p className={`${styles.navitemlink}`} ><a href="https://www.orbiosolutions.com/our-services/digital-transformation-automation/">Technology Consulting</a></p></li>
                <li><p className={`${styles.navitemlink}`} ><a href="https://www.orbiosolutions.com/our-services/data-intelligence/">Data Intelligence</a></p></li>
                <li><p className={`${styles.navitemlink}`} ><a href="https://www.orbiosolutions.com/our-services/data-intelligence/">Quality Engineering</a></p></li>
              </ul>
            </div>
      </Col>
    </>
  )
}

export default AboutIntro;