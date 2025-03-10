import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 10px;
`

const ProgressBar = styled.div`
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  margin: 1rem 0;
  overflow: hidden;

  .progress {
    height: 100%;
    background: var(--accent-teal);
    width: ${props => (props.progress * 100)}%;
    transition: width 0.3s ease;
  }
`

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  color: #64748b;
  font-size: 0.9rem;

  .score {
    color: var(--accent-teal);
    font-weight: 500;
  }
`

const AssessmentProgress = ({ current, total, score, maxScore }) => {
  return (
    <ProgressContainer>
      <Stats>
        <span>Question {current} of {total}</span>
        <span>Score: <span className="score">{score}/{maxScore}</span></span>
      </Stats>
      <ProgressBar progress={current / total}>
        <div className="progress" />
      </ProgressBar>
    </ProgressContainer>
  );
};

export default AssessmentProgress; 