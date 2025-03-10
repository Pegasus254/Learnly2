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

const statisticsModules = [
  {
    title: "Module 1: Introduction to Statistics",
    topics: [
      { name: "What is Statistics?", link: "module1#introduction" },
      { name: "Data Types and Measurement Scales", link: "module1#data-types" },
      { name: "Descriptive Statistics", link: "module1#descriptive" },
      { name: "Data Visualization", link: "module1#visualization" }
    ]
  },
  {
    title: "Module 2: Probability",
    topics: [
      { name: "Basic Probability Concepts" },
      { name: "Probability Distributions" },
      { name: "Random Variables" },
      { name: "Expected Values and Variance" }
    ]
  },
  {
    title: "Module 3: Statistical Inference",
    topics: [
      { name: "Sampling Distributions" },
      { name: "Confidence Intervals" },
      { name: "Hypothesis Testing" },
      { name: "P-values and Significance" }
    ]
  },
  {
    title: "Module 4: Regression Analysis",
    topics: [
      { name: "Simple Linear Regression" },
      { name: "Multiple Regression" },
      { name: "Model Diagnostics" },
      { name: "Prediction and Inference" }
    ]
  }
];

const Statistics = () => {
  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: 'Statistics' }
  ];

  return (
    <CourseContainer>
      <Breadcrumb items={breadcrumbItems} />
      <CourseHeader>
        <h1>Probability and Statistics</h1>
        <p className="course-description">
          Master the fundamental concepts of probability and statistics essential 
          for data science. Learn how to analyze data, make inferences, and draw 
          meaningful conclusions.
        </p>
      </CourseHeader>

      <section className="course-modules">
        <h2>Course Modules</h2>
        {statisticsModules.map((module, index) => (
          <CourseModule
            key={index}
            title={module.title}
            topics={module.topics}
            basePath="/courses/statistics"
          />
        ))}
      </section>
    </CourseContainer>
  );
};

export default Statistics; 