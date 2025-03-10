import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: var(--bg-light);
  padding: 4rem 2rem;
  text-align: center;
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    color: var(--bg-dark);
    margin-bottom: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Data Science Learning Resources</h1>
        <p>
          Explore our curated collection of resources to enhance your data science journey.
          From tutorials and documentation to tools and online courses, everything you need
          to master data science is right here.
        </p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 