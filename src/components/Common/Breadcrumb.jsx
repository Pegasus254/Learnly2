import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  padding: 1rem 0;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const BreadcrumbLink = styled(Link)`
  color: var(--primary-blue);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-teal);
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  margin: 0 0.5rem;
  color: #ccc;
`;

const CurrentPage = styled.span`
  color: var(--accent-teal);
  font-weight: 500;
`;

const Breadcrumb = ({ items }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <Separator>/</Separator>}
          {item.link ? (
            <BreadcrumbLink to={item.link}>{item.label}</BreadcrumbLink>
          ) : (
            <CurrentPage>{item.label}</CurrentPage>
          )}
        </span>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb; 