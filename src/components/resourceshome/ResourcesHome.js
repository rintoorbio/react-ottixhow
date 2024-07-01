import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ResourcesHome() {
  return (
    <div>
    <Container fluid  >
      <Row>
        <Col sm={12} style={{ position: 'relative', padding: '0' }}>
          <img
            src="/assets/resourcehome.WebP"
            alt="about logo"
            style={{ width: '100%', height: 'auto' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '60%', left: '50%', transform: 'translate(-50%, -50%)', 
              textAlign: 'center', color: 'white', zIndex: '1', lineHeight: '.2', maxWidth: '80%',
            }}>
            <span
              style={{ fontSize: '3vw', fontWeight: '600', lineHeight: '1.2', }} >
              Competitor Analysis Platform
            </span>
            <div style={{ marginTop: '8px' }}>
              <span style={{ fontSize: '1.8vw', fontWeight: '300', lineHeight: '1.2' }} >
              Explore our competitor analysis platform and discover how it can outgrow your competitors.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ResourcesHome;
