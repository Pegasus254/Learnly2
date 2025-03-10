import { PageContainer } from '../styles/mentorship.styles';
import Hero from '../components/Mentorship/Hero';
import CommunityForum from '../components/Mentorship/CommunityForum';
import Mentors from '../components/Mentorship/Mentors';

const Mentorship = () => {
  return (
    <PageContainer>
      <Hero />
      <CommunityForum />
      <Mentors />
    </PageContainer>
  );
};

export default Mentorship; 