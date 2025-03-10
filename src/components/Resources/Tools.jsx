import { ResourceSection, ExternalLink } from '../../styles/resources.styles';

const tools = [
  {
    name: 'Anaconda navigator',
    url: 'https://anaconda.com'
  },
  {
    name: 'SQL server',
    url: 'https://microsoft.com/'
  }
];

const Tools = () => {
  return (
    <ResourceSection>
      <h2>Tools</h2>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>
            {tool.name}:{' '}
            <ExternalLink href={tool.url} target="_blank" rel="noopener noreferrer">
              {tool.url}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zm11-3v8h-2V6.413l-7.293 7.294-1.414-1.414L17.586 5H13V3h8z" />
              </svg>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </ResourceSection>
  );
};

export default Tools; 