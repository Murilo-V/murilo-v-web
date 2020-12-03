import React, { useState } from 'react';
import SvgMenuIcon from '../../assets/menu-icon.svg';
import SvgCloseMenuIcon from '../../assets/close-menu-icon.svg';
import { motion } from 'framer-motion';
import { Container } from './styles';

const variants = {
  open: { opacity: 1, x: 0, display: 'flex' },
  closed: { opacity: 0, display: 'none' },
}

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [changeIcon, setChangeIcon] = useState(SvgMenuIcon)

  return (
    <Container>
      
      <motion.img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        src={changeIcon}
        alt="Menu icon"
        onClick={() => {
          setIsOpen(!isOpen)
          
          if (changeIcon === SvgMenuIcon) {
            setChangeIcon(SvgCloseMenuIcon)
          } else {
            setChangeIcon(SvgMenuIcon)
          }
        }}
      />

      <motion.div 
        animate={isOpen ? "open" : "closed"}
        variants={variants}>
          dsaads
      </motion.div>
 
    </Container>
  );
};

export default Menu;
