import React from 'react';
import {
  Content,
  ContentWrapper,
  Hero,
  Section,
  TutorialLink
} from './styles';

const Resources = () => {
  return (
    <Content>
      <ContentWrapper>
        <Hero>
          <h1>What is Data Science?</h1>
          <p>
            Data Science is an inter-disciplinary field that uses statistical methods, computer algorithms, 
            and visualization techniques to extract meaningful insights and knowledge from large, complex 
            datasets often including structured and unstructured data, to solve real world problems.
          </p>

          <h2>Why Data Science?</h2>
          <p>
            Data science is important because it helps businesses and institutions make better data 
            informed decisions by analyzing large amounts of data. Choosing data science will enable 
            you improve your innovative abilities using data and to set you up to later expand your 
            horizon to machine learning and AI.
          </p>

          <h2>Why this page?</h2>
          <p>
            This page is dedicated to ensure smooth sailing as you pursue Data Science by providing 
            you with up to date study materials, tools and links to more free courses. Combining 
            tutorials and your normal coursework will ensure you stand out and be counted among 
            the best. Good Luck!
          </p>
        </Hero>

        <Section>
          <h2>Tutorials</h2>
          <p>Below are links to informative YouTube tutorials to help you navigate Introductory courses.</p>
          <ul>
            <li>
              Getting started with DataCamp:{' '}
              <TutorialLink href="https://www.youtube.com/watch?v=rg2U76GHpGU" target="_blank" rel="noopener noreferrer">
                Watch tutorial
              </TutorialLink>
            </li>
            <li>
              SQL course for beginners:{' '}
              <TutorialLink href="https://www.youtube.com/watch?v=HXV3zeQKqGY" target="_blank" rel="noopener noreferrer">
                Watch tutorial
              </TutorialLink>
            </li>
            <li>
              Getting started with Python:{' '}
              <TutorialLink href="https://www.youtube.com/watch?v=WGJJIrtnfpk" target="_blank" rel="noopener noreferrer">
                Watch tutorial
              </TutorialLink>
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Online Courses</h2>
          <p>Currently Online:</p>
          <ul>
            <li>
              DataCamp Course:{' '}
              <TutorialLink href="https://www.datacamp.com/" target="_blank" rel="noopener noreferrer">
                https://www.datacamp.com/
              </TutorialLink>
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Documentation</h2>
          <ul>
            <li>Official Python Documentation</li>
            <li>The Python Standard Library documentation for NumPy and pandas, two Python libraries that use arrays extensively</li>
            <li>The Python Downloads Page, where you can find the most recent version</li>
            <li>This course works with any version of Python from 3.7 onwards</li>
            <li>If you're using an earlier version, please update</li>
            <li>If DS2400 has a Python Tutorial including a section specifically on Machine Learning</li>
          </ul>
        </Section>

        <Section>
          <h2>Tools</h2>
          <ul>
            <li>
              Anaconda navigator:{' '}
              <TutorialLink href="https://anaconda.com" target="_blank" rel="noopener noreferrer">
                https://anaconda.com
              </TutorialLink>
            </li>
            <li>
              SQL server:{' '}
              <TutorialLink href="https://microsoft.com/" target="_blank" rel="noopener noreferrer">
                https://microsoft.com/
              </TutorialLink>
            </li>
          </ul>
        </Section>
      </ContentWrapper>
    </Content>
  );
};

export default Resources; 