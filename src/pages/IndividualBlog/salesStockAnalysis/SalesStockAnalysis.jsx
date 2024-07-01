import React from 'react'
import { Col } from 'react-bootstrap'
import SalesandStocksAnalysisHeader from '../../../components/salesandStocksAnalysisHeader/SalesandStocksAnalysisHeader'
import FooterImgSection from '../../../components/footerimg/FooterImg'

function SalesStockAnalysis() {
  return (
    <>
    <div>
        <Col sm={12} style={{ position: "relative", padding: "0px" }}>
          <img
            src="/assets/5.WebP"
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </div>
      <SalesandStocksAnalysisHeader />
      <FooterImgSection />
    </>
  )
}

export default SalesStockAnalysis