import React from 'react';
import styled from 'styled-components';

const TutorialsSection = styled.section`
  margin: 4rem 0;
`

const TutorialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const TutorialCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const TutorialImage = styled.div`
  height: 200px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`

const TutorialContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: var(--bg-dark);
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  a {
    color: var(--accent-teal);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`

const tutorials = [
  {
    id: 1,
    title: 'Getting Started with Python',
    description: 'Learn Python basics for data science with this comprehensive tutorial.',
    imageUrl: '/images/python-tutorial.jpg',
    link: 'https://www.youtube.com/watch?v=WGJJIrtnfpk'
  },
  {
    id: 2,
    title: 'Data Analysis with Pandas',
    description: 'Master data manipulation and analysis using Pandas library.',
    imageUrl: '/images/pandas-tutorial.jpg',
    link: 'https://www.youtube.com/watch?v=vmEHCJofslg'
  },
  {
    id: 3,
    title: 'Machine Learning Basics',
    description: 'Introduction to machine learning concepts and algorithms.',
    imageUrl: '/images/ml-tutorial.jpg',
    link: 'https://www.youtube.com/watch?v=UA0XGqhE7Bg'
  }
];

const Tutorials = () => {
  return (
    <TutorialsSection>
      <h2>Video Tutorials</h2>
      <TutorialGrid>
        {tutorials.map(tutorial => (
          <TutorialCard key={tutorial.id}>
            <TutorialImage>
              <img src={tutorial.imageUrl} alt={tutorial.title} />
            </TutorialImage>
            <TutorialContent>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                Watch Tutorial →
              </a>
            </TutorialContent>
          </TutorialCard>
        ))}
      </TutorialGrid>
    </TutorialsSection>
  );
};

export default Tutorials; 