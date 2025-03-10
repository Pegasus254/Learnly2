import styled from 'styled-components';

export const AssessmentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const AssessmentHeader = styled.div`
  background: var(--bg-dark);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

export const AssessmentTitle = styled.h1`
  font-size: 2rem;
  color: var(--accent-teal);
  margin-bottom: 1rem;
`;

export const ProgressBarContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  height: 10px;
  width: 100%;
  margin: 1rem 0;
`;

export const ProgressBar = styled.div`
  background: var(--accent-teal);
  height: 100%;
  border-radius: 20px;
  transition: width 0.3s ease;
  width: ${props => props.progress}%;
`;

export const ProgressStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AssessmentSections = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// ... Add other styled components 