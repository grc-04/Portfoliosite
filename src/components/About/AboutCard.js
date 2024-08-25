import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Garv Chandalia </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I am a self-driven Computer Engineer, currently a student at Thapar Institute of Engineering Technology. My areas of interest include competitive programming, automation, and machine learning, and Web Development
            <br />
            <br />
            My non-technical skills include
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Financial Analysis 
            </li>
            <li className="about-activity">
              <ImPointRight /> Product Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Marketing and Creative Writing
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
