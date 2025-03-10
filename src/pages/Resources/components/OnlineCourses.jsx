import React from 'react';
import styled from 'styled-components';

const CoursesSection = styled.section`
  margin: 4rem 0;
`

const CoursesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const CourseCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;

  h3 {
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }

  .platform {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .course-link {
    display: inline-block;
    color: var(--accent-teal);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`

const courses = [
  {
    id: 1,
    title: 'Data Science Specialization',
    platform: 'Coursera',
    link: 'https://www.coursera.org/specializations/data-science'
  },
  {
    id: 2,
    title: 'Machine Learning A-Z',
    platform: 'Udemy',
    link: 'https://www.udemy.com/course/machinelearning/'
  },
  {
    id: 3,
    title: 'Python for Data Science',
    platform: 'edX',
    link: 'https://www.edx.org/course/python-for-data-science'
  }
];

const OnlineCourses = () => {
  return (
    <CoursesSection>
      <h2>Online Courses</h2>
      <CoursesList>
        {courses.map(course => (
          <CourseCard key={course.id}>
            <h3>{course.title}</h3>
            <div className="platform">{course.platform}</div>
            <a href={course.link} className="course-link" target="_blank" rel="noopener noreferrer">
              Learn More →
            </a>
          </CourseCard>
        ))}
      </CoursesList>
    </CoursesSection>
  );
};

export default OnlineCourses;