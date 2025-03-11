import styled from 'styled-components';

export const ContentWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const CoursesIntro = styled.section`
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const CourseCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: var(--primary-blue);
    margin-bottom: 1.5rem;
  }

  .skills-covered {
    margin: 1.5rem 0;

    h3 {
      color: var(--bg-dark);
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
        color: #666;
        
        &:before {
          content: "•";
          color: var(--accent-teal);
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

export const CourseLink = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: var(--accent-teal);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #00a896;
  }
`; 