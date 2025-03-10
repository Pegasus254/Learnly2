import React from 'react';
import styled from 'styled-components';

const DocSection = styled.section`
  margin: 4rem 0;
`

const DocGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const DocCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h3 {
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: var(--accent-teal);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

const Documentation = () => {
  const docs = {
    'Python': [
      { name: 'Python Documentation', url: 'https://docs.python.org/3/' },
      { name: 'NumPy Documentation', url: 'https://numpy.org/doc/' },
      { name: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' }
    ],
    'Machine Learning': [
      { name: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/documentation.html' },
      { name: 'TensorFlow Documentation', url: 'https://www.tensorflow.org/api_docs' },
      { name: 'PyTorch Documentation', url: 'https://pytorch.org/docs/stable/index.html' }
    ],
    'Data Visualization': [
      { name: 'Matplotlib Documentation', url: 'https://matplotlib.org/stable/contents.html' },
      { name: 'Seaborn Documentation', url: 'https://seaborn.pydata.org/' },
      { name: 'Plotly Documentation', url: 'https://plotly.com/python/' }
    ]
  };

  return (
    <DocSection>
      <h2>Documentation</h2>
      <DocGrid>
        {Object.entries(docs).map(([category, items]) => (
          <DocCard key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </DocCard>
        ))}
      </DocGrid>
    </DocSection>
  );
};

export default Documentation; 