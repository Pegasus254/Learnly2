import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CourseSection = styled.section`
  padding: 4rem 2rem;
  background: white;
  min-height: 100vh;
`

const CourseHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    max-width: 800px;
    margin: 0 auto;
  }
`

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const CourseCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`

const CourseImage = styled.div`
  height: 160px;
  background: var(--bg-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
`

const CourseInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: var(--bg-dark);
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    min-height: 2.7rem;
  }
`

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`

const StartLearningButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.8rem;
  background: var(--accent-teal);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #00a896;
    transform: translateY(-2px);
  }
`

const CourseContent = () => {
  const courses = [
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Learn the fundamentals of Machine Learning and its applications in data science.',
      modules: 12,
      duration: '24 weeks',
      icon: '🤖'
    },
    {
      id: 'python',
      title: 'Python Programming',
      description: 'Master Python programming language with focus on data science applications.',
      modules: 10,
      duration: '20 weeks',
      icon: '🐍'
    },
    {
      id: 'r-programming',
      title: 'R Programming',
      description: 'Learn R programming for statistical computing and graphics.',
      modules: 8,
      duration: '16 weeks',
      icon: '📊'
    },
    {
      id: 'sql',
      title: 'SQL',
      description: 'Master database management and queries with SQL.',
      modules: 6,
      duration: '12 weeks',
      icon: '💾'
    },
    {
      id: 'statistics',
      title: 'Statistics',
      description: 'Understanding statistical concepts and their application in data science.',
      modules: 8,
      duration: '16 weeks',
      icon: '📈'
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Learn web design principles and create responsive websites.',
      modules: 10,
      duration: '20 weeks',
      icon: '🎨'
    }
  ]

  return (
    <CourseSection>
      <CourseHeader>
        <h1>Course Content</h1>
        <p>Choose from our comprehensive selection of courses designed to help you master data science and related technologies.</p>
      </CourseHeader>

      <CourseGrid>
        {courses.map(course => (
          <CourseCard key={course.id}>
            <CourseImage>
              {course.icon}
            </CourseImage>
            <CourseInfo>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <CourseMeta>
                <span>{course.modules} Modules</span>
                <span>{course.duration}</span>
              </CourseMeta>
              <StartLearningButton to={`/courses/${course.id}`}>
                Start Learning
              </StartLearningButton>
            </CourseInfo>
          </CourseCard>
        ))}
      </CourseGrid>
    </CourseSection>
  )
}

export default CourseContent 