import {
  SectionCard,
  SectionHeader,
  SectionTitle
} from '../../styles/assessment.styles';

const AssessmentSection = ({ title, completed, total, children }) => {
  return (
    <SectionCard>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <span>{completed}/{total} Completed</span>
      </SectionHeader>
      <div className="question-list">
        {children}
      </div>
    </SectionCard>
  );
};

export default AssessmentSection; 