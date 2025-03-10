import { useEffect, useState } from 'react';
import {
  AssessmentContainer,
  AssessmentSections
} from '../styles/assessment.styles';
import AssessmentProgress from '../components/Assessment/AssessmentProgress';
import AssessmentSection from '../components/Assessment/AssessmentSection';
import CodingChallenge from '../components/Assessment/CodingChallenge';
import TheoryQuestion from '../components/Assessment/TheoryQuestion';

const Assessment = () => {
  const [assessmentData, setAssessmentData] = useState({
    progress: 65,
    completedQuestions: 13,
    totalQuestions: 20,
    points: 85,
    codingChallenges: [
      {
        type: 'Python Function',
        status: 'completed',
        title: 'Temperature Converter',
        description: 'Create a function that converts temperature from Celsius to Fahrenheit.',
        initialCode: 'def celsius_to_fahrenheit(celsius):\n    # Your code here\n    pass',
        testCases: [
          { status: 'pass', description: 'Test Case 1: 0°C = 32°F' },
          { status: 'pass', description: 'Test Case 2: 100°C = 212°F' }
        ]
      },
      // Add more coding challenges
    ],
    theoryQuestions: [
      {
        type: 'Multiple Choice',
        status: 'completed',
        title: 'Python Data Types',
        description: 'Which of the following is not a built-in data type in Python?'
      },
      // Add more theory questions
    ]
  });

  return (
    <AssessmentContainer>
      <AssessmentProgress 
        progress={assessmentData.progress}
        completedQuestions={assessmentData.completedQuestions}
        totalQuestions={assessmentData.totalQuestions}
        points={assessmentData.points}
      />

      <AssessmentSections>
        <AssessmentSection 
          title="Coding Challenges"
          completed={8}
          total={12}
        >
          {assessmentData.codingChallenges.map((challenge, index) => (
            <CodingChallenge key={index} challenge={challenge} />
          ))}
        </AssessmentSection>

        <AssessmentSection
          title="Theory Questions"
          completed={5}
          total={8}
        >
          {assessmentData.theoryQuestions.map((question, index) => (
            <TheoryQuestion key={index} question={question} />
          ))}
        </AssessmentSection>
      </AssessmentSections>
    </AssessmentContainer>
  );
};

export default Assessment; 