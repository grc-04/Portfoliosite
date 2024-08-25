import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.png";
import housing from "../../Assets/Projects/housing.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import bored from "../../Assets/Projects/bored.png";
import bot from "../../Assets/Projects/quizbot.png";
import farmoney from "../../Assets/Projects/Farmoney.png";
import evac from "../../Assets/Projects/evac.png";
import chatbot from "../../Assets/Projects/chatbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          My latest projects!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hosmas}
              isBlog={false}
              title="Complete Hostel Management System"
              description="A complete Hostel Management System for TIET with 
              hostel and room allocation, laundry, cleaning, mess and leave management integrations working live."
              ghLink="https://hosmas.ccstiet.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evac}
              isBlog={false}
              title="evac"
              description="Developed admin and user  pages using Flutter for EVAC: Your ally in emergencies, an app to provide accurate headcounts in the face of calamity. "
              ghLink="https://github.com/grc-04/evac"
            />
            </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={housing}
              isBlog={false}
              title="Housing Price Prediction Model"
              description="A simple machine learning project that predicts the cost
              of houses in California through random forest modules
              with an accuracy of 81%"
              ghLink="https://github.com/grc-04/Housing_Price_Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bored}
              isBlog={false}
              title="Bored"
              description="Implemented a REST API to provide content and popularity-based recommendations for movies, songs, etc. through a python script."
              ghLink="https://github.com/grc-04/bored"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommendation System"
              description="A movie recommender system using Pandas, Numpy, Scikitlearn using cosine similarity for content based recommendations"
              ghLink="https://github.com/grc-04/contentbased_recommendersystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Redesigned Portfolio Website"
              description="Redesigned Portfolio using a template"
              ghLink="https://github.com/grc-04/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmoney}
              isBlog={false}
              title="Farmoney"
              description="Wrote the algorithm for Farmoney: An agri-investment platform for retail investors to invest directly to farmers"
              ghLink="https://github.com/grc-04/far_money"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="QuizBot using discord.py"
              description="Created a discord bot that facilitates the conduction of online quizzes with Google Sheet integration for
              scorekeeping, complete with timer and answer
              collection."
              ghLink="https://github.com/grc-04/Pouncebot"       
            />
          </Col>
          
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="NLP-Chatbot"
              description="Built a Chatbot using Natural Language Processing and Neural Networks.Transformed textual data into numerical values using Bag of Words encoding."
              ghLink="https://github.com/grc-04/nlp-chatbot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
