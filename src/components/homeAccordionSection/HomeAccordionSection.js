import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import HomeAccordion from "../homeAccordion/HomeAccordion";

import styles from "./homeaccordion.module.css"

function HomeAccordionSection() {
  return (
    <div>
      <Container fluid className="mt-4 mb-5">
        <Row>
          <Col style={{ display: "flex", flexDirection: "column" }} sm={6}>
            <h3 className={`${styles.heading}`} >Understand OttixHow in 3 easy steps</h3>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row style={{marginTop:"45px"}}>
          <Col className="p-0" md={6}>
            <Image
              src="assets/accordionimage.jpg"
              alt="img"
              // style={{ width: "100%", height: "auto", objectFit: "contain", }}
              className={`${styles.img}`}
            />
          </Col>
          <Col md={6}>
            <HomeAccordion />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeAccordionSection;
