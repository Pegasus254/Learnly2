import { ResourceSection, ExternalLink } from '../../styles/resources.styles';

const OnlineCourses = () => {
  return (
    <ResourceSection>
      <h2>Online Courses</h2>
      <p>Currently Online:</p>
      <ul>
        <li>
          DataCamp Course:{' '}
          <ExternalLink href="https://www.datacamp.com/" target="_blank" rel="noopener noreferrer">
            https://www.datacamp.com/
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zm11-3v8h-2V6.413l-7.293 7.294-1.414-1.414L17.586 5H13V3h8z" />
            </svg>
          </ExternalLink>
        </li>
      </ul>
    </ResourceSection>
  );
};

export default OnlineCourses; 