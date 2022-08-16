import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiSolidity } from "react-icons/si";

function BlockchainnTools() {
  return (
    <>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <Col xs={4} md={2} className="tech-icons">
          <h3>HardHat</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h3>Truffle</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h3>Foundry</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h3>ethers</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <h3>web3</h3>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSolidity />
        </Col>
      </Row>
    </>
  );
}

export default BlockchainnTools;
