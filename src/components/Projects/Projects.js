import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nexgen from "../../Assets/Projects/nexgen.jpg";
import dsaTracker from "../../Assets/Projects/dsaTracker.jpg"
import numbers from "../../Assets/Projects/numbers.jpg";
import flow from '../../Assets/Projects/flow.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={flow}
              isBlog={false}
              title="Flow"
              description=" Developed the Flow app, inspired by OkCredit, featuring Google authentication for secure access and a tabular expense view for streamlined tracking and organization. The app enables users to log expenses with custom reminders for effective financial management, leveraging Firebase Cloud Messaging (FCM) to deliver real-time notifications for due reminders."
              ghLink="https://github.com/yuv-raj100/Flow-Public"
              demoLink="https://drive.google.com/file/d/1muIxpJax2_pBc171Onp2UK7zj6vEIr8J/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexgen}
              isBlog={false}
              title="NexGen"
              description=" Developed a mobile responsive e-commerce website using TailwindCSS with JWT-based authentication and Redux
 for global state management. Added protected routes, infinite scrolling for product listings, and Razorpay integration for secure online payments. Created RESTful APIs for backend data management and ensured persistent cart functionality using local storage."
              ghLink="https://github.com/yuv-raj100/Ecommerce-Store"
              demoLink="https://nexgen-liard.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsaTracker}
              isBlog={false}
              title="DSA Tracker"
              description="DSA Tracker helps you track your progress in solving 400+ questions and keeps you engaging based on Love
              Babbar 450 questions DSA sheet. Utilized React features like useState, useEffect and Routes. Implemented local storage of the browser to store user progress."
              ghLink="https://github.com/yuv-raj100/DSA-Tracker"
              demoLink="https://yuv-raj100.github.io/DSA-Tracker-Live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={numbers}
              isBlog={false}
              title="The Numbers"
              description="People nowadays are confused about which movie to choose for their weekend. Our react app resolves this by
              allowing users to compare movies based on their ratings. Data obtained using the Open Movie Database (OMDB) API. – Utilized responsive design (Grid Layout and Flexbox) to ensure compatibility across all devices."
              ghLink="https://github.com/yuv-raj100/The-Numbers"
              demoLink="https://yuv-raj100.github.io/The-Numbers-Live/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
