import React from 'react'
import { Col } from 'react-bootstrap'
import AwardWinningHeader from '../../../components/awardWinningHeader/AwardWinningHeader';
import FooterImgSection from '../../../components/footerimg/FooterImg';

function AwardWinning() {
  return (
    <>
     <div>
        <Col sm={12} style={{ position: "relative", padding: "0px" }}>
          <img
            src="/assets/7.WebP"
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </div>
      <AwardWinningHeader />
      <FooterImgSection />
    </>
  )
}

export default AwardWinning;