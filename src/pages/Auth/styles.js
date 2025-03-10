import styled from 'styled-components';

export const AuthContainer = styled.div`
  min-height: calc(100vh - 70px); // Adjust based on navbar height
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  padding: 2rem;
`;

export const AuthCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2.25rem;
    color: var(--bg-dark);
    margin-bottom: 0.75rem;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.9rem;
    color: var(--text-dark);
    font-weight: 600;
  }

  input {
    padding: 0.875rem;
    border: 2px solid var(--border-color);
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--accent-teal);
      box-shadow: 0 0 0 3px rgba(0, 191, 165, 0.1);
    }
  }
`;

export const SubmitButton = styled.button`
  background: var(--accent-teal);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;

  &:hover {
    background: #00a896;
    transform: translateY(-2px);
  }
`;

export const AuthLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);

  a {
    color: var(--accent-teal);
    text-decoration: none;
    font-weight: 600;
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border-color);
  }

  span {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const SocialButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: var(--text-dark);

  &:hover {
    background: var(--bg-light);
    transform: translateY(-2px);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
