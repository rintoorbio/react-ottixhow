import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeCard from "../homeCard/HomeCard";

function HomeColSection() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <HomeCard
              title="AI – powered automatic product mapping"
              desc="AI-powered automatic product mapping streamlines and
            automates the process of categorizing and organizing
            products efficiently."
              img="assets/ailogo.png"
            />
          </Col>
          <Col md={4}>
            <HomeCard
              title="Real-time & historical price tracking"
              img="assets/lens.png"
              desc="Real-time and historical price tracking provides valuable insights into pricing trends and fluctuations over time, aiding in strategic decision-making and competitive analysis."
            />
          </Col>
          <Col md={4}>
            <HomeCard
              title="Intuitive heat map & visualization"
              desc="Intuitive heat map and visualization tools present data in a visually engaging format, enabling easy interpretation and analysis of patterns and trends."
              img="assets/marketlens.png"
            />
          </Col>
        </Row>
        <Row>
            <Col md={4} >
            <HomeCard
              title="Predictive analysis"
              desc="Predictive analysis utilizes data and algorithms to forecast future outcomes, enabling informed decision-making and proactive strategies."
              img="assets/marketpredict1.png"
            />
            </Col>
            <Col md={4} >
            <HomeCard
            title="Seamless reports integration"
            desc="Seamlessly integrate reports based on user preferences for a smooth and customizable experience."
            img="assets/report.png"
            />
            </Col>
            <Col md={4} >
            <HomeCard
            title="Data import & export"
            desc="Utilize the data in any desired location by conveniently exporting or importing the data as needed"
            img="assets/predictive.png"
            />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeColSection;
