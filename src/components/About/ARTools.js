import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp, SiUnity } from "react-icons/si";

function ARTools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
    </Row>
  );
}

export default ARTools;
