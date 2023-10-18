import React from 'react'
import styles from "./navright.module.css"

import {AiOutlineClose} from "react-icons/ai"
import { NavLink } from 'react-bootstrap';
import {BsArrowRight} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';


function NavRightItem({setShowCanvas}) {
  const navigate = useNavigate()

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "rotate(180deg)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "rotate(0deg)";
  };
  const handleClose = ()=>{
    setShowCanvas(false)
  }
 
  return (
    <div style={{ background:"#2c313d",display:"flex",flexDirection:"column",color:"white",height:"100vh",width:"100%" }} >
        <div>
            <h5 className={`${styles.closeSection}`} >Close <AiOutlineClose onClick={handleClose} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={{
            color:"white",
            borderRadius: "50%",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer",
            fontSize: "30px",
            marginLeft:"20px"
            }} /></h5>
        </div>
        <div style={{display:"flex",flexDirection:"column",marginLeft:"14%" }} >
         
          <div className='mt-5' >
            <h6 style={{ fontSize:"17px" }} >Have a Project?</h6>
            <a href="mailto:info@website.com" className={`${styles.underline_anim}`} >info@website.com</a>
          </div>

          <div onClick={()=>{
            navigate("/contact-us")
            setShowCanvas(false)
          }} className='mt-5' >
            <h6 style={{ fontSize:"17px" }} >Want to Work with Me?</h6>
            <NavLink style={{ fontSize:"20px" }} >Send Brief <BsArrowRight /> </NavLink>
          </div>
          {/* <div className='mt-5' >
            <h6 style={{ fontSize:"17px" }} >Want to Buy Illustrations?</h6>
            <NavLink style={{ fontSize:"20px" }} >Go to Shop <BsArrowRight /> </NavLink>
          </div> */}

        </div>
    </div>
  )
}

export default NavRightItem;