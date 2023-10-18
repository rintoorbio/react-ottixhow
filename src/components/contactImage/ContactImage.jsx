import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactImage() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={12} style={{ position: "relative", padding: "0px" }}>
            <img
              src="/assets/background1.jpg"
              alt="sales logo"
              style={{ width: "100%", height: "267px", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                zIndex: "1",
                //   lineHeight: '.2',
                maxWidth: "80%",
              }}
            >
              <h2
                style={{
                  // fontSize: '5vw',
                  fontWeight: "600",
                  lineHeight: "1.2",
                }}
              >
                We want to hear from you
              </h2>
              <div style={{ marginTop: "8px" }}>
                <h5
                  style={{
                    //   fontSize: '3vw',
                    fontWeight: "300",
                    lineHeight: "1.2",
                  }}
                >
                  Please fill out our form, and we’ll get in touch shortly.
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactImage;
