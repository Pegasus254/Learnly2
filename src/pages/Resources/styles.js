import styled from 'styled-components';

export const Content = styled.main`
  background-color: var(--bg-light);
  color: var(--text-dark);
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Hero = styled.section`
  background-color: var(--bg-dark);
  padding: 4rem 2rem;
  margin-bottom: 3rem;
  border-radius: 10px;
  box-shadow: var(--shadow);

  h1 {
    font-size: 2.8rem;
    color: var(--accent-teal);
    margin-bottom: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  h2 {
    font-size: 2rem;
    color: white;
    margin: 2.5rem 0 1rem;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    color: var(--text-light);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    max-width: 900px;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    
    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const Section = styled.section`
  background: white;
  padding: 2.5rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: 2rem;
    color: var(--bg-dark);
    margin-bottom: 1.5rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--border-color);
  }

  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;
      font-size: 1.1rem;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: "•";
        color: var(--accent-teal);
        font-size: 1.5rem;
        line-height: 1;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;

    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const TutorialLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--accent-teal);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #00a896;
    transform: translateX(4px);
  }

  &::after {
    content: "→";
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

