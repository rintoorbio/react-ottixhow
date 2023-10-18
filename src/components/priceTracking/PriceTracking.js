import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

function PriceTracking() {
    const navigate = useNavigate()
  return (
    <div>
    <Container className="mt-4 mb-3" >
      <Row className="mb-3">
        <h1>Price Tracking</h1>
      </Row>
      <Row
        style={{
          duisplay: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col md={6} style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "#7a7e83", fontSize: "19px" }}>
            Gain access to the pricing details of your competitors’ products
            effortlessly with heatmap, allowing you to make informed comparisons
            with your own offerings. With just a click, you can easily assess
            whether their prices are higher, lower, or equal to your own. This
            convenient feature saves you time and effort by streamlining the
            process of evaluating your competitors’ pricing strategies. By
            quickly understanding how your prices stack up against the
            competition, you can make data-driven decisions to stay competitive
            in the market.
          </p>
        </Col>
        <Col
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="assets/pricetracking.jpg"
            alt="img"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
      <Row onClick={()=>navigate("/contact-us")} style={{cursor: "pointer"}} >
        <p style={{color:"black", fontSize: "17px", marginTop: "12px" }}>
          Schedule a demo to know more
          <span>
            <LiaLongArrowAltRightSolid
              style={{ fontSize: "23px", marginLeft: "5px" }}
            />
          </span>
        </p>
      </Row>
    </Container>
    </div>
  );
}

export default PriceTracking;
