import { Link } from 'react-router-dom';
import { CourseCard as StyledCard, CourseLink } from '../../styles/courses.styles';

const CourseCard = ({ title, skills, path }) => {
  return (
    <StyledCard>
      <h2>{title}</h2>
      <div className="skills-covered">
        <h3>Skills covered</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <Link to={path} component={CourseLink}>Start Learning</Link>
    </StyledCard>
  );
};

export default CourseCard; 