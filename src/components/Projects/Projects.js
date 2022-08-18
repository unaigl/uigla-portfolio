import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import AMM from "../../Assets/Projects/AMM.png";
import Bubbles1 from "../../Assets/Projects/Bubbles1.png";
import Bubbles2 from "../../Assets/Projects/Bubbles2.png";

function Projects() {
  const projectCardContent = [["imgPath", "isBlog", "title"], []]; // .map()

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AMM}
              isBlog={false}
              title="AMM defi"
              description=""
              ghLink=""
              demoLink="A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bubbles1}
              isBlog={false}
              title="3D web DApp"
              description="Web3 Dapp build using vite as bundler. Front-end, using React and Three.js's high level librarys (fiber and drei). 
              Providing web3 technology with web3-react and ethersproject libraries. Styled using Boostwatch and gsap."
              ghLink="https://github.com/unaigl/amm-defi"
              demoLink="A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bubbles2}
              isBlog={false}
              title="BLOG"
              description=" "
              ghLink=""
              demoLink="A"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
