import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiDocker,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

function ToolsIUse() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h5>Netlify</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h5>Vercel</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default ToolsIUse;
