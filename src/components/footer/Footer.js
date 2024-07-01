import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./footer.module.css"
import { NavLink, useNavigate } from 'react-router-dom'

import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoInstagram} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {BiLogoLinkedin} from "react-icons/bi"

function Footer() {

  const navigate = useNavigate()

  return (
    <div style={{backgroundColor:"#171a21",padding:"20px",color:"white",paddingRight:"0px" }}>
      <Container fluid >
      <Row  >
        <Col md={3} >
        <img 
           src="assets/OttixhowLogo.WebP"
           alt='img'
           style={{width:"65%",height:"auto",objectFit:"scale-down"}}
          />
        </Col>
        <Col md={3} >
          <div className={`${styles.getintouchcontainer}`}>
          <h6 style={{color:"white"}} >Get in Touch</h6>
          </div>
          <div className={`${styles.getintouchaddress}`} >
            <p style={{color:"#cccacf",}}>
            {/* #335, Ground Floor, 27th Main, Sector 2, HSR Layout, Bangalore – 560102 Karnataka */}
            1st Floor, SPD Plaza Koramangala Industrial Layout, opposite Jyothi Nivas College, 5th Block, Koramangala, Bengaluru, Karnataka 560034, India
            </p>
            <p><a style={{color:"#cccacf",textDecoration:"none"}} href="mailto:info@ottixhow.com">info@ottixhow.com</a></p>
          </div>
        </Col>
        <Col md={3} className={`${styles.linkSection}`} >
  {/* <div className={`${styles.linkcontainer}`}>
  </div> */}
  <div style={{display:"flex",flexDirection:"column",gap:"7px"}} >
    <h6 style={{ color: 'white' }}>Links</h6>
    <NavLink to="/" className={`${styles.navlink}`} >Home</NavLink>
    <NavLink to="/about-us" className={`${styles.navlink}`} >About Us</NavLink>
    <NavLink to="/resources" className={`${styles.navlink}`} >Resources</NavLink>
    <NavLink to="/competitor-analysis" className={`${styles.navlink}`} >Competitor Analysis</NavLink>
    <NavLink to="/sales-analysis" className={`${styles.navlink}`} >Sales Analysis</NavLink>
    <NavLink to="/contact-us" className={`${styles.navlink}`} >Contact Us</NavLink>
  </div>
        </Col>
        <Col md={2} >
          <div className={`${styles.getintouchiconcontainer}`} >
          <h6 style={{color:"white"}} >Get in Touch</h6>
          </div>
          <div style={{ display:"flex" }}>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/orbiosolutions">
  <div className={`${styles.iconContainer}`}>
    <BiLogoFacebook className={styles.socialiconfb}
          style={{ color: "white",fontSize:"20px" }} />
  </div>
  </a>
  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/orbiosolutions/">
  <div className={`${styles.iconContainer}`}>
    <BiLogoInstagram style={{ color: "white",fontSize:"20px" }} className={`${styles.socialiconinsta}`} />
  </div>
  </a>
  <a target="_blank" rel="noreferrer" href="https://in.linkedin.com/company/orbio-solutions-private-limited/">
  <div className={`${styles.iconContainer}`}>
    <BiLogoLinkedin style={{ color: "white",fontSize:"20px" }} className={`${styles.socialiconlinkedin}`} />
  </div>
  </a>
  <a target="_blank" rel="noreferrer" href="https://twitter.com/orbiosolutions">
  <div className={`${styles.iconContainer}`}>
    <BiLogoTwitter style={{ color: "white",fontSize:"20px" }} className={`${styles.socialicontwitter}`} />
  </div>
  </a>
</div>
<div className={`${styles.certificateicon}`} >
            <a rel="noreferrer" href="https://slashdot.org/software/p/OttixHow/?pk_campaign=badge&amp;pk_source=vendor" target="_blank">
            <img 
              src='assets/userslove.WebP'
              alt='img'
              style={{ 
                width:"80px",
                height:"80px",
                cursor:"pointer",
                objectFit:"scale-down"
              }}
            />
            </a>
            <a rel="noreferrer" href="https://sourceforge.net/software/product/OttixHow/?pk_campaign=badge&amp;pk_source=vendor" target="_blank">
            <img 
              src='assets/lightdefault.WebP'
              alt='img'
              style={{ 
                width:"80px",
                height:"80px",
                cursor:"pointer",
                objectFit:"scale-down"
              }}
            />
            </a>

          </div>

        </Col>
      </Row>
      <hr style={{ thickness: 1,  }} />
      <Row>
        <Col md={6} style={{display:"flex",justifyContent:"flex-start"}} >
          <div className={`${styles.footerCopyright}`} >
            <span>&copy; 2023 Orbio Solutions Pvt Ltd . All rights reserverd</span>
          </div>
        </Col>
        <Col md={6} >
          <div className={`${styles.footerPrivacypolicy}`} >
            <span onClick={()=>{
              navigate('/privacy-policy')
            }} >Privacy Policy</span>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer;