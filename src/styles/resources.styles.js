import styled from 'styled-components';

export const ResourcesContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeroSection = styled.section`
  margin-bottom: 3rem;

  h1 {
    color: var(--bg-dark);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: var(--bg-dark);
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 1rem;
    max-width: 800px;
  }
`;

export const ResourceSection = styled.section`
  margin-bottom: 3rem;

  h2 {
    color: var(--bg-dark);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--accent-teal);
    padding-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    color: var(--accent-teal);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-blue);
    }
  }
`;

export const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-teal);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-blue);
    transform: translateX(5px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`; 