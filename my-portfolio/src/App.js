import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div className="container text-center">
    <h1 className="title">Aravindan Jayachandran</h1>
    <p className="subtitle">Full Stack Developer | JavaScript | React | React Native | Vue.js | Angular | TypeScript | Node.js | Python | Spring Boot</p>
    <p className="description">Passionate about building high-performance, user-centric web applications with expertise in cloud integration and backend services.</p>
    <p className="description">I have a strong background in designing, developing, and deploying scalable web applications. With expertise in front-end and back-end technologies, I strive to create seamless digital experiences. My work involves developing robust and secure applications with a focus on maintainability, performance, and best coding practices.</p>
 
  </div>
);

const About = () => (
  <div className="container">
    <h2 className="section-title">About Me</h2>
    <p className="section-text">As a Full Stack Developer, I specialize in building scalable, high-performance applications using JavaScript, React, Vue.js, Angular, and TypeScript.</p>
    <p className="section-text">My expertise extends to backend development with Python, Spring MVC, Spring Boot, and Node.js, along with AWS cloud integration and automation.</p>
    <p className="section-text">With a strong foundation in software architecture, I have successfully led multiple projects that integrate cloud services, microservices, and front-end frameworks to deliver seamless user experiences. My goal is to bridge the gap between business needs and technical solutions while maintaining high code quality and efficiency.</p>
    <p className="section-text">I thrive in fast-paced environments, working collaboratively with cross-functional teams to develop and deploy applications that solve real-world challenges. My problem-solving mindset and adaptability allow me to tackle complex technical issues efficiently.</p>
    <p className="section-text">Beyond coding, I am an advocate for continuous learning, staying up to date with the latest industry trends, and sharing knowledge through mentoring and technical blogs. I am passionate about open-source contributions and enjoy working on side projects that enhance my skill set.</p>
  </div>
);

const Experience = () => (
  <div className="container">
    <h2 className="section-title">Experience</h2>
    <div className="experience-card">
      <h3>Excelon Solutions / Matson Logistics - Full Stack Developer (Dec 2022 - Present)</h3>
      <ul>
        <li>Architected and maintained React, React Native, Redux, and TypeScript applications.</li>
        <li>Optimized AWS cloud infrastructure and implemented serverless technologies.</li>
        <li>Developed Java microservices using Spring Boot, integrating with MongoDB and PostgreSQL.</li>
      </ul>
    </div>
    <div className="experience-card">
      <h3>Core Software Technologies (Apple, Samsung, Vanguard) - Full Stack Developer (May 2019 - Nov 2022)</h3>
      <ul>
        <li>Developed full-stack applications using Java, JavaScript, Angular, Vue.js, and React.</li>
        <li>Integrated Node.js with AWS Lambda for serverless computing.</li>
        <li>Implemented microservices using Docker and Kubernetes (AWS EKS).</li>
        <li>Led code refactoring efforts to improve maintainability and reduce technical debt.</li>
      </ul>
    </div>
    <div className="experience-card">
      <h3>Cloud Big Data Technologies / Bank of America - UI Developer (Oct 2017 - May 2019)</h3>
      <ul>
        <li>Developed interactive UI components using ReactJS, Angular, and Redux.</li>
        <li>Implemented WCAG 2.0 accessibility standards.</li>
        <li>Integrated backend services using Node.js and Java.</li>
      </ul>
    </div>
    <div className="experience-card">
      <h3>Patton Labs Inc - Software Developer (May 2017 - Oct 2017)</h3>
      <ul>
        <li>Developed secure, scalable software solutions using Java, Angular, TypeScript, React, and Redux.</li>
        <li>Optimized server-side processing through AWS Lambda, reducing processing time by 15%.</li>
        <li>Integrated third-party APIs and backend services, ensuring seamless data flow.</li>
      </ul>
    </div>
    <div className="experience-card">
      <h3>Nemo IT Solutions Inc / TransUnion - Software Developer (Jul 2016 - May 2017)</h3>
      <ul>
        <li>Implemented a serverless architecture using AWS Lambda, improving system scalability and reducing infrastructure costs.</li>
        <li>Developed and optimized ReactJS and Redux components for responsive UI designs.</li>
        <li>Integrated Bootstrap to improve application responsiveness across devices.</li>
      </ul>
    </div>
  </div>
);

const Contact = () => (
  <div className="container">
    <h2 className="section-title">Contact</h2>
    <p>Email: aravindan2591@gmail.com</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/aravindan-jayachandran-dev/" className="text-blue-500">Profile</a></p>
    <p>Phone: 669-777-8644</p>
    <p>Feel free to reach out for collaboration, networking, or career opportunities!</p>
  </div>
);

const CertificationsAwards = () => (
  <div className="container">
    <h2 className="section-title">Certifications & Awards</h2>
    <ul className="experience-card">
      <li>Best Final Year Project - Anna University (2013)</li>
      <li>Become a Node.js Developer - LinkedIn Learning</li>
    </ul>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/certifications-awards" className="nav-link">Certifications & Awards</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications-awards" element={<CertificationsAwards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
