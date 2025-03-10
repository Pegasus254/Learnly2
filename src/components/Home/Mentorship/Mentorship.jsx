import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MentorshipSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MentorshipCard = styled.div`
  color: white;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
`

const CardDescription = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
`

const MentorshipFeatures = styled.div`
  margin-top: 2rem;
`

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const FeatureIcon = styled.div`
  font-size: 1.5rem;
  color: var(--accent-teal);
`

const CardButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--accent-teal);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: #00a896;
    transform: translateY(-2px);
  }
`

const Mentorship = () => {
  return (
    <MentorshipSection>
      <MentorshipCard>
        <CardTitle>Mentorship Program</CardTitle>
        <CardDescription>
          Connect with experienced data scientists who will guide you through your learning journey and help you overcome challenges.
        </CardDescription>
        <MentorshipFeatures>
          <Feature>
            <FeatureIcon>👨‍🏫</FeatureIcon>
            <p>Learn from industry experts with one on one mentorship sessions from professionals</p>
          </Feature>
          <Feature>
            <FeatureIcon>📝</FeatureIcon>
            <p>Regular code reviews and feedback on your projects with career guidance and industry insights</p>
          </Feature>
        </MentorshipFeatures>
        <CardButton to="/mentorship">Apply for Mentorship</CardButton>
      </MentorshipCard>

      <MentorshipCard>
        <CardTitle>Community Engagement</CardTitle>
        <CardDescription>
          Join a vibrant community of learners and professionals passionate about data science across Kenya.
        </CardDescription>
        <MentorshipFeatures>
          <Feature>
            <FeatureIcon>💬</FeatureIcon>
            <p>Discussion Forums: Ask questions, share insights, and collaborate with peers on our active forums.</p>
          </Feature>
          <Feature>
            <FeatureIcon>🏆</FeatureIcon>
            <p>Hackathons & Competitions: Test your skills, win prizes, and gain recognition through our regular competitions.</p>
          </Feature>
        </MentorshipFeatures>
        <CardButton to="/community">Join Community</CardButton>
      </MentorshipCard>
    </MentorshipSection>
  )
}

export default Mentorship 