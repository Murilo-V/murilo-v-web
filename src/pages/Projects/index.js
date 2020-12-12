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
        <div> <img src={SvgMaduOutfitLogo} /> </div>
        <div> <img src={SvgHappyLogo} /> </div>
        <div> <img src={SvgDogterestLogo} /> </div>
      </div>
    </Container>
  );
};

export default Projects;
