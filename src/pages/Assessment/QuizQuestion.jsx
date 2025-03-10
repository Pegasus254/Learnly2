import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

const QuestionText = styled.h2`
  font-size: 1.25rem;
  color: var(--bg-dark);
  margin-bottom: 1.5rem;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Option = styled.button`
  padding: 1rem;
  border: 2px solid ${props => props.selected ? 'var(--accent-teal)' : '#e2e8f0'};
  border-radius: 8px;
  background: ${props => props.selected ? '#f0fdfa' : 'white'};
  color: var(--bg-dark);
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f8fafc;
    border-color: ${props => props.selected ? 'var(--accent-teal)' : '#cbd5e1'};
  }
`

const QuizQuestion = ({ question, selectedAnswer, onAnswer }) => {
  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      <OptionsContainer>
        {question.options.map((option, index) => (
          <Option
            key={index}
            selected={selectedAnswer === index}
            onClick={() => onAnswer(index)}
          >
            {option}
          </Option>
        ))}
      </OptionsContainer>
    </QuestionContainer>
  );
};

export default QuizQuestion; 