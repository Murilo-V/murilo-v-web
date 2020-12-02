import React from 'react';
import Menu from '../../components/Menu';
import SloganText from '../../components/SloganText';
import SvgIntro from '../../components/SvgIntro';
import SvgMaskedIntro from '../../components/SvgMaskedIntro';
import { Container } from './styles';

const Landing = () => {
  return (
    <Container>
      <Menu />
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
