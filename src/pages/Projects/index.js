import React from 'react';
import Menu from '../../components/Menu';
import SvgMaduOutfitLogo from '../../assets/maduoutfit-logo.svg';
import SvgHappyLogo from '../../assets/happy-logo.svg';
import SvgDogterestLogo from '../../assets/dogterest-logo.svg';
import { Container } from './styles';

const Projects = () => {
  return (
    <Container>
      <Menu />
      <h1>projetos</h1>

      <div className="projects-container">
           <div>
             <img src={SvgMaduOutfitLogo} alt="MaduOutfit Logo" /> 
            </div>
        <div> 
          <img src={SvgHappyLogo} alt="Happy Logo" /> 
        </div>

        <a href="https://github.com/Murilo-V/pinterest-clone" target="_blank" rel="noopener noreferrer">
          <div> 
            <img src={SvgDogterestLogo} alt="Dogterest Logo" /> 
            </div>
        </a>  
      </div>
    </Container>
  );
};

export default Projects;
