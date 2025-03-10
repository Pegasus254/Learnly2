import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterSection = styled.section`
  background: var(--bg-dark);
`

const FooterWrapper = styled.footer`
  padding: 3rem 2rem 1.5rem;
  color: var(--text-light);
`

const FooterContent = styled.div`
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
`

const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const LogoText = styled.div`
  .footer-logo-text {
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
  }
  
  .footer-tagline {
    font-size: 0.8rem;
    color: var(--accent-teal);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`

const SocialLink = styled.a`
  color: var(--text-light);
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-teal);
  }
`

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`

const FooterColumn = styled.div`
  h3 {
    color: white;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    color: var(--text-light);
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-teal);
    }
  }
`

const FooterNewsletter = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;

  h3 {
    color: white;
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
`

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.75rem;

  input {
    flex: 1;
    padding: 0.6rem 0.8rem;
    border: none;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 4px;
    background: var(--accent-teal);
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #00a896;
    }
  }
`

const FooterBottom = styled.div`
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const FooterBottomContent = styled.div`
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
`

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    color: var(--text-light);
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-teal);
    }
  }

  .separator {
    color: rgba(255, 255, 255, 0.3);
  }
`

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <FooterSection>
      <FooterWrapper>
        <FooterContent>
          <FooterMain>
            <FooterLogo>
              <img src="/assets/learnly-logo.svg" alt="Learnly" className="logo-icon" />
              <LogoText>
                <span className="footer-logo-text">Learnly</span>
                <p className="footer-tagline">Empowering Data Science Education in Kenya</p>
              </LogoText>
            </FooterLogo>
            <p>Join our community of learners and start your journey in data science today.</p>
            <SocialLinks>
              <SocialLink href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterMain>

          <FooterLinks>
            <FooterColumn>
              <h3>Quick Links</h3>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/resources">Resources</Link>
            </FooterColumn>
            <FooterColumn>
              <h3>Community</h3>
              <Link to="/forum">Student Forum</Link>
              <Link to="/mentorship">Mentorship</Link>
              <Link to="/events">Events</Link>
              <Link to="/blog">Blog</Link>
            </FooterColumn>
            <FooterColumn>
              <h3>Support</h3>
              <Link to="/help">Help Center</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </FooterColumn>
          </FooterLinks>

          <FooterNewsletter>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates and resources.</p>
            <NewsletterForm onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </NewsletterForm>
          </FooterNewsletter>
        </FooterContent>

        <FooterBottom>
          <FooterBottomContent>
            <p>&copy; 2024 Learnly. All rights reserved.</p>
            <FooterBottomLinks>
              <Link to="/terms">Terms of Service</Link>
              <span className="separator">•</span>
              <Link to="/privacy">Privacy Policy</Link>
              <span className="separator">•</span>
              <Link to="/cookies">Cookie Policy</Link>
            </FooterBottomLinks>
          </FooterBottomContent>
        </FooterBottom>
      </FooterWrapper>
    </FooterSection>
  )
}

export default Footer 