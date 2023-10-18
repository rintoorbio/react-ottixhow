import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import {MdKeyboardArrowDown} from "react-icons/md"
import CompetitorDesc from '../../components/competitorDesc/CompetitorDesc';
import PriceTracking from '../../components/priceTracking/PriceTracking';
import HistoricaPriceTracking from '../../components/historicaPriceTracking/HistoricaPriceTracking';
import MapViolation from '../../components/mapViolation/MapViolation';
import CompetitorAlert from '../../components/competitorAlert/CompetitorAlert';
import FooterImgSection from '../../components/footerimg/FooterImg';

function CompetitorAnalysis() {

  const firstRowRef = useRef(null);
  
  const scrollToFirstRow = () => {
    if (firstRowRef.current) {
      firstRowRef.current.scrollIntoView({ behavior: 'smooth' });

      // Scroll to the top of the page
      window.scrollTo({ top: 240, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Container fluid>
      <Row>
          <Col sm={12} style={{ position: 'relative',padding:'0px' }}>
            <img src="/assets/competitorhome.jpg" alt="about logo" style={{ width: '100%', height: '267px',objectFit:"cover" }} />
            <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white',  zIndex: '1' }}>
              <span style={{fontSize: '30px', fontWeight: '600', }} >Competitor Analysis</span>
            </div>
            <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white',  zIndex: '1',cursor:"pointer" }}>
              <MdKeyboardArrowDown onClick={scrollToFirstRow} fontSize="45px" />
            </div>
          </Col>
      </Row>
      </Container>

        <Container>
      <Row className='mt-5' ref={firstRowRef} >
      <CompetitorDesc />
      </Row>
        </Container>

          <PriceTracking />
          <HistoricaPriceTracking />
          <MapViolation />
          <CompetitorAlert />
          <FooterImgSection />
        
    </div>
  )
}

export default CompetitorAnalysis;