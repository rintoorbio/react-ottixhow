import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contactform.css";
import { FaMapMarked } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import FormSection from "./FormSection";

function ContactForm() {
  return (
    <div className="mb-5">
      <Container>
        <Row>
          <Col md={5}>
            <div className="newcard mb-1">
              <Col md={2}>
                <FaMapMarked
                  style={{
                    fontSize: "55px",
                    color: "#faa71c",
                    marginLeft: "-7px",
                  }}
                />
              </Col>
              <Col md={10}>
                <div style={{ marginLeft: "19px" }} >
                <h3>Our Address</h3>
                <p style={{ color: "#7a7e83" }}>
                  #335, Ground Floor, 27th Main, Sector 2, HSR Layout, Bangalore
                  - 560102 Karnataka
                </p>
                </div>
              </Col>
            </div>

            <Row>
              <div className="newcard1">
                <Col md={2}>
                  <IoMdMail
                    style={{
                      fontSize: "55px",
                      color: "#faa71c",
                      marginLeft: "-7px",
                    }}
                  />
                </Col>
                <Col md={10}>
                  <div style={{ marginLeft: "23px" }}>
                    <h3>Our Mailbox</h3>
                    <p style={{ color: "#7a7e83" }}>info@ottixhow.com</p>
                  </div>
                </Col>
              </div>
            </Row>
          </Col>

          <Col md={7}>
            <FormSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
