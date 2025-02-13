import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <div className="container mx-auto text-center p-6">
    <h1 className="text-4xl font-bold">Aravindan Jayachandran</h1>
    <p className="text-lg mt-2">Full Stack Developer | JavaScript | React | React Native | Vue.js | Angular | TypeScript | Node.js | Python | Spring Boot</p>
    <p className="mt-4">Passionate about building high-performance, user-centric web applications with expertise in cloud integration and backend services.</p>
  </div>
);

const About = () => (
  <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold">About Me</h2>
    <p className="mt-2">As a Full Stack Developer, I specialize in building scalable, high-performance applications using JavaScript, React, Vue.js, Angular, and TypeScript.</p>
    <p>My expertise extends to backend development with Python, Spring MVC, Spring Boot, and Node.js, along with AWS cloud integration and automation.</p>
  </div>
);

const Experience = () => (
  <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold">Experience</h2>
    <ul className="mt-2">
      <li><strong>Excelon Solutions / Matson Logistics - Full Stack Developer</strong> (Dec 2022 - Present)</li>
      <li>Architected and maintained React, React Native, Redux, and TypeScript applications, ensuring seamless cross-platform functionality across web and mobile platforms.</li>
      <li>Containerized backend services using Docker, deploying them in AWS.</li>
      <li>Optimized AWS cloud infrastructure, implementing serverless technologies like AWS Lambda.</li>
      <li>Developed Java microservices using Spring Boot, integrating with MongoDB and PostgreSQL.</li>
      <li><strong>Core Software Technologies (Apple, Samsung, Vanguard) - Full Stack Developer</strong> (May 2019 - Nov 2022)</li>
      <li>Developed full-stack applications using Java, JavaScript, Angular, Vue.js, and React.</li>
      <li>Integrated Node.js with AWS Lambda for serverless computing.</li>
      <li>Implemented microservices using Docker and Kubernetes (AWS EKS).</li>
      <li>Led code refactoring efforts to improve maintainability and reduce technical debt.</li>
      <li><strong>Cloud Big Data Technologies / Bank of America - UI Developer</strong> (Oct 2017 - May 2019)</li>
      <li>Developed interactive UI components using ReactJS, React Native, Angular, and Redux, improving mobile and web user experiences.</li>
      <li>Implemented WCAG 2.0 accessibility standards.</li>
      <li>Integrated backend services using Node.js and Java.</li>
      <li><strong>Patton Labs Inc - Software Developer</strong> (May 2017 - Oct 2017)</li>
      <li>Developed secure, scalable software solutions using Java, Angular, TypeScript, React, and Redux.</li>
      <li>Optimized server-side processing through AWS Lambda, reducing processing time by 15%.</li>
      <li>Integrated third-party APIs and backend services, ensuring seamless data flow.</li>
      <li><strong>Nemo IT Solutions Inc / TransUnion - Software Developer</strong> (Jul 2016 - May 2017)</li>
      <li>Implemented a serverless architecture using AWS Lambda, improving system scalability and reducing infrastructure costs.</li>
      <li>Developed and optimized ReactJS and Redux components for responsive UI designs.</li>
      <li>Integrated Bootstrap to improve application responsiveness across devices.</li>
      <li><strong>NISQUARETECH - Web Developer</strong> (Apr 2013 - Feb 2014)</li>
      <li>Built mobile applications using AngularJS, JavaScript, and Java multi-threading.</li>
      <li>Developed web applications with JavaScript, HTML, CSS, and MySQL.</li>
      <li>Refactored JavaScript front-end and back-end code, improving performance and engagement.</li>
    </ul>
  </div>
);

const CertificationsAwards = () => (
  <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold">Certifications & Awards</h2>
    <ul className="mt-2">
      <li><strong>Best Final Year Project</strong> - Anna University (2013)</li>
      <li><strong>Become a Node.js Developer</strong> - LinkedIn Learning</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold">Contact</h2>
    <p>Email: aravindan2591@gmail.com</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/aravindan-jayachandran-dev/" className="text-blue-500">Profile</a></p>
    <p>Phone: 669-777-8644</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/experience" className="hover:underline">Experience</Link>
        <Link to="/certifications-awards" className="hover:underline">Certifications & Awards</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
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
