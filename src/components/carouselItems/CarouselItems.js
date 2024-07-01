import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselItems.css";

function CarouselItems({ title, desc }) {
  function scrollToBottom() {
  const offset = 50; // Deduct 50 pixels from the height
  const scrollHeight = window.innerHeight - offset;

  document.documentElement.style.scrollBehavior = "smooth"; // Enable smooth scrolling
  window.scrollBy(0, scrollHeight); // Scroll down by the height of the window
  }


  return (
    <Carousel.Caption style={{display: "flex",justifyContent: "flex-start",alignItems: "center",top: "52px",color: "white",}}>
      <div
        style={{ width: "450px",  display: "flex",flexDirection: "column",}}>
        <h1
          className="animate__animated animate__fadeInDown"
          style={{ padding: "0px", textAlign: "start", maxWidth: "100%",}}>
          {title}
        </h1>
        <p
          className="animate__animated animate__fadeInDown"
          style={{ padding: "0px", textAlign: "start", maxWidth: "100%",}}>
          {desc}
        </p>
        <div style={{display:"flex"}}>
          <button className="discoverBtn animate__animated animate__fadeInDown" onClick={scrollToBottom} >Discover More</button>
        </div>
      </div>
    </Carousel.Caption>
  );
}

export default CarouselItems;
