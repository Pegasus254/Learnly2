import { useState } from 'react';
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
  
  h1 {
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }

  .course-description {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const pythonModules = [
  {
    title: "Module 1: Python Basics",
    topics: [
      { name: "Introduction to Python", link: "module1#introduction" },
      { name: "Variables and Data Types", link: "module1#variables" },
      { name: "Control Flow (if statements, loops)", link: "module1#control-flow" },
      { name: "Functions and Modules" },
      { name: "Basic Input/Output" }
    ]
  },
  {
    title: "Module 2: Data Structures",
    topics: [
      { name: "Lists and Tuples" },
      { name: "Dictionaries and Sets" },
      { name: "List Comprehensions" },
      { name: "Working with Files" }
    ]
  }
  // Add other modules...
];

const Python = () => {
  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: 'Python Programming' }
  ];

  return (
    <CourseContainer>
      <Breadcrumb items={breadcrumbItems} />
      <CourseHeader>
        <h1>Python Programming for Data Science</h1>
        <p className="course-description">
          Master Python programming with a focus on data science applications. 
          Learn from basics to advanced concepts, including popular libraries 
          and real-world applications.
        </p>
      </CourseHeader>

      <section className="course-modules">
        <h2>Course Modules</h2>
        {pythonModules.map((module, index) => (
          <CourseModule
            key={index}
            title={module.title}
            topics={module.topics}
            basePath="/courses/python"
          />
        ))}
      </section>
    </CourseContainer>
  );
};

export default Python; 