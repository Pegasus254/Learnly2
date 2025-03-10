import { useState } from 'react';
import styled from 'styled-components';

const ForumSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--bg-dark);
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--accent-teal);
    margin-top: 0.5rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  margin-bottom: 2rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-teal);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const features = [
  {
    icon: 'beginner-icon.svg',
    title: 'Beginner questions',
    description: 'Get help with fundamentals'
  },
  {
    icon: 'collaboration-icon.svg',
    title: 'Project collaboration',
    description: 'Work together on projects'
  },
  {
    icon: 'resource-icon.svg',
    title: 'Resource sharing',
    description: 'Share helpful materials'
  },
  {
    icon: 'career-icon.svg',
    title: 'Career advice',
    description: 'Get industry insights'
  }
];

const CommunityForum = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ForumSection>
      <SectionTitle>Community Forum</SectionTitle>
      <SearchInput
        type="text"
        placeholder="Search a topic of your choice..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/${feature.icon}`}
              alt={feature.title}
              className="feature-icon"
            />
            <h3 className="feature-title">{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </ForumSection>
  );
};

export default CommunityForum; 