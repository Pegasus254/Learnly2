import { useState } from 'react';
import {
  QuestionCard,
  QuestionHeader,
  QuestionType,
  QuestionStatus,
  CodingEditor,
  TestCases,
  TestCase,
  ActionButtons,
  Button
} from '../../styles/assessment.styles';

const CodingChallenge = ({ challenge }) => {
  const [code, setCode] = useState(challenge.initialCode);

  return (
    <QuestionCard>
      <QuestionHeader>
        <QuestionType>{challenge.type}</QuestionType>
        <QuestionStatus status={challenge.status}>
          {challenge.status}
        </QuestionStatus>
      </QuestionHeader>
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      
      <CodingEditor>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={5}
        />
      </CodingEditor>

      {challenge.testCases && (
        <TestCases>
          {challenge.testCases.map((test, index) => (
            <TestCase key={index} status={test.status}>
              <span>{test.status === 'pass' ? '✓' : '×'}</span>
              <span>{test.description}</span>
            </TestCase>
          ))}
        </TestCases>
      )}

      <ActionButtons>
        <Button primary>Submit Solution</Button>
        <Button>View Hints</Button>
      </ActionButtons>
    </QuestionCard>
  );
};

export default CodingChallenge; 