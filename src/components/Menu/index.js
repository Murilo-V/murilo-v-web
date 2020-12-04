import React, { useState } from 'react';
import SvgMenuIcon from '../../assets/menu-icon.svg';
import SvgCloseMenuIcon from '../../assets/close-menu-icon.svg';
import { motion } from 'framer-motion';
import { Container } from './styles';
import { Link } from 'react-router-dom';

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
        className="closeMenuIcon"
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
      className="nav-container"
        animate={isOpen ? "open" : "closed"}
        variants={variants}>
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cGTJQwHmGWc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

          <div className="items-container">
            <Link to="/projects" target="_blank" rel="noopener noreferrer">projetos</Link>
            <Link to="/services" target="_blank" rel="noopener noreferrer">serviços</Link>
            <Link to="/history" target="_blank" rel="noopener noreferrer">história</Link>
            <Link to="/contact" target="_blank" rel="noopener noreferrer">contato</Link>
          </div>
      </motion.div>
 
    </Container>
  );
};

export default Menu;
