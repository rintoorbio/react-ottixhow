import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScheduleDemoArrow from "../scheduledemoarrow/ScheduleDemoArrow";

function SalesTrend() {
  return (
    <div style={{ background: "#f9f9f9" }} >
    <Container
      className="p-5"
      fluid
    >
      <Row>
        <h1>Sales Trend</h1>
      </Row>
      <Row>
        <Col md={7}>
          <p style={{color:"#7a7e83",fontSize:"17px"}} >
            With our user-friendly dashboard, you can easily monitor your
            performance across different departments, identify top
            revenue-generating products, and analyze revenue based on various
            locations.
          </p>
          <p style={{color:"#7a7e83",fontSize:"17px"}} >
            Our comprehensive dashboard provides a clear overview of your total
            orders, revenue, profit, and costs, allowing you to make informed
            decisions to grow your business. What’s more, you can conveniently
            compare these current metrics with your historical data to track
            your progress and identify trends over time.
          </p>
          <p style={{color:"#7a7e83",fontSize:"17px"}} >
            Empower your business with OttixHow and take control of your sales
            and revenue data like never before. Stay ahead of the competition
            and make data-driven decisions to maximize your success. Join us now
            and unleash the full potential of your business!
          </p>
        </Col>
        <Col md={5}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <img 
            src="assets/salesbar.jpg"
            alt="img"
            style={{height:"auto",width:"100%"}}
            />
            </div>
            <ScheduleDemoArrow />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default SalesTrend;
