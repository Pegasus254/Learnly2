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

const sqlModules = [
  {
    title: "Module 1: SQL Fundamentals",
    topics: [
      { name: "Introduction to Databases", link: "module1#introduction" },
      { name: "Basic SQL Queries (SELECT, FROM, WHERE)", link: "module1#basic-sql" },
      { name: "Filtering and Sorting Data", link: "module1#filtering" },
      { name: "Aggregate Functions" },
      { name: "GROUP BY and HAVING Clauses" }
    ]
  },
  {
    title: "Module 2: Joins and Relationships",
    topics: [
      { name: "Understanding Table Relationships" },
      { name: "INNER and OUTER Joins" },
      { name: "CROSS and SELF Joins" },
      { name: "Subqueries and Nested Queries" }
    ]
  },
  {
    title: "Module 3: Database Design",
    topics: [
      { name: "Database Normalization" },
      { name: "Entity-Relationship Diagrams" },
      { name: "Creating and Modifying Tables" },
      { name: "Primary and Foreign Keys" }
    ]
  },
  {
    title: "Module 4: Advanced SQL",
    topics: [
      { name: "Window Functions" },
      { name: "Common Table Expressions (CTEs)" },
      { name: "Views and Stored Procedures" },
      { name: "Performance Optimization" }
    ]
  },
  {
    title: "Module 5: Data Analysis with SQL",
    topics: [
      { name: "Data Cleaning Techniques" },
      { name: "Statistical Analysis" },
      { name: "Time Series Analysis" },
      { name: "Creating Reports" }
    ]
  }
];

const SQL = () => {
  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: 'SQL for Data Science' }
  ];

  return (
    <CourseContainer>
      <Breadcrumb items={breadcrumbItems} />
      <CourseHeader>
        <h1>SQL for Data Science</h1>
        <p className="course-description">
          Learn SQL from the ground up with a focus on data analysis and database management. 
          Master essential SQL concepts and advanced techniques for working with large datasets.
        </p>
      </CourseHeader>

      <section className="course-modules">
        <h2>Course Modules</h2>
        {sqlModules.map((module, index) => (
          <CourseModule
            key={index}
            title={module.title}
            topics={module.topics}
            basePath="/courses/sql"
          />
        ))}
      </section>
    </CourseContainer>
  );
};

export default SQL; 