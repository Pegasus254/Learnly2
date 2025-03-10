import {
  QuestionCard,
  QuestionHeader,
  QuestionType,
  QuestionStatus,
  ActionButtons,
  Button
} from '../../styles/assessment.styles';

const TheoryQuestion = ({ question }) => {
  return (
    <QuestionCard>
      <QuestionHeader>
        <QuestionType>{question.type}</QuestionType>
        <QuestionStatus status={question.status}>
          {question.status}
        </QuestionStatus>
      </QuestionHeader>
      <h3>{question.title}</h3>
      <p>{question.description}</p>
      
      <ActionButtons>
        {question.status === 'completed' ? (
          <Button>Review Answer</Button>
        ) : (
          <Button primary>Answer Question</Button>
        )}
      </ActionButtons>
    </QuestionCard>
  );
};

export default TheoryQuestion;