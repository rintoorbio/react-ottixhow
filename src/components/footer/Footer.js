import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./footer.module.css"
import { NavLink } from 'react-router-dom'

import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoInstagram} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {BiLogoLinkedin} from "react-icons/bi"

function Footer() {
  return (
    <div>
      <Container fluid >
      <Row style={{backgroundColor:"#171a21",padding:"20px",color:"white",paddingRight:"0px" }} >
        <Col md={3} >
        <img 
           src="assets/OttixhowLogo.jpg"
           alt='img'
           style={{width:"65%",height:"auto"}}
          />
        </Col>
        <Col md={3} >
          <div>
          <h6 style={{color:"white"}} >Get in Touch</h6>
          </div>
          <div>
            <p style={{color:"#cccacf",}}>
            #335, Ground Floor, 27th Main, Sector 2, HSR Layout, Bangalore – 560102 Karnataka
            </p>
            <p><a style={{color:"#cccacf",textDecoration:"none"}} href="mailto:info@ottixhow.com">info@ottixhow.com</a></p>
          </div>
          <div style={{display:"flex"}} >
            <a href="https://slashdot.org/software/p/OttixHow/?pk_campaign=badge&amp;pk_source=vendor" target="_blank">
            <img 
              src='assets/userslove.jpg'
              alt='img'
              style={{ 
                width:"80px",
                height:"80px",
                cursor:"pointer",
              }}
            />
            </a>
            <a href="https://sourceforge.net/software/product/OttixHow/?pk_campaign=badge&amp;pk_source=vendor" target="_blank">
            <img 
              src='assets/lightdefault.jpg'
              alt='img'
              style={{ 
                width:"80px",
                height:"80px",
                cursor:"pointer",
              }}
            />
            </a>

          </div>
        </Col>
        <Col md={3}>
  <div>
    <h6 style={{ color: 'white' }}>Links</h6>
  </div>
  <div style={{display:"flex",flexDirection:"column"}} >
    <NavLink to="/" className={`${styles.navlink}`} >Home</NavLink>
    <NavLink to="/about-us" className={`${styles.navlink}`} >About Us</NavLink>
    <NavLink to="/resources" className={`${styles.navlink}`} >Resources</NavLink>
    <NavLink to="/competitor-analysis" className={`${styles.navlink}`} >Competitor Analysis</NavLink>
    <NavLink to="/sales-analysis" className={`${styles.navlink}`} >Sales Analysis</NavLink>
    <NavLink to="/contact-us" className={`${styles.navlink}`} >Contact Us</NavLink>
  </div>
        </Col>
        <Col md={2} >
          <div>
          <h6 style={{color:"white"}} >Get in Touch</h6>
          </div>
          <div style={{ display:"flex" }}>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ottixhow">
  <div className={`${styles.iconContainer}`}>
    <BiLogoFacebook className={styles.socialiconfb}
          style={{ color: "white",fontSize:"20px" }} />
  </div>
  </a>
  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ottixhow/">
  <div className={`${styles.iconContainer}`}>
    <BiLogoInstagram style={{ color: "white",fontSize:"20px" }} className={`${styles.socialiconinsta}`} />
  </div>
  </a>
  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/ottixhow/">
  <div className={`${styles.iconContainer}`}>
    <BiLogoLinkedin style={{ color: "white",fontSize:"20px" }} className={`${styles.socialiconlinkedin}`} />
  </div>
  </a>
  <a target="_blank" rel="noreferrer" href="https://twitter.com/ottixhow">
  <div className={`${styles.iconContainer}`}>
    <BiLogoTwitter style={{ color: "white",fontSize:"20px" }} className={`${styles.socialicontwitter}`} />
  </div>
  </a>
</div>

        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer