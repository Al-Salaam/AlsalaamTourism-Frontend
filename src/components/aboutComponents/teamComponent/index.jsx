import React from 'react';
import Selfie from "../../../../images/3dSelfie.png";
import { Menu, Row, Col, Drawer, Button, ConfigProvider, Image } from 'antd';

const containerStyle = {
  display: 'flex',
  alignItems: 'center', // Vertical centering
  // marginLeft:"-80px",
  width:"280px",
  // border:"5px solid salmon",
  justifyContent:"center",
  margin:"2%",
  
};

const rotatedTextStyle = {
  transform: 'rotate(-90deg)',
  whiteSpace: 'nowrap', // Prevent text from wrapping
  marginLeft:"-300px",
  marginBottom:"-30px",
  color:"#2C2727",
  // border:"5px solid gray"
};

const mainTextStyle = {
  marginLeft: '10px', 
  color:"#2C2727"
};

function ImageWithText({ imageUrl, mainText, rotatedText }) {
  return (
    
    
    <Row justify="center" style={{margin:"0", padding:"0"}}>
        <Col  align={"right"}>
    <div  style={containerStyle}>
      
      <div>
      <div style={rotatedTextStyle}>{mainText} </div>
      <img src={imageUrl} alt="Image" width={"100%"} />
      <div style={mainTextStyle}>{rotatedText}</div>
      </div>
    </div>
    </Col>
    </Row>
  );
}

export default ImageWithText;
