import React from 'react';
import Menu from '../../components/Menu';

import { Container } from './styles';

const Services = () => {
  return (
    <Container>
      <Menu/>
      <h1>serviços</h1>
      
      <div className="services-container">
        <button>pedir orçamento</button>
      </div>
    </Container>
  );
};

export default Services;
