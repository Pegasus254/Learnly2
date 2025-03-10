import { ResourceSection } from '../../styles/resources.styles';

const documentationItems = [
  'Official Python Documentation',
  'The Python Standard Library documentation for NumPy and pandas, two Python libraries that use arrays extensively',
  'The Python Downloads Page, where you can find the most recent version',
  'This course works with any version of Python from 3.7 onwards',
  'If you\'re using an earlier version, please update',
  'If DS2400 has a Python Tutorial including a section specifically on Machine Learning'
];

const Documentation = () => {
  return (
    <ResourceSection>
      <h2>Documentation</h2>
      <ul>
        {documentationItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ResourceSection>
  );
};

export default Documentation; 