import React from "react";
import { Container } from "react-bootstrap";

function CompetitorDesc() {

  const paragraphStyle = {color: "#7a7e83", fontSize: "18px"};

  return (
    <div>
      <Container>
      <p style={paragraphStyle}>
        Harness the unmatched product mapping capabilities of OttixHow. Delve
        into a comprehensive exploration and analysis of how your competitor,
        whether it’s on a global or local scale, right down to specific zip
        codes. By leveraging OttixHow, you will gain invaluable insights into
        pricing strategies, empowering you to make well-informed decisions that
        keep you competitive in the market. Discover the difference today!
      </p>
      <p style={paragraphStyle}>
        In cases where automated matching may fall short, OttixHow goes above
        and beyond by deploying a dedicated team of experts who manually ensure
        accurate product matches. We recognize the significance of precise
        product matching and our experts tirelessly strive to maintain
        compliance. With their expertise and meticulous attention to detail,
        they exhaust every effort to achieve precise and reliable product
        matches.
      </p>
      <p style={paragraphStyle}>
        At OttixHow, we are fully dedicated to delivering the utmost level of
        quality and accuracy in our matching process. This commitment provides
        you with the confidence and assurance necessary for effective market
        analysis and decision-making.
      </p>
      </Container>
    </div>
  );
}

export default CompetitorDesc;
