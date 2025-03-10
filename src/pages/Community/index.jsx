import React from 'react';
import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroImage,
  ComingSoonBadge,
  CTAButton,
  SectionTitle,
  ForumSearch,
  FeaturesGrid,
  FeatureCard,
  MentorsGrid,
  MentorCard,
  MentorImage,
  MentorContact
} from './styles';

const Community = () => {
  const features = [
    {
      icon: 'assets/beginner-icon.svg',
      title: 'Beginner questions',
      description: 'Get help with fundamentals'
    },
    {
      icon: 'assets/collaboration-icon.svg',
      title: 'Project collaboration',
      description: 'Work together on projects'
    },
    {
      icon: 'assets/resource-icon.svg',
      title: 'Resource sharing',
      description: 'Share helpful materials'
    },
    {
      icon: 'assets/career-icon.svg',
      title: 'Career advice',
      description: 'Get industry insights'
    }
  ];

  const mentors = [
    {
      image: 'assets/mentor1.jpg',
      name: 'Gabriel Gichuru',
      title: 'Data Scientist',
      description: 'Experienced in Machine learning and AI & Big Data Analytics',
      contact: '0715851288',
      email: 'gabrielgichuru1@gmail.com'
    },
    {
      image: 'assets/mentor2.jpg',
      name: 'Euclid Mwendwa',
      title: 'Data Scientist',
      description: 'Experienced in Data Engineering & Data visualization',
      contact: '0742757528',
      email: 'euclidmwendwa@gmail.com'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <ComingSoonBadge>Coming Soon!</ComingSoonBadge>
          <h1>Join an Eager Community of Data Science Learners and Mentors</h1>
          <p>Accelerate your learning journey with expert mentorship and a supportive community!</p>
          <CTAButton href="#">Explore Mentorship</CTAButton>
        </HeroContent>
        <HeroImage>
          <img src="assets/mentorship-illustration.svg" alt="Mentorship Illustration" />
        </HeroImage>
      </HeroSection>

      <section>
        <SectionTitle>Community Forum</SectionTitle>
        <ForumSearch type="text" placeholder="Search a topic of your choice..." />
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <img src={feature.icon} alt={feature.title} className="feature-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--bg-dark)', marginBottom: '0.5rem', fontWeight: '500' }}>{feature.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </section>

      <section>
        <SectionTitle>Featured Mentors</SectionTitle>
        <MentorsGrid>
          {mentors.map((mentor, index) => (
            <MentorCard key={index}>
              <MentorImage src={mentor.image} alt={mentor.name} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--bg-dark)', marginBottom: '0.5rem' }}>{mentor.name}</h3>
              <p style={{ color: 'var(--accent-teal)', marginBottom: '1rem', fontWeight: '500' }}>{mentor.title}</p>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>{mentor.description}</p>
              <MentorContact>
                <p>Contact: {mentor.contact}</p>
                <p>{mentor.email}</p>
              </MentorContact>
            </MentorCard>
          ))}
        </MentorsGrid>
      </section>
    </PageContainer>
  );
};

export default Community;
