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
        <a href="https://maduoutfit.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <img src={SvgMaduOutfitLogo} alt="MaduOutfit Logo" /> 
          </div>
        </a>

        <a href="https://happynextlevelweek.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div> 
            <img src={SvgHappyLogo} alt="Happy Logo" /> 
          </div>
        </a>  

        <a href="https://dogterest.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div> 
            <img src={SvgDogterestLogo} alt="Dogterest Logo" /> 
            </div>
        </a>  
      </div>
    </Container>
  );
};

export default Projects;
