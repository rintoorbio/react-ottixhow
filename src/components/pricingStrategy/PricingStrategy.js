import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";

function PricingStrategy() {
  const navigate = useNavigate();

  return (
    <div className="p-5" style={{ backgroundColor: "#001d2c" }}>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div style={{ color: "white" }}>
              <h2>Pricing strategy</h2>
            </div>
            <div >
              <p style={{ color: "#7a7e83", fontSize: "17px" }}>
                The Consumer Price Index (CPI) is a valuable resource for
                analyzing pricing trends in the market and making informed
                adjustments to your prices. By tracking the price fluctuations
                of a basket of goods and services, the CPI helps determine the
                necessary percentage changes and elasticity in prices over time.
                Additionally, it provides valuable insights into inflation and
                price trends within an economy
              </p>
              <p style={{ color: "#7a7e83", fontSize: "17px" }}>
                Sensitivity analysis is a technique used to assess the impact of
                varying inputs or parameters on the outcomes of a particular
                model or system. By systematically adjusting these inputs, you
                can gain valuable insights into how sensitive your results are
                to changes in those variables.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div>
              <img
                alt="img"
                style={{ height: "auto", width: "100%" }}
                src="/assets/salesbar.jpg"
              />
            </div>

            <div
              onClick={() => navigate("/contact-us")}
              style={{
                color: "#faa71c",
                cursor: "pointer",
                marginTop: "79px",
                fontSize: "16px",
              }}
            >
              <span>
                Schedule a demo to know more{" "}
                <span>
                  <LiaLongArrowAltRightSolid />
                </span>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PricingStrategy;
