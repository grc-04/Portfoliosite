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
            <br />I am a self-driven Computer Engineer, currently a student at Thapar Institute of Engineering Technology. My areas of interest include competitive programming, blockchain technology, and machine learning, among others.
            <br />
            <br />
            My non-technical skills include
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content and Creative Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Marketing and Public Relations
            </li>
            <li className="about-activity">
              <ImPointRight /> Finance and related concepts
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
