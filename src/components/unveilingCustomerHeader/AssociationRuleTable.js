import React from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function AssociationRuleTable() {
  return (
    <div>
      <Container>
        <Row>
          {/* <Col md={6}> */}
          <Table striped style={{ width: "50%" }}>
            <thead>
              <tr>
                <th style={{ padding: "18px" }}>Rules</th>
                <th style={{ padding: "18px" }}>Support</th>
                <th style={{ padding: "18px" }}>Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "18px" }}>A^B→C</td>
                <td style={{ padding: "18px" }}>2</td>
                <td style={{ padding: "18px" }}>50%</td>
              </tr>
              <tr>
                <td style={{ padding: "18px" }}>B^C→A</td>
                <td style={{ padding: "18px" }}>2</td>
                <td style={{ padding: "18px" }}>50%</td>
              </tr>
              <tr>
                <td style={{ padding: "18px" }}>B^C→A</td>
                <td style={{ padding: "18px" }}>2</td>
                <td style={{ padding: "18px" }}>50%</td>
              </tr>
              <tr>
                <td style={{ padding: "18px" }}>A^C→B</td>
                <td style={{ padding: "18px" }}>2</td>
                <td style={{ padding: "18px" }}>50%</td>
              </tr>
              <tr>
                <td style={{ padding: "18px" }}>C→A^B</td>
                <td style={{ padding: "18px" }}>2</td>
                <td style={{ padding: "18px" }}>40%</td>
              </tr>
              <tr>
                <td style={{ padding: "18px" }}>A→B^C</td>
                <td style={{ padding: "18px" }}>2</td>
                <td style={{ padding: "18px" }}>33.33%</td>
              </tr>
              <tr>
                <td style={{ padding: "18px" }}>B→A^C</td>
                <td style={{ padding: "18px" }}>2</td>
                <td style={{ padding: "18px" }}>28%</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default AssociationRuleTable;
