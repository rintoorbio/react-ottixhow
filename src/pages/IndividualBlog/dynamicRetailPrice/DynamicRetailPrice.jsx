import React from 'react'
import { Col } from 'react-bootstrap';
import DynamicRetailPriceHeader from '../../../components/dynamicRetailHeader/DynamicRetailPriceHeader';
import FooterImgSection from '../../../components/footerimg/FooterImg';

function DynamicRetailPrice() {
  return (
    <>
    <div>
        <Col sm={12} style={{ position: "relative", padding: "0px" }}>
          <img
            src="/assets/6.png"
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </div>
      <DynamicRetailPriceHeader />
      <FooterImgSection />
    </>
  )
}

export default DynamicRetailPrice;