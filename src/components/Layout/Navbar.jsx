import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: var(--bg-dark);
  padding: 1rem 2rem;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: var(--accent-teal);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavLink = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover, &.active {
    color: var(--accent-teal);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const AuthButton = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;

  &.login {
    color: var(--accent-teal);
    border: 1px solid var(--accent-teal);
  }

  &.register {
    background: var(--accent-teal);
    color: white;
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContent>
        <Logo to="/">Learnly</Logo>
        <NavLinks>
          <li>
            <NavLink 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/courses"
              className={location.pathname.includes('/courses') ? 'active' : ''}
            >
              Course Content
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/assessment"
              className={location.pathname === '/assessment' ? 'active' : ''}
            >
              Assessments
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resources"
              className={location.pathname === '/resources' ? 'active' : ''}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/mentorship-community"
              className={location.pathname === '/mentorship-community' ? 'active' : ''}
            >
              Community & Mentorship
            </NavLink>
          </li>
        </NavLinks>
        <AuthButtons>
          <AuthButton to="/login" className="login">Log in</AuthButton>
          <AuthButton to="/register" className="register">Register</AuthButton>
        </AuthButtons>
      </NavContent>
    </Nav>
  );
};

export default Navbar; 