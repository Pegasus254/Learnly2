import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Home/Hero'
import WhyChoose from '../components/Home/WhyChoose';
import LearningExperience from '../components/Home/LearningExperience';

const HeroSection = styled.section`
  background: var(--bg-dark);
  color: white;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <LearningExperience />
    </main>
  );
};

export default Home; 