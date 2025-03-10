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

const rModules = [
  {
    title: "Module 1: R Fundamentals",
    topics: [
      { name: "Introduction to R and RStudio", link: "module1#introduction" },
      { name: "Data Types and Structures", link: "module1#data-types" },
      { name: "Working with Vectors and Matrices", link: "module1#data-structures" },
      { name: "Data Frames and Lists", link: "module1#basic-operations" }
    ]
  },
  {
    title: "Module 2: Data Manipulation",
    topics: [
      { name: "Data Import and Export" },
      { name: "Data Cleaning with dplyr" },
      { name: "Data Reshaping with tidyr" },
      { name: "String Manipulation with stringr" }
    ]
  },
  {
    title: "Module 3: Data Visualization",
    topics: [
      { name: "ggplot2 Fundamentals" },
      { name: "Advanced Plotting Techniques" },
      { name: "Interactive Visualizations" },
      { name: "Creating Publication-Quality Graphics" }
    ]
  },
  {
    title: "Module 4: Statistical Analysis",
    topics: [
      { name: "Descriptive Statistics" },
      { name: "Statistical Testing" },
      { name: "Regression Analysis" },
      { name: "Time Series Analysis" }
    ]
  },
  {
    title: "Module 5: Advanced R Programming",
    topics: [
      { name: "Writing Efficient R Code" },
      { name: "Creating R Packages" },
      { name: "R Markdown Reports" },
      { name: "Integration with Other Tools" }
    ]
  }
];

const RProgramming = () => {
  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: 'R Programming' }
  ];

  return (
    <CourseContainer>
      <Breadcrumb items={breadcrumbItems} />
      <CourseHeader>
        <h1>R Programming for Data Science</h1>
        <p className="course-description">
          Master R programming language for statistical computing and data analysis. 
          Learn to create powerful visualizations and perform complex statistical 
          analyses using R's extensive ecosystem.
        </p>
      </CourseHeader>

      <section className="course-modules">
        <h2>Course Modules</h2>
        {rModules.map((module, index) => (
          <CourseModule
            key={index}
            title={module.title}
            topics={module.topics}
            basePath="/courses/r-programming"
          />
        ))}
      </section>
    </CourseContainer>
  );
};

export default RProgramming; 