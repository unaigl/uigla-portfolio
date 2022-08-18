import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import ToolsIUse from "./ToolsIUse";
import BlockchainnTools from "./BlockchainnTools";
import WebTools from "./WebTools";
import ARTools from "./ARTools";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Know Who </strong>I'M
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <h1 className="project-heading">
          Tools <strong className="purple"> I use</strong>
        </h1>
        <ToolsIUse />

        <h1 className="project-heading">
          Web <strong className="purple">skills </strong>
        </h1>
        <WebTools />

        <h1 className="project-heading">
          Blockchain <strong className="purple">skills</strong>
        </h1>
        <BlockchainnTools />
        <h1 className="project-heading">
          AR - VR <strong className="purple"> basics</strong>
        </h1>
        <ARTools />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
