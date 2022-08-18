import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import AMM from "../../Assets/Projects/AMM.png";
import Bubbles from "../../Assets/Projects/Bubbles.png";
import Blog from "../../Assets/Projects/Blog.png";

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
              description="WHAT_ DeFi DApp using uniswap infrastructure, use it to swap tokens in Ethereum and Polygon Mainnets."
              libraries={`HOW_ React (CRA) SPA - Swap Routes built using uniswap SDK - 'wagmi' to connect/manage user wallet - 'ethers' to interact with chains -
              Styled using Bootstrap, React-Bootstrap and css.`}
              ghLink="https://github.com/unaigl/amm-defi"
              demoLink="https://clinquant-horse-f49c45.netlify.app"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={Bubbles}
              isBlog={false}
              title="3D web DApp"
              description="WHAT_ A simple 3D web3 game where you've to play using only your mouse. Win and claim tokens deployed in BSC and Polygon testnet chains."
              libraries="HOW_ Vite as bundler - React (CRA) SPA - Three.js's high level librarys (fiber and drei) for 3D modeling. 
              web3-react to interact with chains and ethersproject for data types/utils - GSAP for animations - Styled using Boostwatch and css."
              ghLink="https://github.com/unaigl/Three-web3-site"
              demoLink="https://ubiquitous-custard-ecaa70.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={true}
              title="BLOG"
              description="In my blog, you can learn how to build some interesting parts of these projects."
              ghLink=""
              demoLink="https://dev.to/uigla"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
