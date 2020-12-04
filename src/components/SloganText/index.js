import React from 'react';
import { motion } from 'framer-motion'

const SloganText = () => {

  // Create an array of letters
const string = Array.from("design e programação")

// Add staggering effect to the children of the container
const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.06 } },
}
  
// Variants for animating each letter
const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
    },
  },
}

  return (
    <motion.div
      center={ "y" }
      height={ 26 }
      width={ "100%" }
      background={ "" }
      style={{
        fontWeight: "400",
        letterSpacing: "-0.04em",
        fontSize: "30pt",
        color: "#D5DBD5",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        textDecoration: "underline",
        zIndex: 0,
        textShadow: "5px 5px 12px rgba(18, 18, 18, 0.40)",
      }}
            
      variants={ containerVariants }
      initial={ "before" }
      animate={ "after" }
    >
      {string.map((letter, index) => (
        <motion.span
          key={ index }
          width={ "auto" } // Set the width to the width of the letter
          height={ 26 } // Set the height to the height of the text
          background={ "" }
          style={{ position: "relative", marginTop: "20vh"}} // Position elements
          variants={ letterVariants }
          className="slogan"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default SloganText;
