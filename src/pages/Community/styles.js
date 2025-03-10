import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeroSection = styled.section`
  background: var(--bg-dark);
  color: white;
  padding: 3rem 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem 1.5rem;
  }
`;

export const HeroContent = styled.div`
  h1 {
    font-size: 2.5rem;
    color: var(--accent-teal);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

export const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ComingSoonBadge = styled.span`
  display: inline-block;
  background: rgba(0, 191, 165, 0.1);
  color: var(--accent-teal);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: var(--accent-teal);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #00a896;
  }
`;

export const SectionTitle = styled.h2`
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

  @media (max-width: 768px) {
    font-size: 1.75rem;
    
    &::after {
      margin: 0.5rem auto 0;
    }
  }
`;

export const ForumSearch = styled.input`
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

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const FeatureCard = styled.div`
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

export const MentorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MentorCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MentorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
  border: 3px solid var(--accent-teal);
`;

export const MentorContact = styled.div`
  font-size: 0.9rem;
  color: #666;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);

  p {
    margin: 0.25rem 0;
  }
`;
