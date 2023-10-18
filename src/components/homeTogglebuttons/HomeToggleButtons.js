import React from 'react';
import styles from './hometooglebutton.module.css';

function HomeToggleButtons({lastHovered,setLastHovered}) {

  const handleMouseEnter = (buttonName) => {
    setLastHovered(buttonName);
  };

  return (
    <div className={`${styles.btncontainer} mb-5`}>
      <button
        onMouseEnter={() => handleMouseEnter('PRICING ANALYSIS')}
        className={`${styles.btn} ${lastHovered === 'PRICING ANALYSIS' ? styles.blackBg : ''}`}
      >
        PRICING ANALYSIS
      </button>
      <button
        onMouseEnter={() => handleMouseEnter('SALES ANALYSIS')}
        className={`${styles.btn} ${lastHovered === 'SALES ANALYSIS' ? styles.blackBg : ''}`}
      >
        SALES ANALYSIS
      </button>
    </div>
  );
}

export default HomeToggleButtons;
