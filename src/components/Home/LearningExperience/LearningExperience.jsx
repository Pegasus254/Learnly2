import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.section`
  background: var(--bg-dark);
  color: white;
  padding: 4rem 2rem;
`

const SectionTitle = styled.h2`
  color: var(--accent-teal);
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
`

const LearningCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
`

const LearningCard = styled.div`
  text-align: center;
  padding: 2rem;

  img {
    width: 120px;
    height: 120px;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: white;
    margin-bottom: 1rem;
  }
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
  }
`

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

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
  }
`

const MentorshipFeatures = styled.div`
  margin-top: 2rem;
`

const MentorshipFeature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  img {
    width: 24px;
    height: 24px;
  }
`

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  color: white;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StatItem = styled.div`
  text-align: center;

  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--accent-teal);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: var(--text-light);
    font-size: 1rem;
  }
`

const LearningExperience = () => {
  return (
    <Section>
      <SectionTitle>Comprehensive Learning Experience</SectionTitle>
      
      <LearningCards>
        <LearningCard>
          <img src="/assets/curriculum-illustration.svg" alt="Curriculum" />
          <h3>Our curriculum covers everything you need to become proficient in data science from fundamentals to advanced techniques.</h3>
          <CardButton to="/courses">View Course Content</CardButton>
        </LearningCard>

        <LearningCard>
          <img src="/assets/interactive-illustration.svg" alt="Interactive Learning" />
          <h3>Learn by doing with our interactive quizzes and guided coding questions. Watch expert instructors explain complex concepts in simple easy to understand language.</h3>
          <CardButton to="/assessment">Take Assessment</CardButton>
        </LearningCard>

        <LearningCard>
          <img src="/assets/resources-illustration.svg" alt="Resources" />
          <h3>Access a wealth of resources designed to support your learning journey and help you master data science concepts.</h3>
          <CardButton to="/resources">Access Resources</CardButton>
        </LearningCard>
      </LearningCards>

      <MentorshipSection>
        <MentorshipCard>
          <h3>Mentorship Program</h3>
          <p>Connect with experienced data scientists who will guide you through your learning journey and help you overcome challenges.</p>
          <MentorshipFeatures>
            <MentorshipFeature>
              <img src="/assets/mentor-icon.svg" alt="Mentor" />
              <p>Learn from industry experts with one on one mentorship sessions from professionals</p>
            </MentorshipFeature>
            <MentorshipFeature>
              <img src="/assets/review-icon.svg" alt="Review" />
              <p>Regular code reviews and feedback on your projects with career guidance and industry insights</p>
            </MentorshipFeature>
          </MentorshipFeatures>
          <CardButton to="/mentorship">Apply for Mentorship</CardButton>
        </MentorshipCard>

        <MentorshipCard>
          <h3>Community Engagement</h3>
          <p>Join a vibrant community of learners and professionals passionate about data science across Kenya.</p>
          <MentorshipFeatures>
            <MentorshipFeature>
              <img src="/assets/forum-icon.svg" alt="Forum" />
              <p>Discussion Forums: Ask questions, share insights, and collaborate with peers on our active forums.</p>
            </MentorshipFeature>
            <MentorshipFeature>
              <img src="/assets/competition-icon.svg" alt="Competition" />
              <p>Hackathons & Competitions: Test your skills, win prizes, and gain recognition through our regular competitions.</p>
            </MentorshipFeature>
          </MentorshipFeatures>
          <CardButton to="/community">Join Community</CardButton>
        </MentorshipCard>
      </MentorshipSection>

      <StatsSection>
        <StatItem>
          <div className="stat-number">500+</div>
          <div className="stat-label">Students Enrolled</div>
        </StatItem>
        <StatItem>
          <div className="stat-number">50+</div>
          <div className="stat-label">Polytechnics Reached</div>
        </StatItem>
        <StatItem>
          <div className="stat-number">100+</div>
          <div className="stat-label">Tutorials & Resources</div>
        </StatItem>
        <StatItem>
          <div className="stat-number">85%</div>
          <div className="stat-label">Completion Rate</div>
        </StatItem>
      </StatsSection>
    </Section>
  )
}

export default LearningExperience 