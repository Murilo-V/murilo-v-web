import React from 'react';
import introVector from '../../assets/intro-vector.svg'
import { Container } from './styles';

const Landing = () => {
  return (
    <Container>
      <img src={introVector} alt="Vector Background" />
    </Container>
  );
};

export default Landing;
