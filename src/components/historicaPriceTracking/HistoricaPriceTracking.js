import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {LiaLongArrowAltRightSolid} from "react-icons/lia"

function HistoricalPriceTracking() {
  
  const handleNavigateContact = ()=>{
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/orbiosolutions' })
    return false
  }

  return (
    <div style={{background: "#1f242e"}} >
    <Container
      // fluid
      // fullWidth
      className="p-4"
      style={{ minHeight: "100vh", }}
    >
        <h1 className="text-white text-center">Historical Price Monitoring</h1>
      <Row className="d-flex align-items-center" >
        <Col md={6}>
          <div>
            <img
              src="assets/historicalprice.WebP"
              alt="img"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <p style={{ color: "#717780", fontSize: "16px", wordBreak: "break-word" }} >
              Stay ahead of the competition by gaining valuable insights into
              their historical price fluctuations. It is crucial to stay
              informed about your competitors, especially when they are running
              promotional offers. By analyzing their historical pricing data,
              you can identify optimal price points, understand price
              elasticity, and uncover potential gaps or opportunities in the
              market. Monitoring historical prices offers businesses and
              individuals a deeper understanding of market dynamics. It enables
              them to identify pricing trends, make well-informed decisions
              regarding pricing strategies, product positioning, and maintain
              competitiveness in the market. By examining historical data,
              businesses can gain insights into factors like seasonal
              fluctuations, changes in demand, competitive pricing, and the
              impact of promotions or discounts. Furthermore, analyzing
              historical prices allows you to evaluate the effectiveness of your
              competitor's pricing decisions and assess the long-term impact of
              their price changes. It also aids in conducting competitive
              analysis by uncovering how your competitors' pricing strategies
              have evolved over time and how they have responded to market
              changes. By leveraging historical price monitoring, you can stay
              ahead of the competition and make strategic pricing decisions
              based on comprehensive insights.
            </p>
          </div>
          <div onClick={handleNavigateContact} style={{ color: "#faa71c",cursor:"pointer",marginTop:"12px",fontSize:"16px" }}>
            <span>Schedule a demo to know more <span><LiaLongArrowAltRightSolid /></span> </span>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default HistoricalPriceTracking;
