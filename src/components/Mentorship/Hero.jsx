import {
  HeroSection,
  HeroContent,
  HeroImage,
  ComingSoonBadge,
  CTAButton
} from '../../styles/mentorship.styles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <ComingSoonBadge>Coming Soon!</ComingSoonBadge>
        <h1>Join an Eager Community of Data Science Learners and Mentors</h1>
        <p>Accelerate your learning journey with expert mentorship and a supportive community!</p>
        <CTAButton href="#">Explore Mentorship</CTAButton>
      </HeroContent>
      <HeroImage>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/mentorship-illustration.svg`} 
          alt="Mentorship Illustration" 
        />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero; 