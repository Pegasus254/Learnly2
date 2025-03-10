import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background: white;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--bg-dark);
  text-decoration: none;
  letter-spacing: -0.5px;
  
  &:hover {
    color: var(--accent-teal);
  }
`

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    width: 100%;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-teal);
    transition: width 0.3s ease;
  }

  &:hover:after,
  &.active:after {
    width: 100%;
  }

  &:hover,
  &.active {
    color: var(--accent-teal);
  }
`

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

const AuthButton = styled(Link)`
  padding: 0.625rem 1.25rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
`

const LoginButton = styled(AuthButton)`
  color: var(--accent-teal);
  border: 2px solid var(--accent-teal);
  background: transparent;

  &:hover {
    background: var(--accent-teal);
    color: white;
    transform: translateY(-2px);
  }
`

const RegisterButton = styled(AuthButton)`
  background: var(--accent-teal);
  color: white;
  border: 2px solid var(--accent-teal);

  &:hover {
    background: #00a896;
    border-color: #00a896;
    transform: translateY(-2px);
  }
`

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
              className={location.pathname === '/courses' ? 'active' : ''}
            >
              Course Content
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
              to="/community" 
              className={location.pathname === '/community' ? 'active' : ''}
            >
              Community & Mentorship
            </NavLink>
          </li>
        </NavLinks>
        <AuthButtons>
          <LoginButton to="/login">Log in</LoginButton>
          <RegisterButton to="/register">Register</RegisterButton>
        </AuthButtons>
      </NavContent>
    </Nav>
  )
}

export default Navbar 