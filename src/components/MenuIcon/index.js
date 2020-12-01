import React from 'react';
import SvgMenuIcon from '../../assets/menu-icon.svg'

import { Container } from './styles';

const MenuIcon = () => {
  return (
    <Container>
      <img src={SvgMenuIcon} alt="Menu icon" />
    </Container>
  );
};

export default MenuIcon;
