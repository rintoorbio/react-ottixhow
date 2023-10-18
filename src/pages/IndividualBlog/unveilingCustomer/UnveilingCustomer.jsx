import React from "react";
import { Col } from "react-bootstrap";
import UnveilingCustomerHeader from "../../../components/unveilingCustomerHeader/UnveilingCustomerHeader";
import FooterImgSection from "../../../components/footerimg/FooterImg";

function UnveilingCustomer() {
  return (
    <>
      <div>
        <Col sm={12} style={{ position: "relative", padding: "0px" }}>
          <img
            src="/assets/2.png"
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </div>
      <UnveilingCustomerHeader />
      <FooterImgSection />
    </>
  );
}

export default UnveilingCustomer;
