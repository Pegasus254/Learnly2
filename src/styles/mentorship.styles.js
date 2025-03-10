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
  }

  p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
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

// ... Add other styled components 