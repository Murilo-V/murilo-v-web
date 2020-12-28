import React from 'react';
import Menu from '../../components/Menu';
import SvgGithubLogo from '../../assets/github-logo.svg'
import SvgInstagramLogo from '../../assets/instagram-logo.svg'
import SvgLinkedInLogo from '../../assets/linkedin-logo.svg'

import { Container } from './styles';

const Contact = () => {
  return (
    <Container>
      <Menu />
      <h1>contato</h1>
      <div className="contact-container">
        <div className="social-medias">
            <a href="https://www.github.com/murilo-v" target="_blank" rel="noopener noreferrer">
              <div>
                <img src={SvgGithubLogo} alt="Github Logo" />
                <p>acompanhe meus projetos no GitHub</p>
              </div>
            </a>

            <a href="https://www.instagram.com/_murilov._/" target="_blank" rel="noopener noreferrer">
              <div>
                <img src={SvgInstagramLogo} alt="Instagram Logo" />
                <p>tire suas dúvidas no Instagram</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/murilo-v" target="_blank" rel="noopener noreferrer">
              <div>
                <img src={SvgLinkedInLogo} alt="LinkedIn Logo" />
                <p>faça networking comigo no LinkedIn</p>
              </div>
            </a> 
        </div>
      </div>
    </Container>
  );
};

export default Contact;
