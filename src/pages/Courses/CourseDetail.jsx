import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const CourseDetailSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const CourseHeader = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }
`

const CourseDetail = () => {
  const { courseId } = useParams()

  return (
    <CourseDetailSection>
      <CourseHeader>
        <h1>Course Details</h1>
        <p>Course ID: {courseId}</p>
      </CourseHeader>
    </CourseDetailSection>
  )
}

export default CourseDetail 