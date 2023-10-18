import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ScheduleDemoArrow from '../scheduledemoarrow/ScheduleDemoArrow'

function SalesMarket() {
    
  return (
    <div>
    <Container fluid className="p-5" >
        <Row>
          <Col md={5}>
            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
            <img
              src="/assets/salesmarket.jpg"
              alt="img"
              style={{ height: "auto", width: "100%" }}
            />
            </div>
          </Col>
          <Col md={7}>
            <div>
              <p style={{color:"#7a7e83",fontSize:"17px"}}>
                We place great emphasis on recognizing the significance of sales
                analysis in propelling business growth and maximizing
                profitability. Through conducting comprehensive sales analysis,
                you can unveil opportunities for enhancement, gain a profound
                understanding of customer preferences, and optimize your sales
                strategies accordingly. At OttixHow, our team of experts
                specializes in delivering robust sales analysis solutions
                tailored to suit your unique business requirements.
              </p>
              <p style={{color:"#7a7e83",fontSize:"17px"}} >
                By accurately examining sales metrics, market dynamics, and
                customer behavior, we facilitate the discovery of valuable
                insights that have the potential to drive revenue growth. By
                identifying areas of strength as well as areas that require
                attention, you can make informed decisions grounded in data to
                elevate your sales performance. Seize a competitive advantage by
                harnessing the power of OttixHow’s sales analysis expertise.
              </p>
            </div>
          </Col>
        </Row>
        <ScheduleDemoArrow />
      </Container>
      </div>
  )
}

export default SalesMarket;