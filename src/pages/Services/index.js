import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';

import { Container } from './styles';

const Services = () => {
  return (
    <Container>
      <Menu/>
      <h1>serviços</h1>
      
      <div className="services-container">
        <Link to="/services/budget" >pedir orçamento</Link>
      </div>
    </Container>
  );
};

export default Services;
