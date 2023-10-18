import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScheduleDemoArrow from "../scheduledemoarrow/ScheduleDemoArrow";

function Cannibalization() {
  return (
    <div className="p-5">
      <Container fluid>
        <Row>
          <Col md={6}>
            <div>
              <h2>Cannibalization and Halo effect</h2>
            </div>
            <div>
              <p>
                Develop a comprehensive comprehension of the Cannibalization &
                Halo effect in your business strategy. The capacity to recognize
                and skilfully handle this phenomenon is imperative for attaining
                sustainable growth and profitability over the long run.
              </p>
            </div>
            <div>
              <img
                alt="img"
                style={{ height: "auto", width: "100%" }}
                src="/assets/growchart.jpg"
              />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <p>
                By conducting a thorough analysis of market dynamics, consumer
                behaviour, and product positioning, we can furnish you with
                valuable data points, enabling you to formulate strategies that
                mitigate the negative impacts of cannibalization. With our
                specialized knowledge and experience, you can confidently
                introduce new products or services without jeopardizing the
                success of your current offerings. By strategically addressing
                cannibalization, you can optimize your market presence, uphold
                customer loyalty, and stimulate overall business expansion.
                Furthermore, understanding and harnessing the power of the halo
                effect are essential for establishing a strong brand image,
                fostering customer loyalty, and driving overall business growth.
                Through strategic cultivation of positive associations and the
                delivery of exceptional experiences, you can leverage the halo
                effect to create a favourable impression and influence consumer
                behaviour. Embrace the power of the halo effect to leave a
                lasting impact on your target audience.
              </p>
            </div>
            <div className="mt-5" >
            <ScheduleDemoArrow />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cannibalization;
