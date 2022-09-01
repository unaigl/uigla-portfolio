import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../../Assets/myImage.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "../../style.css";

function Resume() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={3} className="myAvtar">
            <Tilt className="img-boder-box">
              <img src={myImage} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={1} />
          <Col md={8} className="home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1> */}
            <p className="home-about-body">
              I've been dealing with several softwares before falling in love
              with programming
              <br />
              <br />I am fluent in
              <i>
                <b className="green"> Javascript and Solidity. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="green">DApps and Web Technologies </b> and also in
                areas related to{" "}
                <b className="green">ZK roll-ups based products.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion in developing new
              <b className="green"> Smart Contract</b> models and
              <i>
                <b className="green">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="green"> React.js and Threejs</b>
              </i>
              <br />
              <br />
              I'm interested in Smart Contract{" "}
              <b className="green"> Security</b>
              <br />
              <br />
              Feel free to{" "}
              <span className="green">
                <a href="https://www.linkedin.com/in/unaiiglesias/">connect</a>{" "}
              </span>
              with me
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h3>
              Feel free to <span className="green">connect </span>with me
            </h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/unaigl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Unai_naz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/unaiiglesias"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/unai_igl/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Resume;
