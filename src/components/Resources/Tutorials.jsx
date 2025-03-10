import { ResourceSection, ExternalLink } from '../../styles/resources.styles';

const tutorials = [
  {
    title: 'Getting started with DataCamp',
    url: 'https://www.youtube.com/watch?v=rg2U76GHpGU'
  },
  {
    title: 'SQL course for beginners',
    url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY'
  },
  {
    title: 'Getting started with Python',
    url: 'https://www.youtube.com/watch?v=WGJJIrtnfpk'
  }
];

const Tutorials = () => {
  return (
    <ResourceSection>
      <h2>Tutorials</h2>
      <p>Below are links to informative YouTube tutorials to help you navigate Introductory courses.</p>
      <ul>
        {tutorials.map((tutorial, index) => (
          <li key={index}>
            {tutorial.title}:{' '}
            <ExternalLink href={tutorial.url} target="_blank" rel="noopener noreferrer">
              Watch tutorial
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

export default Tutorials; 