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

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthHeader>
          <h1>Create Account</h1>
          <p>Join our community of learners</p>
        </AuthHeader>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

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

          <FormGroup>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit">Create Account</SubmitButton>
        </Form>

        <Divider>
          <span>Or sign up with</span>
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
          Already have an account? <Link to="/login">Sign in</Link>
        </AuthLink>
      </AuthCard>
    </AuthContainer>
  );
};

export default Register;
