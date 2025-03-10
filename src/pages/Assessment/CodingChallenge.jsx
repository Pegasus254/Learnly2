import React from 'react';
import styled from 'styled-components';

const ChallengeContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

const ChallengeText = styled.h2`
  font-size: 1.25rem;
  color: var(--bg-dark);
  margin-bottom: 1.5rem;
`

const CodeEditor = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  resize: vertical;
`

const TestCases = styled.div`
  margin-top: 1.5rem;

  h3 {
    font-size: 1rem;
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }
`

const TestCase = styled.div`
  padding: 1rem;
  background: #f1f5f9;
  border-radius: 6px;
  margin-bottom: 0.5rem;

  .label {
    font-weight: 500;
    color: #64748b;
    margin-right: 0.5rem;
  }

  .value {
    font-family: 'Courier New', Courier, monospace;
    color: var(--bg-dark);
  }
`

const CodingChallenge = ({ challenge, currentCode, onCodeChange }) => {
  return (
    <ChallengeContainer>
      <ChallengeText>{challenge.question}</ChallengeText>
      <CodeEditor
        value={currentCode || challenge.starterCode}
        onChange={(e) => onCodeChange(e.target.value)}
      />
      <TestCases>
        <h3>Test Cases</h3>
        {challenge.testCases.map((testCase, index) => (
          <TestCase key={index}>
            <div>
              <span className="label">Input:</span>
              <span className="value">{testCase.input}</span>
            </div>
            <div>
              <span className="label">Expected:</span>
              <span className="value">{testCase.expected}</span>
            </div>
          </TestCase>
        ))}
      </TestCases>
    </ChallengeContainer>
  );
};

export default CodingChallenge; 