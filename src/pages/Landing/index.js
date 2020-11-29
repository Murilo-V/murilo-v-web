import React from 'react';
import SvgIntro from '../../components/SvgIntro';
import SvgMaskedIntro from '../../components/SvgMaskedIntro';
import { Container } from './styles';

const Landing = () => {
  return (
    <Container>
      <div className="svgContainer">
        <SvgIntro />
      </div>

      <div className="svgMaskedContainer">
        <SvgMaskedIntro />
      </div>
      
      <div className="waveBottom"></div>  
      <span className="title">murilo v.</span>
      <p>design gráfico e programação</p>
    </Container>
      
  );
};

export default Landing;
