import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SalesMarket from "../../components/salesMarket/SalesMarket";
import SalesTrend from "../../components/salesTrend/SalesTrend";

import styles from "./sales.module.css"
import BasketAnalysis from "../../components/basketAnalysis/BasketAnalysis";
import DemandForecasting from "../../components/demandForecasting/DemandForecasting";
import PricingStrategy from "../../components/pricingStrategy/PricingStrategy";
import Cannibalization from "../../components/cannibalization/Cannibalization";
import FooterImgSection from "../../components/footerimg/FooterImg";

function SalesAnalysis() {
  return (
    <div>
      <Container fluid>
        <Row>
        <Col sm={12} style={{ position: 'relative',padding:'0px' }}>
            <img src="/assets/saleshome.jpg" alt="sales logo" style={{ width: '100%', height: '267px',objectFit:"cover" }} />
            <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white',  zIndex: '1' }}>
              <span className={`${styles.salesheading}`} >Sales Analysis</span>
            </div>
          </Col>
        </Row>
      </Container>
      <SalesMarket />
      <SalesTrend />
      <BasketAnalysis />
      <DemandForecasting />
      <PricingStrategy />
      <Cannibalization />
      <FooterImgSection />
    </div>
  );
}

export default SalesAnalysis;
