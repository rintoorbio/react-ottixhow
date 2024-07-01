import React from 'react'
import styles from "./navleft.module.css"
import { Card, NavLink } from 'react-bootstrap'

import {BsArrowRight} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function NavLeftItem({setShowCanvas}) {

  const navigate = useNavigate()
  
  const handleClose = ()=>{
    setShowCanvas(false)
  }
const handleHome = ()=>{
  navigate("/")
  setShowCanvas(false)
}
const handleAboutUs = ()=>{
  navigate("/about-us")
  setShowCanvas(false)
}
const handleResources = ()=>{
  navigate("/resources")
  setShowCanvas(false)
}
const handleContactUs = ()=>{
  navigate("/contact-us")
  setShowCanvas(false)
}

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <h3
      className={`${styles.customH3}`}
      style={{ background:"none",border:"none",padding:"0px",cursor:"pointer" }}
      onClick={decoratedOnClick}
    >
      {children}
    </h3>
  );
}

  return (
    <div style={{ background:"#222733",display:"flex",flexDirection:"column",color:"white",height:"100vh",width:"100%" }} >
        <div style={{padding: "40px 27px 0 9px",}} >
            <img 
            style={{ maxWidth: '77%',height: 'auto'}}
            alt='logo'
            src='/assets/OttixhowLogo.WebP'
            />
            <AiOutlineClose 
            className='d-md-none'
            onClick={handleClose}
            style={{
            color:"white",
            borderRadius: "50%",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer",
            fontSize: "30px",
            marginLeft:"20px"
            }} />
        </div>
        <ul style={{marginTop:"60px"}} >
        <h3 className={styles.customH3} >
            <NavLink onClick={handleHome} >Home</NavLink>
        </h3>
        <h3 className={styles.customH3} >
        <NavLink onClick={handleAboutUs} >About Us</NavLink>
        </h3>
        <h3 className={styles.customH3} >
        <NavLink onClick={handleResources} >Resources</NavLink>
        </h3>
        <Accordion>
      <NavLink>
          <CustomToggle eventKey="1">Features <BsArrowRight style={{ marginLeft: '20px' }} /></CustomToggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <div style={{display:"flex",flexDirection:"column",padding:"14px"}}>
            <span onClick={()=>{
              navigate('/competitor-analysis')
              setShowCanvas(false)
            }} className={`${styles.customH3}`} style={{fontSize:"20px"}} >Competitor Analysis</span>
            <span onClick={()=>{
              navigate('/sales-analysis')
              setShowCanvas(false)
            }} className={`${styles.customH3}`} style={{fontSize:"20px"}} >Sales Analysis</span>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </NavLink>
    </Accordion>

        


        <h3 className={styles.customH3} >
        <NavLink onClick={handleContactUs} >Contact Us</NavLink>
        </h3>


        

        </ul>
    </div>
  )
}

export default NavLeftItem