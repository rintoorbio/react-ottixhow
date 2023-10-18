import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeAccordion from "../homeAccordion/HomeAccordion";

function HomeAccordionSection() {
  return (
    <div>
      <Container className="mt-4 mb-5">
        <Row>
          <Col style={{ display: "flex", flexDirection: "column" }} sm={6}>
            <h3>Understand</h3>
            <h3>OttixHow in 3 easy steps</h3>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row>
          <Col md={6}>
            <img
              src="assets/accordionimage.jpg"
              alt="img"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Col>
          <Col md={6} style={{ marginTop: "10px" }}>
            <HomeAccordion />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeAccordionSection;
