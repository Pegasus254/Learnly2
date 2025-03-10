import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-blue: #1a237e;
    --accent-teal: #00BFA5;
    --text-light: rgba(255, 255, 255, 0.9);
    --bg-dark: #0A192F;
    --border-color: rgba(10, 25, 47, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    background: #f8f9fa;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }

  .feature-title {
    color: var(--bg-dark);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .mentor-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    object-fit: cover;
    border: 3px solid var(--accent-teal);
  }

  .mentor-name {
    font-size: 1.2rem;
    color: var(--bg-dark);
    margin-bottom: 0.5rem;
  }

  .mentor-title {
    color: var(--accent-teal);
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .mentor-description {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .mentor-contact {
    font-size: 0.9rem;
    color: #666;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
  }

  .section-title {
    font-size: 2rem;
    color: var(--bg-dark);
    margin-bottom: 2rem;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: var(--accent-teal);
      margin-top: 0.5rem;
    }
  }
`; 