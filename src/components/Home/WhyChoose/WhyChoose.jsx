import React from 'react'
import styled from 'styled-components'

const WhyChooseSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--bg-dark);

  span {
    color: var(--accent-teal);
  }
`

const Description = styled.p`
  color: #333;
  max-width: 600px;
  margin-bottom: 3rem;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 800px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-teal);
`

const FeatureContent = styled.div`
  h3 {
    color: var(--bg-dark);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`

const WhyChoose = () => {
  const features = [
    {
      icon: "📚",
      title: "Structured Learning Path",
      description: "From beginner to advanced, our carefully sequenced learning guide gets you through step by step to your goals."
    },
    {
      icon: "🔨",
      title: "Hands-on Assessments",
      description: "Apply your knowledge with real-world problems with projects designed to build your portfolio and practical skills."
    },
    {
      icon: "👥",
      title: "Supportive Community",
      description: "Connect with mentors and fellow learners from Kenya who share your passion for data science and technology."
    }
  ]

  return (
    <WhyChooseSection>
      <SectionTitle>Why choose <span>Learnly</span>?</SectionTitle>
      <Description>
        Our platform is designed specifically for young learners in Kenya, making data science accessible, engaging, and relevant to local contexts.
      </Description>
      
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureContent>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureContent>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </WhyChooseSection>
  )
}

export default WhyChoose