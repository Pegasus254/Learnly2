import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ContentSection = styled.section`
  padding: 4rem 2rem;
  background: white;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ModuleContent = () => {
  const { courseId, moduleId } = useParams()

  return (
    <ContentSection>
      <ContentWrapper>
        <h1>Module Content</h1>
        <p>Course: {courseId}</p>
        <p>Module: {moduleId}</p>
        {/* Add actual module content here */}
      </ContentWrapper>
    </ContentSection>
  )
}

export default ModuleContent