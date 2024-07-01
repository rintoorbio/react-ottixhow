import React from 'react'
import { Col } from 'react-bootstrap'
import LeverageSalesheader from '../../../components/leverageSalesheader/LeverageSalesheader';
import FooterImgSection from '../../../components/footerimg/FooterImg';

function LeverageSalesAnalysis() {
  return (
    <>
    <div>
        <Col sm={12} style={{ position: "relative", padding: "0px" }}>
          <img
            src="/assets/1.WebP"
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </div>
      <LeverageSalesheader />
      <FooterImgSection />
    </>
  )
}

export default LeverageSalesAnalysis;