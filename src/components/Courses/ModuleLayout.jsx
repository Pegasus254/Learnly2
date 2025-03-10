import styled from 'styled-components';
import Breadcrumb from '../Common/Breadcrumb';

const ModuleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ModuleContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ModuleLayout = ({ breadcrumbItems, children }) => {
  return (
    <ModuleContainer>
      <Breadcrumb items={breadcrumbItems} />
      <ModuleContent>
        {children}
      </ModuleContent>
    </ModuleContainer>
  );
};

export default ModuleLayout; 