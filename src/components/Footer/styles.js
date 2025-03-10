import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  background: var(--bg-dark);
  padding: 3rem 2rem 1.5rem;
  color: var(--text-light);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 2fr 1.2fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLogoText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
`;

export const FooterTagline = styled.p`
  font-size: 0.8rem;
  color: var(--accent-teal);
`;

export const FooterDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.9;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SocialLink = styled.a`
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-teal);
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    color: white;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  a {
    color: var(--text-light);
    text-decoration: none;
    font-size: 0.85rem;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      color: var(--accent-teal);
      transform: translateX(5px);
    }
  }
`;

export const FooterNewsletter = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;

  h3 {
    color: white;
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const NewsletterInput = styled.input`
  padding: 0.6rem 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 0.85rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-teal);
  }
`;

export const NewsletterButton = styled.button`
  padding: 0.6rem;
  background: var(--accent-teal);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #00a896;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterBottomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const FooterBottomLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  a {
    color: var(--text-light);
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      color: var(--accent-teal);
      opacity: 1;
    }
  }

  .separator {
    color: rgba(255, 255, 255, 0.3);
  }
`; 