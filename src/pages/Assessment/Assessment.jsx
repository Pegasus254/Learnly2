import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AssessmentProgress from './AssessmentProgress';
import QuizQuestion from './QuizQuestion';
import CodingChallenge from './CodingChallenge';

const AssessmentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: white;
`

const AssessmentHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2rem;
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`

const QuestionsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Assessment = () => {
  const { courseId, moduleId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  // Sample assessment data - this would come from your API/database
  const assessmentData = {
    'python': {
      'module1': {
        title: 'Python Basics Assessment',
        description: 'Test your knowledge of Python fundamentals',
        questions: [
          {
            id: 1,
            type: 'quiz',
            question: 'What is the output of print(type([1, 2, 3]))?',
            options: [
              '<class \'list\'>',
              '<class \'tuple\'>',
              '<class \'set\'>',
              '<class \'dict\'>'
            ],
            correctAnswer: 0,
            points: 10
          },
          {
            id: 2,
            type: 'coding',
            question: 'Write a function that returns the sum of all numbers in a list.',
            starterCode: 'def sum_list(numbers):\n    # Your code here\n    pass',
            testCases: [
              {
                input: '[1, 2, 3, 4, 5]',
                expected: '15'
              },
              {
                input: '[-1, 0, 1]',
                expected: '0'
              }
            ],
            points: 20
          }
        ]
      }
    },
    'machine-learning': {
      'module1': {
        title: 'Introduction to ML Assessment',
        description: 'Test your understanding of ML fundamentals',
        questions: [
          {
            id: 1,
            type: 'quiz',
            question: 'Which of the following is NOT a type of machine learning?',
            options: [
              'Supervised Learning',
              'Unsupervised Learning',
              'Reinforcement Learning',
              'Automatic Learning'
            ],
            correctAnswer: 3,
            points: 10
          },
          {
            id: 2,
            type: 'coding',
            question: 'Implement a function to calculate the mean squared error.',
            starterCode: 'def mse(y_true, y_pred):\n    # Your code here\n    pass',
            testCases: [
              {
                input: '[1, 2, 3], [1.1, 1.9, 3.1]',
                expected: '0.0167'
              }
            ],
            points: 20
          }
        ]
      }
    }
  };

  const currentAssessment = assessmentData[courseId]?.[moduleId];
  const totalQuestions = currentAssessment?.questions.length || 0;
  const maxScore = currentAssessment?.questions.reduce((acc, q) => acc + q.points, 0) || 0;

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  if (!currentAssessment) {
    return <div>Assessment not found</div>;
  }

  const currentQ = currentAssessment.questions[currentQuestion];

  return (
    <AssessmentContainer>
      <AssessmentHeader>
        <h1>{currentAssessment.title}</h1>
        <p>{currentAssessment.description}</p>
      </AssessmentHeader>

      <AssessmentProgress
        current={currentQuestion + 1}
        total={totalQuestions}
        score={score}
        maxScore={maxScore}
      />

      <QuestionsContainer>
        {currentQ.type === 'quiz' ? (
          <QuizQuestion
            question={currentQ}
            selectedAnswer={answers[currentQ.id]}
            onAnswer={(answer) => handleAnswer(currentQ.id, answer)}
          />
        ) : (
          <CodingChallenge
            challenge={currentQ}
            currentCode={answers[currentQ.id]}
            onCodeChange={(code) => handleAnswer(currentQ.id, code)}
          />
        )}

        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          showPrevious={currentQuestion > 0}
          showNext={currentQuestion < totalQuestions - 1}
        />
      </QuestionsContainer>
    </AssessmentContainer>
  );
};

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &.previous {
      background: #f1f5f9;
      color: #64748b;

      &:hover {
        background: #e2e8f0;
      }
    }

    &.next {
      background: var(--accent-teal);
      color: white;

      &:hover {
        background: #0d9488;
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export default Assessment; 