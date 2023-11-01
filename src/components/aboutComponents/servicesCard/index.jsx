import React, { useState } from 'react';
import { Card } from 'antd';

const FlipCardServices = ({ frontData, backData }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle = {
    width: '80%',
    height: '190px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'transform 0.5s',
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    margin:"10%",
  };

  const frontStyle = {
    backgroundColor: '#F3F5F9',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display:"flex",
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center"
    
  };

  const backStyle = {
    backgroundColor: '#e0e0f0',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  };

  return (
    <div style={cardStyle} onClick={flipCard}>
      <div style={isFlipped ? backStyle : frontStyle}>
        {isFlipped ? (
          <>
            <p>{backData.summary}</p>
          </>
        ) : (
          <>
            <img src={frontData.icon} alt="icon" />
            <h2>{frontData.heading}</h2>
            
          </>
        )}
      </div>
    </div>
  );
};

export default FlipCardServices;
