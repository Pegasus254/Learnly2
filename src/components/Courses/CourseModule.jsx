import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ModuleWrapper = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 1rem;

    li {
      margin-bottom: 0.5rem;
      
      a {
        color: var(--primary-blue);
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const CourseModule = ({ title, topics, basePath }) => {
  return (
    <ModuleWrapper>
      <h3>{title}</h3>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            {topic.link ? (
              <Link to={`${basePath}/${topic.link}`}>{topic.name}</Link>
            ) : (
              topic.name
            )}
          </li>
        ))}
      </ul>
    </ModuleWrapper>
  );
};

export default CourseModule; 