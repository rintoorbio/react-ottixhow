import React from 'react'
import {LiaLongArrowAltRightSolid} from "react-icons/lia"

function ScheduleDemoArrow() {

    const handleNavigateContact = ()=>{
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/orbiosolutions' })
      return false
    }

  return (
    <div onClick={handleNavigateContact} style={{cursor: "pointer"}} >
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