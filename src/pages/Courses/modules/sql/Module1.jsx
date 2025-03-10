import styled from 'styled-components';
import Breadcrumb from '../../../../components/Common/Breadcrumb';

const ModuleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Module1 = () => {
  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: 'SQL', link: '/courses/sql' },
    { label: 'Module 1: SQL Fundamentals' }
  ];

  return (
    <ModuleContainer>
      <Breadcrumb items={breadcrumbItems} />
      {/* Module content */}
    </ModuleContainer>
  );
};

export default Module1; 