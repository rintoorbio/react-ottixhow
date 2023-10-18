import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./hometool.module.css";

import { BsShop } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import { CiMusicNote1 } from "react-icons/ci";
import { FaAmbulance } from "react-icons/fa";

function HomeToolsSection() {
  return (
    <div>
    <Container fluid>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={2} className={`${styles.const}`}>
          <div className="d-flex flex-column align-items-center"> 
            <BsShop className={`${styles.iconstyle}`} />
            <h6 className="mt-4 text-center" style={{ fontSize: "20px" }}>
              Grocery
            </h6>
          </div>
        </Col>
        <Col md={2} className={`${styles.const}`}>
          <div className="d-flex flex-column align-items-center"> 
            <BsLightbulb className={`${styles.iconstyle}`} />
            <h6 className="mt-4 text-center" style={{ fontSize: "20px" }}>
              Household
            </h6>
          </div>
        </Col>
        <Col md={2} className={`${styles.const}`}>
          <div className="d-flex flex-column align-items-center"> {/* Adjust alignment */}
            <LiaToolsSolid className={`${styles.iconstyle}`} />
            <h6 className="mt-4 text-center" style={{ fontSize: "20px" }}>
              Hardware & Tools
            </h6>
          </div>
        </Col>
        <Col md={2} className={`${styles.const}`}>
          <div className="d-flex flex-column align-items-center"> 
            <CiMusicNote1 className={`${styles.iconstyle}`} />
            <h6 className="mt-4 text-center" style={{ fontSize: "20px" }}>
              Musical Instruments
            </h6>
          </div>
        </Col>
        <Col md={2} className={`${styles.const}`}>
          <div className="d-flex flex-column align-items-center"> 
            <FaAmbulance className={`${styles.iconstyle}`} />
            <h6 className="mt-4 text-center" style={{ fontSize: "20px" }}>
              Pharmacy
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default HomeToolsSection;
