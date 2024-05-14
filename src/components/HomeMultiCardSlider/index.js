import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeMultiCardSlider = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  // list of iamges path stored in array
  const images = [
    "icon1",
    "icon2",
    "icon3",
    "icon4",
    "icon5",
    "icon6",
    "icon7",
    "icon8",
    "icon9",
    "icon10",
  ];

  return (
    <div>
        <Carousel
        style={{ display: "flex", justifyContent: "center",alignItems:"center" }}
        autoPlaySpeed={2000}
        autoPlay={true}
        customTransition="transform 500ms ease-in-out" // Adjust the transition duration
        transition={500} // Adjust the transition duration
        transitionDuration={500} // Adjust the transition duration
        arrows={false}
        infinite={true}
        responsive={responsive}
      >
        {images?.map((image, index) => (
          <Card key={index} style={{ height: "auto", width: "122px", border: "none",marginLeft:"15px" }}>
            <img style={{borderRadius:"14px",width: "100%", height: "auto",objectFit: "scale-down"}} variant="top" src={`/assets/${image}.jpg`} alt="img" />
          </Card>
        ))}
      </Carousel>
    </div>
  )
}

export default HomeMultiCardSlider