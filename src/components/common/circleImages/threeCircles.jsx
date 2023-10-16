import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import image1 from "../../../../images/threeCircel1.png";
import image2 from "../../../../images/threeCircle2.png";
import image3 from "../../../../images/threeCircle3.png";
import image4 from "../../../../images/threeCircle5.png";

const {Title}=Typography;

const titles = [
  {
    title: 'Ripon Ahmed',
    description: 'Temperley, Argentina',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: 'Ali Ahmed',
    description: 'abc, Argentina',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: 'Ashar Ahmed',
    description: 'xyz, Argentina',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: 'Taqi Ahmed',
    description: 'pqr, Argentina',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
];

const circleContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '5%',
};

const circleStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '90px',
  height: '80px',
  backgroundColor: 'lightblue',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Center the background image
};

const largerCircleStyle = {
  ...circleStyle,
  width: '110px',
  height: '110px',
};

const circleImages = [
  image1,
  image2,
  image3,
  image4,
];

const ThreeCircle = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const handleCircleClick = (direction) => {
    let newIndex;

    if (direction === 'left') {
      newIndex = (currentTitleIndex - 1 + titles.length) % titles.length;
    } else if (direction === 'right') {
      newIndex = (currentTitleIndex + 1) % titles.length;
    }

    setCurrentTitleIndex(newIndex);
  };

  const currentTitle = titles[currentTitleIndex];

  return (
    <>
    <Row justify="center" style={{marginTop:'15%'}}>
        <Col align="middle">
            <Title level={3} style={{color:"white"}}> That’s What Our Clients Says </Title>
            <Title level={5} style={{color:"white"}}> We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards. </Title>
        </Col>
    </Row>
      <Row style={circleContainerStyle}>
        <Col span={8} align="left">
          <div
            style={{ ...circleStyle, backgroundImage: `url(${circleImages[(currentTitleIndex - 1 + titles.length) % titles.length]})` }}
            onClick={() => handleCircleClick('left')}
          ></div>
        </Col>
        <Col span={8} style={{ ...largerCircleStyle, backgroundImage: `url(${circleImages[currentTitleIndex]})` }} onClick={() => handleCircleClick('center')}>
        </Col>
        <Col span={8} align="right">
          <div
            style={{ ...circleStyle, backgroundImage: `url(${circleImages[(currentTitleIndex + 1) % titles.length]})` }}
            onClick={() => handleCircleClick('right')}
          ></div>
        </Col>
      </Row>
      <Row justify="center">
        <Col align="middle">
          <Typography.Title level={3} style={{color:"white"}}>{currentTitle.title}</Typography.Title>
          <h3 style={{color:"white"}}>{currentTitle.description}</h3>
          <p style={{color:"white"}}>{currentTitle.summary}</p>
        </Col>
      </Row>
    </>
  );
};

export default ThreeCircle;
