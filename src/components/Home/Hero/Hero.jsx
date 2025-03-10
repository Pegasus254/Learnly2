import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.h2`
  color: var(--accent-teal);
  font-size: 1.8rem;
  margin-bottom: 1rem;
`

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--text-light);
  max-width: 600px;
`

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const CTAButton = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &.primary-cta {
    background: var(--accent-teal);
    color: white;
    &:hover {
      background: #00a896;
    }
  }

  &.secondary-cta {
    border: 1px solid var(--accent-teal);
    color: var(--accent-teal);
    &:hover {
      background: rgba(0, 191, 165, 0.1);
    }
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Master Data Science</HeroTitle>
        <HeroSubtitle>Accelerating your Learning Journey</HeroSubtitle>
        <HeroDescription>
          Empowering young learners with the skills, resources, and community to excel in data science and shape the future.
        </HeroDescription>
        <CTAButtons>
          <CTAButton to="/register" className="primary-cta">Get Started</CTAButton>
          <CTAButton to="/about" className="secondary-cta">Learn More</CTAButton>
        </CTAButtons>
      </HeroContent>
      <div className="floating-illustrations">
        {/* Add floating UI elements here */}
      </div>
    </HeroSection>
  )
}

export default Hero 