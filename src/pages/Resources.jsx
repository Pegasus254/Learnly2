import { ResourcesContainer } from '../styles/resources.styles';
import Hero from '../components/Resources/Hero';
import Tutorials from '../components/Resources/Tutorials';
import OnlineCourses from '../components/Resources/OnlineCourses';
import Documentation from '../components/Resources/Documentation';
import Tools from '../components/Resources/Tools';

const Resources = () => {
  return (
    <ResourcesContainer>
      <Hero />
      <Tutorials />
      <OnlineCourses />
      <Documentation />
      <Tools />
    </ResourcesContainer>
  );
};

export default Resources; 