import React from 'react'
import styled from 'styled-components'

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto 6rem;
  padding: 0 2rem;
  color: white;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-bottom: 4rem;
  }
`

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  
  &:hover .stat-number {
    transform: scale(1.1);
  }
`

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--accent-teal);
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
`

const StatLabel = styled.div`
  color: var(--text-light);
  font-size: 1rem;
`

const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "Students Enrolled"
    },
    {
      number: "50+",
      label: "Polytechnics Reached"
    },
    {
      number: "100+",
      label: "Tutorials & Resources"
    },
    {
      number: "85%",
      label: "Completion Rate"
    }
  ]

  return (
    <StatsSection>
      {stats.map((stat, index) => (
        <StatItem key={index}>
          <StatNumber className="stat-number">{stat.number}</StatNumber>
          <StatLabel>{stat.label}</StatLabel>
        </StatItem>
      ))}
    </StatsSection>
  )
}

export default Stats
