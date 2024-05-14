import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function CustomToggle({ children, eventKey, isCollapsed, onToggle }) {
  return (
    <div
      style={{ display: "flex", marginLeft: "8px", cursor: "pointer" }}
      onClick={() => onToggle(eventKey)}
    >
      <span>
        {isCollapsed ? (
          <AiOutlinePlus style={{ fontSize: "18px" }} />
        ) : (
          <AiOutlineMinus style={{ fontSize: "18px" }} />
        )}
      </span>
      <span style={{ marginLeft: "14px", fontSize: "18px" }}>{children}</span>
    </div>
  );
}

function HomeAccordion() {
  const [sectionCollapsed, setSectionCollapsed] = useState("0");

  const handleSectionToggle = (eventKey) => {
    setSectionCollapsed((prevKey) => (prevKey === eventKey ? null : eventKey));
  };

  return (
    <div>
      <Accordion activeKey={sectionCollapsed}>
        <Card style={{ border: "none" }}>
          <Card.Header style={{ background: "none" }}>
            <CustomToggle
              eventKey="0"
              isCollapsed={sectionCollapsed !== "0"}
              onToggle={handleSectionToggle}
            >
              Data Collection
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p style={{ fontSize: "15px" }}>
                Users can conveniently upload data according to their specific
                needs, whether it’s individual files or bulk uploads, providing
                flexibility and ease of data integration.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Header style={{ background: "none" }}>
            <CustomToggle
              eventKey="1"
              isCollapsed={sectionCollapsed !== "1"}
              onToggle={handleSectionToggle}
            >
              Matching
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p style={{ fontSize: "15px" }}>
                Our AI engine will accurately match your product with
                competitors, and a quality assurance process guarantees the
                appropriateness of the results before final approval.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Header style={{ background: "none" }}>
            <CustomToggle
              eventKey="2"
              isCollapsed={sectionCollapsed !== "2"}
              onToggle={handleSectionToggle}
            >
              Data Visualization
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p style={{ fontSize: "15px" }}>
                Users can access the consolidated results through a centralized
                dashboard, tailored to their specific requirements, enabling
                them to gain valuable insights and maintain a competitive edge.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default HomeAccordion;
