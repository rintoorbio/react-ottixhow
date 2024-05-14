import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./homeprice.module.css";

function HomePriceSection() {
  return (
    <div className={`mt-5`}>
      <Container fluid>
        <Row>
          <Col md={6} style={{padding:"37px"}} >
            <h1>Competitor Analysis</h1>
            <p style={{ color: "#7a7e83", fontSize: "17px" }}>
              OttixHow identifies and analyses competitors, providing product
              details from various marketplaces in a centralized dashboard. It
              analyses trends and competitor strategies to drive demand,
              maximize sales, and stay ahead of the competition through diligent
              price tracking.
            </p>
          </Col>
          <Col md={6} className="p-0">
            <Image
              src="assets/competitoranalysis.jpg"
              className={`${styles.img}`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePriceSection;
