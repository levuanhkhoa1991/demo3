

import React, { useState, useEffect } from 'react';


const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <button onClick={scrollToTop} style={styles.backToTopButton}>
        Top
      </button>
    )
  );
};

const styles = {
  backToTopButton: {
    position: 'fixed',
    bottom: '1vw',
    right: '1vw',
    padding: '1rem',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5%',
    cursor: 'pointer',
    zIndex: 1000,
  },
  
};

export default BackToTop;
