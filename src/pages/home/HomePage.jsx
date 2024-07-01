import React, { useState } from 'react'
import styles from "./home.module.css";
import HomePriceSection from "../../components/homePriceSection/HomePriceSection";
import HomeSalesSection from "../../components/homeSalesSection/HomeSalesSection";
import HomeToolsSection from "../../components/homeToolsSection/HomeToolsSection";
import FooterImgSection from "../../components/footerimg/FooterImg";
import HomeCarousel from '../../components/HomeCarousel';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import HomeCard from '../../components/homeCard/HomeCard';
import HomeAccordion from '../../components/homeAccordion/HomeAccordion';

function HomePage() {

    const [lastHovered, setLastHovered] = useState("PRICING ANALYSIS");

    const handleNavigateContact = ()=>{
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/orbiosolutions' })
      return false
    }

    const handleMouseEnter = (buttonName) => {
      setLastHovered(buttonName);
    };

  return (
    <div>
      <HomeCarousel />
      <div style={{
        marginTop:"-169px",
        zIndex:99,
        position:"relative",
      }}>
      </div>

        <div className={`${styles.btncontainer} mb-2`}>
        <button 
          onMouseEnter={() => handleMouseEnter('PRICING ANALYSIS')}
          className={`${styles.btn} ${lastHovered === 'PRICING ANALYSIS' ? styles.blackBg : ''}`}>
          PRICING ANALYSIS
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('SALES ANALYSIS')}
          className={`${styles.btn} ${lastHovered === 'SALES ANALYSIS' ? styles.blackBg : ''}`}>
          SALES ANALYSIS
        </button>
        </div>
        {
        lastHovered === "PRICING ANALYSIS" ? <HomePriceSection /> : <HomeSalesSection /> 
        }
        
    <div className={styles.bannerContainer}>
      <h2 className={styles.bannerHeading}>Stay ahead with OttixHow!</h2>
      <p className={styles.bannerPara}>
      Gain valuable insights from your competitors with OttixHow - Your competitor analysis platform.
      </p>
      <Button 
        onClick={handleNavigateContact}
        variant="outline-light"
        className={styles.bannerBtn}
      >
        Start your FREE 90-day trial
      </Button>
    </div>

        <div className="mt-5" style={{ textAlign: "center" }}>
          <Container>
            <p style={{ fontSize: "17px", color: "#7a7e83" }}>
              Leverage OttixHow to gain powerful advantage in understanding your
              competition and their pricing strategies.
            </p>
          </Container>
        </div>
        <div>
        <Container>
        <Row>
          <Col md={4}>
            <HomeCard
              title="AI – powered automatic product mapping"
              desc="AI-powered automatic product mapping streamlines and
            automates the process of categorizing and organizing
            products efficiently."
              img="assets/ailogo.WebP"
            />
          </Col>
          <Col md={4}>
            <HomeCard
              title="Real-time & historical price tracking"
              img="assets/lens.WebP"
              desc="Real-time and historical price tracking provides valuable insights into pricing trends and fluctuations over time, aiding in strategic decision-making and competitive analysis."
            />
          </Col>
          <Col md={4}>
            <HomeCard
              title="Intuitive heat map & visualization"
              desc="Intuitive heat map and visualization tools present data in a visually engaging format, enabling easy interpretation and analysis of patterns and trends."
              img="assets/marketlens.WebP"
            />
          </Col>
        </Row>
        <Row>
            <Col md={4} >
            <HomeCard
              title="Predictive analysis"
              desc="Predictive analysis utilizes data and algorithms to forecast future outcomes, enabling informed decision-making and proactive strategies."
              img="assets/marketpredict1.WebP"
            />
            </Col>
            <Col md={4} >
            <HomeCard
            title="Seamless reports integration"
            desc="Seamlessly integrate reports based on user preferences for a smooth and customizable experience."
            img="assets/report.WebP"
            />
            </Col>
            <Col md={4} >
            <HomeCard
            title="Data import & export"
            desc="Utilize the data in any desired location by conveniently exporting or importing the data as needed"
            img="assets/predictive.WebP"
            />
            </Col>
        </Row>
        </Container>
        </div>
        <div>
      <Container className="mt-4 mb-5">
        <Row>
          <Col style={{ display: "flex", flexDirection: "column" }} sm={6}>
            <h3 className={`${styles.heading}`} >Understand OttixHow in 3 easy steps</h3>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row style={{marginTop:"45px"}}>
          <Col className="p-0" md={6}>
            <Image
              src="assets/accordionimage.WebP"
              alt="img"
              // style={{ width: "100%", height: "auto", objectFit: "contain", }}
              className={`${styles.img}`}
            />
          </Col>
          <Col md={6}>
            <HomeAccordion />
          </Col>
        </Row>
      </Container>
    </div>
        <HomeToolsSection />
        <FooterImgSection />

    </div>
  )
}

export default HomePage