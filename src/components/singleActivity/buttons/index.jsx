import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const TextBoxWithButtons = (props) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0){
    setValue(value - 1);
    }
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 562 });
  const textBoxStyle = {

    width: isSmallScreen ? "100px" : "140px",
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    justifyContent:"space-evenly",
    alignItems:"center",
    margin:"1%"
  };
  return (
    
      <div style={textBoxStyle}>
        
        <div style={placeholderStyle}>{props.title}</div>
        <div style={operators}>
        <button style={buttonStyle} onClick={handleIncrement}>
          +
        </button>
        <div style={valueStyle}>{value}</div>
        <button style={buttonStyle} onClick={handleDecrement}>
          -
        </button>
        </div>
      </div>
    
  );
};







export default TextBoxWithButtons;
