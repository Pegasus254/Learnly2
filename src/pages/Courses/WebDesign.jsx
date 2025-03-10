import styled from 'styled-components';
import CourseModule from '../../components/Courses/CourseModule';
import Breadcrumb from '../../components/Common/Breadcrumb';

const CourseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CourseHeader = styled.section`
  margin-bottom: 3rem;
`;

const webModules = [
  {
    title: "Module 1: Web Design Fundamentals",
    topics: [
      { name: "Web Design Fundamentals", link: "module1#fundamentals" },
      { name: "HTML Basics", link: "module1#html" },
      { name: "CSS Fundamentals", link: "module1#css" },
      { name: "Responsive Design", link: "module1#responsive" }
    ]
  },
  {
    title: "Module 2: JavaScript Essentials",
    topics: [
      { name: "JavaScript Fundamentals" },
      { name: "DOM Manipulation" },
      { name: "Event Handling" },
      { name: "AJAX and Fetch API" },
      { name: "ES6+ Features" }
    ]
  },
  {
    title: "Module 3: Frontend Frameworks",
    topics: [
      { name: "Introduction to React.js" },
      { name: "Component-Based Architecture" },
      { name: "State Management" },
      { name: "Routing and Navigation" },
      { name: "API Integration" }
    ]
  },
  {
    title: "Module 4: Data Visualization",
    topics: [
      { name: "D3.js Fundamentals" },
      { name: "Interactive Charts and Graphs" },
      { name: "SVG Graphics" },
      { name: "Responsive Visualizations" },
      { name: "Real-time Data Updates" }
    ]
  },
  {
    title: "Module 5: Advanced Web Development",
    topics: [
      { name: "Web Performance Optimization" },
      { name: "Progressive Web Apps" },
      { name: "Version Control with Git" },
      { name: "Deployment and Hosting" },
      { name: "Web Security Basics" }
    ]
  }
];

const WebDesign = () => {
  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: 'Web Design' }
  ];

  return (
    <CourseContainer>
      <Breadcrumb items={breadcrumbItems} />
      <CourseHeader>
        <h1>Web Design for Data Science</h1>
        <p className="course-description">
          Learn modern web development techniques to create interactive data 
          visualizations and web applications. Master the skills needed to build 
          beautiful and functional data-driven websites.
        </p>
      </CourseHeader>

      <section className="course-modules">
        <h2>Course Modules</h2>
        {webModules.map((module, index) => (
          <CourseModule
            key={index}
            title={module.title}
            topics={module.topics}
            basePath="/courses/web-design"
          />
        ))}
      </section>
    </CourseContainer>
  );
};

export default WebDesign; 