import { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import Client1 from "../../../../images/cl1.jpg"
import Client5 from "../../../../images/clt1.avif"
import Client3 from "../../../../images/cl3.jpg"
import Client4 from "../../../../images/cl4.jpg"
import Client2 from "../../../../images/clt2.avif"
import Client6 from "../../../../images/clt3.avif"

const {Title}=Typography;

const titles = [
  {
    title: 'Ripon Ahmed',
    description: 'Temperley, Argentina',
    summary:"Highly recommended! We've used Alsalaam Tourism multiple times, and each experience has been seamless, from booking to the actual journey."
  },
  {
    title: 'Dawood Moosa',
    description: 'Doha, Qatar',
    summary:"Exceptional service! Alsalaam Tourism made our UAE trip unforgettable with their expert guidance and personalized itineraries"
  },
  {
    title: 'Jhon walter',
    description: 'Toranto, Canada',
    summary:"Outstanding customer support! Alsalaam Tourism's team went above and beyond to ensure our desert safari adventure was perfect."
  },
  {
    title: 'Karherine winslet',
    description: 'California, USA',
    summary:"Smooth transactions and great value for money with Alsalaam Tourism. Their diverse tour options cater to all interests."
  },
  {
    title: 'Viktoria kate',
    description: 'london, England',
    summary:"Professional and friendly staff! Alsalaam Tourism made our family trip to Abu Dhabi hassle-free, allowing us to focus on enjoying the city."
  },
  {
    title: 'Maryam ALi',
    description: 'California, USA',
    summary:"Alsalaam Tourism exceeded our expectations. Their local insights and attention to detail made our Dubai vacation truly remarkable."
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
  width: '60px',
  height: '60px',
  backgroundColor: 'lightblue',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Center the background image
};

const largerCircleStyle = {
  ...circleStyle,
  height: '90px',
  width:"90px"
};

const circleImages = [
  Client1,
  Client5,
  Client3,
  Client4,
  Client2,
  Client6
];

const ThreeCircle = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(5);

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
        <Col span={8}  align="middle" >
          <div style={{ ...largerCircleStyle, backgroundImage: `url(${circleImages[currentTitleIndex]})` }}>

          </div>
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