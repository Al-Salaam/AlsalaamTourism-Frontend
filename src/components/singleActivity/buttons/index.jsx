import React, { useState } from 'react';

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



const textBoxStyle = {

  width: '140px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  display: 'flex',
  justifyContent:"space-evenly",
  alignItems:"center",
  margin:"1%"
};

const operators = {
    display: 'flex',
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
  
  };

const valueStyle = {
  fontSize: '24px',
};

const placeholderStyle = {
  color: 'black',
};

const buttonStyle = {
  cursor: 'pointer',
  fontSize: '18px',
  padding:0,
  border:"none",
  backgroundColor:"white"
};

export default TextBoxWithButtons;
