import React from 'react';

import { Container } from './styles';

import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Murilo V. Logo" />
    </Container>
  );
};

export default Header;
