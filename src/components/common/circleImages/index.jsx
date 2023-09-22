import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import image1 from "../../../../images/image1.png";
import image2 from "../../../../images/image2.png";
import image3 from "../../../../images/image3.png";

// Define the styles as JavaScript objects
const circleStyles = {
  smallCircle: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  bigCircle: {
    width: '250px',
    height: '300px',
    backgroundColor: '#e74c3d',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
};

// Define images and descriptions for each circle
const circleData = [
  {
    image: image1, // Replace with your image URL
    heading: "hello",
    description:"lorem lorem lorem lorem",
    summary:"lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10"   
  },
  {
    image: image2, // Replace with your image URL
    description: 'Description for Image 2',
  },
  {
    image: image3, // Replace with your image URL
    description: 'Description for Image 3',
  },
];

function CircleComponent() {
  const [centerImage, setCenterImage] = useState('');
  const [centerHeading, setCenterHeading] = useState('');
  const [centerDescription, setCenterDescription] = useState('');
  const [centerSummary, setCenterSummary] = useState('');

  const handleCircleClick = (index) => {
    setCenterImage(circleData[index].image);
    setCenterHeading(circleData[index].heading);
    setCenterDescription(circleData[index].description);
    setCenterSummary(circleData[index].summary);
  };

  return (
    <Card style={{ paddingTop: '5%',background: 'linear-gradient(180deg, #70ADBB 0%, #018D97 100%)'}} >
      <Row justify="center">
        {/* Left circles */}
        <Col span={8} align="middle">
          <div
            style={{
              ...circleStyles.smallCircle,
              backgroundImage: `url(${circleData[0].image})`,
              backgroundSize: 'cover',
            }}
            onClick={() => handleCircleClick(0)}
          ></div>
           <div
            style={{
              ...circleStyles.smallCircle,
              backgroundImage: `url(${circleData[1].image})`,
              backgroundSize: 'cover',
              marginRight:"40%"
            }}
            onClick={() => handleCircleClick(1)}
          ></div>
          <div
            style={{
              ...circleStyles.smallCircle,
              backgroundImage: `url(${circleData[2].image})`,
              backgroundSize: 'cover',
            }}
            onClick={() => handleCircleClick(2)}
          ></div>
        </Col>
        
        {/* Center big circle */}
        <Col span={8} align="middle">
          <div style={{ ...circleStyles.bigCircle, backgroundImage: `url(${centerImage})`, backgroundSize: 'cover' }}>
            
          </div>
          <p>{centerDescription}</p>
          <h1>{centerHeading}</h1>
          <h3>{centerSummary}</h3>
        </Col>

        {/* Right circles */}
        <Col span={8} align="middle">
          <div
            style={{
              ...circleStyles.smallCircle,
              backgroundImage: `url(${circleData[0].image})`,
              backgroundSize: 'cover',
            }}
            onClick={() => handleCircleClick(0)}
          ></div>
          <div
            style={{
              ...circleStyles.smallCircle,
              backgroundImage: `url(${circleData[1].image})`,
              backgroundSize: 'cover',
              marginLeft:"40%"
            }}
            onClick={() => handleCircleClick(1)}
          ></div>
          <div
            style={{
              ...circleStyles.smallCircle,
              backgroundImage: `url(${circleData[2].image})`,
              backgroundSize: 'cover',
            }}
            onClick={() => handleCircleClick(2)}
          ></div>
        </Col>
        
      </Row>
    </Card>
  );
}

export default CircleComponent;
