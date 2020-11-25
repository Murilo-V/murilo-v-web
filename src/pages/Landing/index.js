import React from 'react';
import SvgIntro from '../../components/SvgIntro';
import SvgMaskedIntro from '../../components/SvgMaskedIntro';
import { Container } from './styles';

const Landing = () => {
  return (
    <Container>
      <div className="svgContainer">
        <SvgIntro id="svgIntro" />
      </div>  

      

      <span className="maskedTitle">murilo v. <p>design gráfico e programação</p></span>
      <span className="unmaskedTitle">murilo v. <p>design gráfico e programação</p></span>
    </Container>
      
  );
};

export default Landing;
