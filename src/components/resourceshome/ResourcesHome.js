import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ResourcesHome() {
  return (
    <div>
    <Container fluid  >
      <Row>
        <Col sm={12} style={{ position: 'relative', padding: '0' }}>
          <img
            src="/assets/resourcehome.jpg"
            alt="about logo"
            style={{ width: '100%', height: 'auto' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '69%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              zIndex: '1',
              lineHeight: '.2',
              maxWidth: '80%',
            }}
          >
            <span
              style={{
                fontSize: '3vw',
    fontWeight: '600',
    lineHeight: '1.2',
              }}
            >
              Why Power BI and Microsoft Azure are better together
            </span>
            <div style={{ marginTop: '8px' }}>
              <span
                style={{
                  fontSize: '2vw',
    fontWeight: '300',
    lineHeight: '1.2',
                }}
              >
                Turn your data into a competitive advantage by using Power BI and Azure together to connect, combine, and analyze your entire data estate.
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
