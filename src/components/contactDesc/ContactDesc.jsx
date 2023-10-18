import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactDesc() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <Container fluid style={{ padding: "64px" }}>
        <Row>
          <Col>
            <h5 style={{ fontWeight: "bold", color: "#827e83" }}>
              Make your business future-ready by understanding your data
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 style={{ color: "#7a7e83",marginTop:"15px" }}>
              Leverage an analytics-driven platform to analyze your product
              and sales data, empowering you to make data-informed decisions
              and maintain a competitive edge over your rivals.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactDesc;
