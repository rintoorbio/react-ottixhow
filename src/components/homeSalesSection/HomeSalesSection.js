import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./homesales.module.css"

function HomeSalesSection() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6} className={styles.colPadding}>
            <h1>Sales Analysis</h1>
            <p style={{ color: "#7a7e83", fontSize: "17px" }}>
              OttixHow provides a sales dashboard with detailed metrics on
              average monthly sales by region, store, department, and product
              type. It helps businesses analyse historical demand, customer
              behaviour, and emerging trends to optimize revenue, profitability,
              inventory management, and identify upsell opportunities.
            </p>
          </Col>
          <Col md={6} className="p-0">
          <Image src="assets/salesanalysis.WebP" className={`${styles.img}`} />
            {/* <img
              src="assets/salesanalysis.WebP"
              alt="salesimg"
              style={{ height: "auto", width: "100%" }}
            /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeSalesSection;
