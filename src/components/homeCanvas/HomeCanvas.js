import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./canvas.module.css";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

function HomeCanvas({ show, handleClose }) {

  const handleNavigateContact = ()=>{
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/orbiosolutions' });
  }

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "rotate(180deg)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "rotate(0deg)";
  };

  return (
    <>
      <Offcanvas
        style={{ background: "rgb(228 222 222)" }}
        show={show}
        onHide={handleClose}
        placement="end"
        
      >
        <Offcanvas.Header>
          <img
            className={`${styles.logoimg}`}
            src="/assets/OttixhowCanvas.WebP"
            alt="logo"
          />
          <button
            type="button"
            className="btn-close"
            style={{
              margin: "36px",
              backgroundColor: "white",
              borderRadius: "50%",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onClick={handleClose}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></button>
        </Offcanvas.Header>
        <Offcanvas.Body className={`${styles.headingtitle}`}>
          
          <div style={{padding:"43px"}}>
          <h4>Get a free 90 days trail with personalised demo</h4>
          <Button
          onClick={handleNavigateContact}
            className={`${styles.schedulebtn}`}
          >
           <span className={`${styles.text}`}>Schedule a demo</span> <span className={`${styles.arrow}`}><BsArrowRight /> </span>
          </Button>
          </div>
          
        <div>
          <hr className={`${styles.linedivider}`} />
          <a className={`${styles.info}`} href="mailto:info@ottixhow.com">info@ottixhow.com</a>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HomeCanvas;
