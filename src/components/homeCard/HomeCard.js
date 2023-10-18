import React from "react";
import { Card } from "react-bootstrap";

function HomeCard({title,desc,img}) {
  return (
    <Card style={{ padding: "15px", border: "none" }}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", padding: "5px",marginTop:"12px" }}>
          <img
          height="50"
          width="50"
            // style={{ height: "38px", width: "38px" }}
            src={img}
            alt="img"
          />
        </div>
        <div style={{ flex: "1" }}>
          <h4 style={{ marginTop: "8px" }}>
            {title}
          </h4>
          <p style={{ marginTop: "25px",color:"#7a7e83" }}>
            {desc}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default HomeCard;
