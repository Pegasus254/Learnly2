import React from 'react';
import styled from 'styled-components';

const ToolsSection = styled.section`
  margin: 4rem 0;
`

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ToolCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const ToolContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: var(--bg-dark);
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .tool-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--accent-teal);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;

    &:hover {
      background: #0d9488;
    }
  }
`

const tools = [
  {
    id: 1,
    name: 'Anaconda',
    description: 'The most popular Python distribution for data science.',
    link: 'https://www.anaconda.com/products/distribution'
  },
  {
    id: 2,
    name: 'Jupyter Notebook',
    description: 'Interactive computing and data visualization.',
    link: 'https://jupyter.org/'
  },
  {
    id: 3,
    name: 'VS Code',
    description: 'Powerful code editor with great data science support.',
    link: 'https://code.visualstudio.com/'
  },
  {
    id: 4,
    name: 'Google Colab',
    description: 'Free cloud service for machine learning development.',
    link: 'https://colab.research.google.com/'
  }
];

const Tools = () => {
  return (
    <ToolsSection>
      <h2>Recommended Tools</h2>
      <ToolsGrid>
        {tools.map(tool => (
          <ToolCard key={tool.id}>
            <ToolContent>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <a href={tool.link} className="tool-link" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </ToolContent>
          </ToolCard>
        ))}
      </ToolsGrid>
    </ToolsSection>
  );
};

export default Tools; 