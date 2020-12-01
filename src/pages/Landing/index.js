import React from 'react';
import MenuIcon from '../../components/MenuIcon';
import SloganText from '../../components/SloganText';
import SvgIntro from '../../components/SvgIntro';
import SvgMaskedIntro from '../../components/SvgMaskedIntro';
import { Container } from './styles';

const Landing = () => {
  return (
    <Container>
      <MenuIcon />
      <div className="svgContainer">
        <SvgIntro />
      </div>

      <div className="svgMaskedContainer">
        <SvgMaskedIntro />
      </div>
      
      <div className="waveBottom"></div>  
      <SloganText />
    </Container>
      
  );
};

export default Landing;
