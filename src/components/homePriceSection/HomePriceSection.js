import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HomePriceSection() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h1 style={{fontSize:"40px"}} >Sales Analysis</h1>
            <p style={{color:"#7a7e83",fontSize:"18px"}} >
              OttixHow provides a sales dashboard with detailed metrics on
              average monthly sales by region, store, department, and product
              type. It helps businesses analyse historical demand, customer
              behaviour, and emerging trends to optimize revenue, profitability,
              inventory management, and identify upsell opportunities.
            </p>
          </Col>
          <Col md={6}>
            <img 
            src="assets/salesanalysis.jpg"
            alt="salesimg"
            style={{height:"auto",width:"100%"}}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePriceSection;
