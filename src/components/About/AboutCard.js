import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosBook, IoIosPlay, IoMdBasketball, IoMdBeer } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Unai Iglesias </span>
            from <span className="purple"> Bilbao, Spain.</span>
            <br />I am a junior pursuing seniority in : Smart contracts | Web3 |
            3D Web | ZK roll-ups
            <br />
            <br />
            My background is in the field of Architecture where I discovered
            data flows designing parametric models
            <br />
            <br />
            I started programming trying to merge architecture and data flow
            using VR
            <br />
            <br />
            Across the path I started learning more lenguages being part of
            blockchain ecosystem
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <IoIosPlay /> Listening some podcasts like "Lex Fridman" or "Joe
              Rogan"
            </li>
            <li className="about-activity">
              <IoIosBook /> Reading science or cultural base books
            </li>
            <li className="about-activity">
              <IoMdBasketball /> Some basket or football
            </li>
            <li className="about-activity">
              <IoMdBeer /> Hanging out with friends after work
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Nature loves courage. You make the commitment and nature will
            respond to that commitment by removing impossible obstacles”{" "}
          </p>
          <footer className="blockquote-footer">Terence McKenna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
