import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HomeSalesSection() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h1 style={{ fontSize: "40px" }}>Competitor Analysis</h1>
            <p style={{ color: "#7a7e83", fontSize: "18px" }}>
              OttixHow identifies and analyses competitors, providing product
              details from various marketplaces in a centralized dashboard. It
              analyses trends and competitor strategies to drive demand,
              maximize sales, and stay ahead of the competition through diligent
              price tracking.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="assets/competitoranalysis.jpg"
              alt="salesimg"
              style={{ height: "auto", width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeSalesSection;
