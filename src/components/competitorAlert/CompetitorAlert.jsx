import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

function CompetitorAlert() {
  const navigate = useNavigate();
  return (
    <div>
    <Container className="pb-5">
      <Row>
        <Col md={6}>
          <div>
            <img
              src="assets/alelrt.jpg"
              alt="img"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <div>
            <p
              style={{
                color: "#717780",
                fontSize: "16px",
                wordBreak: "break-word",
              }}
            >
              Don’t miss out on crucial pricing insights. Set up personalized
              alerts today and take control of your competitive positioning.
              Stay informed, adapt quickly, and optimize your pricing strategies
              to stay ahead in the market.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h3>Alert</h3>
          </div>
          <div>
            <p
              style={{
                color: "#717780",
                fontSize: "16px",
                wordBreak: "break-word",
              }}
            >
              Tailor your alerts to your specific needs, whether you want to
              monitor particular competitors, specific product categories, or
              individual products. You have full control over the frequency of
              alerts, ensuring that you receive timely updates. By receiving
              notifications on price changes, you gain the advantage of
              proactively analyzing and responding to market shifts. This
              valuable information empowers you to adjust your pricing
              strategies strategically, ensuring that you stay competitive and
              seize opportunities to capture a larger market share.
            </p>
          </div>
          <div
            onClick={() => navigate("/contact-us")}
            style={{ cursor: "pointer" }}
          >
            <span style={{ marginTop: "79px", fontSize: "16px" }}>
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

export default CompetitorAlert;
