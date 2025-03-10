import { Link, useLocation } from 'react-router-dom';
import { Nav, NavContent, Logo, NavLinks, AuthButtons } from './styles';

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContent>
        <Link to="/" className="logo">
          <Logo>Learnly</Logo>
        </Link>
        <NavLinks>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>
              Course Content
            </Link>
          </li>
          <li>
            <Link to="/assessment" className={location.pathname === '/assessment' ? 'active' : ''}>
              Assessments
            </Link>
          </li>
          <li>
            <Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>
              Resources
            </Link>
          </li>
          <li>
            <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>
              Community & Mentorship
            </Link>
          </li>
        </NavLinks>
        <AuthButtons>
          <a href="#" className="auth-btn login-btn">Log in</a>
          <a href="#" className="auth-btn register-btn">Register</a>
        </AuthButtons>
      </NavContent>
    </Nav>
  );
};

export default Navbar;