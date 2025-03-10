import {
  AssessmentHeader,
  AssessmentTitle,
  ProgressBarContainer,
  ProgressBar,
  ProgressStats,
  StatItem
} from '../../styles/assessment.styles';

const AssessmentProgress = ({ progress, completedQuestions, totalQuestions, points }) => {
  return (
    <AssessmentHeader>
      <AssessmentTitle>Module 1: Python Fundamentals Assessment</AssessmentTitle>
      <p>Track your progress and complete both coding and theory assessments</p>
      
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
      
      <ProgressStats>
        <StatItem>
          <span>📊</span>
          <span>{progress}% Complete</span>
        </StatItem>
        <StatItem>
          <span>✅</span>
          <span>{completedQuestions}/{totalQuestions} Questions Completed</span>
        </StatItem>
        <StatItem>
          <span>⭐</span>
          <span>{points} Points Earned</span>
        </StatItem>
      </ProgressStats>
    </AssessmentHeader>
  );
};

export default AssessmentProgress; 