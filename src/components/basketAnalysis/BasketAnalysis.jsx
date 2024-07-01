import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ScheduleDemoArrow from "../scheduledemoarrow/ScheduleDemoArrow";

function BasketAnalysis() {
  return (
    <div>
      <Container className="p-5">
        <h1 className="text-center" >Basket Analysis</h1>
        <Row className="d-flex align-items-center" >
        <Col md={6}>
          <p style={{color:"#7a7e83",fontSize:"17px"}} >
            Uncover valuable insights by exploring the connections between
            products or items that customers frequently purchase together.
            OttixHow’s advanced data analysis techniques allow you to identify
            meaningful associations and patterns within transactional data. By
            understanding these relationships, you can strategically enhance
            product placement and promotions, leading to increased sales and
            customer satisfaction. Additionally, our solution empowers you to
            optimize inventory management, ensuring that you always have the
            right products in stock to meet customer demand. Moreover, by
            delving into the occurrence of item sets (combinations of products),
            you can gain a deeper understanding of customer preferences and
            behavior. Our algorithms accurately determine the support and
            confidence of each association, providing you with actionable
            information to drive targeted marketing campaigns and further
            enhance customer engagement.
          </p>
        </Col>
        <Col md={6} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Card style={{height:"180px"}}>
            <Card.Img variant="top" src="/assets/basketanalysis.WebP" style={{height:"100%",width:"100%"}} />
            </Card>
            <div className="mt-4" >
                <ScheduleDemoArrow />
                </div>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BasketAnalysis;
