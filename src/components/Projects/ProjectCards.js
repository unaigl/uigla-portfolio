import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import "../../style.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ position: "relative" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <br />
          {props.description}
          <br />
          <br />
          {props.libraries}
        </Card.Text>
        {!props.isBlog && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="project-github"
          >
            <BsGithub />
            GitHub
          </Button>
        )}
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="project-demo"
          >
            <CgWebsite /> &nbsp;
            {props.isBlog ? "Blog" : "Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
