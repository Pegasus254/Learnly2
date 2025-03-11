import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import courseData from '../../pages/Courses/CourseModules';

const ContentSection = styled.section`
  padding: 2rem;
  background: white;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TopicSection = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }

  h2 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
  }

  .duration {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .overview {
    margin-bottom: 2rem;
  }

  .objectives {
    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;

        &:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--accent-teal);
        }
      }
    }
  }

  .practice {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }
`;

const ModuleContent = () => {
  const { courseId, moduleId } = useParams();
  
  // Find the course and module data
  const course = courseData[courseId];
  if (!course) return <div>Course not found</div>;
  
  const moduleNumber = parseInt(moduleId.replace('module', ''));
  const module = course.modules[moduleNumber - 1];
  if (!module) return <div>Module not found</div>;

  return (
    <ContentSection>
      <ContentWrapper>
        <h1>{module.title}</h1>
        {module.topics.map((topic, index) => (
          <TopicSection key={index}>
            <h2>{topic.title}</h2>
            <div className="duration">Duration: {topic.duration}</div>
            
            <div className="overview">
              <h3>Overview</h3>
              <p>{topic.content.overview}</p>
            </div>
            
            <div className="objectives">
              <h3>Learning Objectives</h3>
              <ul>
                {topic.content.objectives.map((objective, i) => (
                  <li key={i}>{objective}</li>
                ))}
              </ul>
            </div>
            
            <div className="practice">
              <h3>Practice Exercise</h3>
              <p>{topic.content.practice}</p>
            </div>
          </TopicSection>
        ))}
      </ContentWrapper>
    </ContentSection>
  );
};

export default ModuleContent; 