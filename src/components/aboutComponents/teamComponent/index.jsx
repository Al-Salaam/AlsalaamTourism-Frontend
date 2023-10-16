import React from 'react';
import Selfie from "../../../../images/3dSelfie.png";
import { Menu, Row, Col, Drawer, Button, ConfigProvider, Image } from 'antd';

const containerStyle = {
  display: 'flex',
  alignItems: 'center', // Vertical centering
  marginLeft:"-80px",
  

};

const rotatedTextStyle = {
  transform: 'rotate(-90deg)', // Rotate text
  whiteSpace: 'nowrap', // Prevent text from wrapping
  marginRight:"-90px",
  marginBottom:"-30%", // Adjust as needed for spacing
  color:"#2C2727",
  
};

const mainTextStyle = {
  marginLeft: '10px', // Adjust as needed for spacing
  color:"#2C2727"
};

function ImageWithText({ imageUrl, mainText, rotatedText }) {
  return (
    
    
    <Row justify="center" style={{margin:"0", padding:"0"}}>
        <Col   >
    <div  style={containerStyle}>
      <div style={rotatedTextStyle}>{mainText} </div>
      <div>
      <img src={imageUrl} alt="Image" width="100%"/>
      <div style={mainTextStyle}>{rotatedText}</div>
      </div>
    </div>
    </Col>
    </Row>
  );
}

export default ImageWithText;
