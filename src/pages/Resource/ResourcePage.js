import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ResourcesHome from "../../components/resourceshome/ResourcesHome";

import ResourceSection from "../../components/resourceSection/ResourceSection";
import BlogCards from "../../components/blogCard/BlogCards";
import ResouceSocialMedia from "../../components/resouceSocialMedia/ResouceSocialMedia";
import FooterImgSection from "../../components/footerimg/FooterImg";

function ResourcePage() {
  return (
    <div>
          <ResourcesHome />
          <ResourceSection />
        <>
          <div sm={12} className="mt-3 mb-3">
            <h1 className="text-center">Our Blog</h1>
          </div>
        </>
        <Container className="mb-5">
        <Row style={{ display: "flex", flexWrap: "wrap" }}>
          <Col md={3} lg={3} sm={2}>
            <BlogCards
              goto={"/unveiling-customer-insights-market-basket-analysis"}
              img={"assets/card1.jpg"}
              title="Unveiling Customer Insights: Market Basket Analysis, Cannibalization, and Halo Effect"
            />
          </Col>
          <Col md={3} lg={3} sm={2}>
            <BlogCards
              goto={"/leveraging-sales-analysis-and-competitor-price-index-for-business-growth"}
              img={"assets/card2.jpg"}
              title="Leveraging Sales Analysis and Competitor Price Index for Business Growth"
            />
          </Col>
          <Col md={3} lg={3} sm={2}>
            <BlogCards
              goto={"/dynamics-of-retail-price-index-and-consumer-price"}
              img={"assets/card3.jpg"}
              title="Unveiling the Dynamics of Retail Price Index and Consumer Price Index: An In-Depth Analysis"
            />
          </Col>
          <Col md={3} lg={3} sm={2}>
            <BlogCards
              goto={"/sales-and-stocks-analysis"}
              img={"assets/card4.jpg"}
              title="Sales and Stocks Analysis"
            />
          </Col>
          <Col md={3} lg={3} sm={2}>
            <BlogCards
              goto={"/award-winning-company-orbio-solutions"}
              img={"assets/card5.jpg"}
              title="“Orbio Solutions: Pioneering AI-Driven Analytical Excellence with Award-Winning Product, OttixHow”"
            />
          </Col>
        </Row>
      </Container>
      <ResouceSocialMedia />
      <FooterImgSection />
    </div>
  );
}

export default ResourcePage;
