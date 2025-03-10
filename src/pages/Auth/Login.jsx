import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  AuthCard,
  AuthHeader,
  Form,
  FormGroup,
  SubmitButton,
  AuthLink,
  Divider,
  SocialButton
} from './styles';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthHeader>
          <h1>Welcome Back</h1>
          <p>Sign in to continue learning</p>
        </AuthHeader>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>

        <Divider>
          <span>Or continue with</span>
        </Divider>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <SocialButton>
            <img src="/assets/google-icon.svg" alt="Google" />
            Google
          </SocialButton>
          <SocialButton>
            <img src="/assets/github-icon.svg" alt="GitHub" />
            GitHub
          </SocialButton>
        </div>

        <AuthLink>
          Don't have an account? <Link to="/register">Sign up</Link>
        </AuthLink>
      </AuthCard>
    </AuthContainer>
  );
};

export default Login;
