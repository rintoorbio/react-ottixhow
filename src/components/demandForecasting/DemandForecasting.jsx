import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScheduleDemoArrow from "../scheduledemoarrow/ScheduleDemoArrow";

function DemandForecasting() {
  return (
    <div>
      <Container>
      <h1 className="text-center" >Demand Forecasting – before pricing strategy</h1>
        <Row className="d-flex align-items-center" >
          <Col md={6}>
            <img
            alt="img"
              src="/assets/demandforecasting.WebP"
              style={{ height: "auto", width: "100%" }}
            />
           <ScheduleDemoArrow />
          </Col>
          <Col md={6}>
            <div>
              <p style={{ color: "#7a7e83", fontSize: "17px" }}>
                OttixHow offers a powerful stock prediction tool that can
                revolutionize your inventory management. By leveraging our
                performance analysis capabilities, you can gain valuable
                insights into the future demand for your products.
              </p>
              <p style={{ color: "#7a7e83", fontSize: "17px" }} >
                With OttixHow, you can accurately determine when and where an
                excess of stock will be required, as well as identify areas
                where stock levels are exceeding demand. Armed with this
                knowledge, you can develop effective strategies to optimize your
                inventory and ensure efficient resource allocation.
              </p>
              <p style={{ color: "#7a7e83", fontSize: "17px" }} >
                Make data-driven decisions and take proactive steps to improve
                your inventory management. Unlock the power of stock prediction
                with OttixHow and revolutionize your inventory management
                practices. Gain valuable insights, strategize effectively, and
                optimize your resources for maximum profitability.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DemandForecasting;
