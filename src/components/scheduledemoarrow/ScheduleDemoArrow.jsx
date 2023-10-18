import React from 'react'
import {LiaLongArrowAltRightSolid} from "react-icons/lia"
import { useNavigate } from 'react-router-dom'

function ScheduleDemoArrow() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate("/contact-us")} style={{cursor: "pointer"}} >
        <p style={{color:"black", fontSize: "17px", marginTop: "12px",fontWeight: "bolder" }}>
          Schedule a demo to know more
          <span>
            <LiaLongArrowAltRightSolid
              style={{ fontSize: "23px", marginLeft: "5px" }}
            />
          </span>
        </p>
      </div>
  )
}

export default ScheduleDemoArrow;