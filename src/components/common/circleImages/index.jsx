import  { useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import Client1 from "../../../../images/cl1.jpg"
import Client5 from "../../../../images/clt1.avif"
import Client3 from "../../../../images/cl3.jpg"
import Client4 from "../../../../images/cl4.jpg"
import Client2 from "../../../../images/clt2.avif"
import Client6 from "../../../../images/clt3.avif"
import { useMediaQuery } from 'react-responsive';
import ThreeCircleComponent from './threeCircles';

const { Title } = Typography;

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
    width: '200px',
    height: '200px',
    backgroundColor: "#018D97",
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
};

const circleData = [
  {
    image: Client1,
    heading: "Ripon Ahmed",
    description: "Temperley, Argentina",
    summary: ""
  },
  {
    image: Client2,
    heading: 'Maryam ALi',
    description: 'berlin, Germany',
  },
  {
    image: Client3,
    heading: 'Jhon walter',
    description: 'Toranto, Canada',
  },
  {
    image: Client4,
    heading: 'Karherine winslet',
    description: 'California, USA',
  },
  {
    image: Client5,
    heading: 'Mosa Ahmad',
    description: 'Doha, Qatar',
  },
  {
    image: Client6,
    heading: 'Viktoria kate',
    description: 'london, England',
  },
];

function CircleComponent() {
  const [centerImage, setCenterImage] = useState(circleData[5].image);
  const [centerHeading, setCenterHeading] = useState(circleData[5].heading);
  const [centerDescription, setCenterDescription] = useState(circleData[5].description);
  const [centerSummary, setCenterSummary] = useState(circleData[5].summary);



  const handleCircleClick = (index) => {
    setCenterImage(circleData[index].image);
    setCenterHeading(circleData[index].heading);
    setCenterDescription(circleData[index].description);
    setCenterSummary(circleData[index].summary);
  };


  const isSmallScreen = useMediaQuery({ maxWidth: 800 });

  const titleStyle = {
    fontFamily: "Ubuntu",
    
   
  };

  return (
    <Card style={{ paddingTop: '5%', background: 'linear-gradient(180deg, #70ADBB 0%, #018D97 100%)' }}>
      {isSmallScreen ? (
        <>
          <ThreeCircleComponent />
        </>
      ) : (
        <>
          <Row justify="center" style={{marginBottom:"5%"}}>
            <Col align="middle" span={10}>
              <Title level={1} style={{...titleStyle, color: 'white' }}>
                That’s What Our Clients Say
              </Title>
              <Title level={4} style={{...titleStyle, color: 'white' }}>
                We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.
              </Title>
            </Col>
          </Row>
          <Row justify="center" >
            <Col span={8} align="middle" style={{marginLeft:"-20%"}} >
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
                  marginRight: '-50%',
                }}
                onClick={() => handleCircleClick(1)}
              ></div>
              <div
                style={{
                  ...circleStyles.bigCircle,
                  backgroundImage: `url(${circleData[2].image})`,
                  backgroundSize: 'cover',
                }}
                onClick={() => handleCircleClick(2)}
              ></div>
            </Col>
            <Col span={8} align="middle" >
              <div style={{marginLeft:"40%"}}>
              <div style={{ ...circleStyles.bigCircle, backgroundImage: `url(${centerImage})`, backgroundSize: 'cover' }}></div>
              <div style={{marginBottom:"10%"}}>
              <h1 style={{...titleStyle,color:"white"}}>{centerHeading}</h1>
              <h2 style={{...titleStyle,color:"white"}}>{centerDescription}</h2>
              </div>
              <p style={{color:"white"}}>{centerSummary}</p>
              </div>
            </Col>
            <Col span={8} align="middle"  >
              <div style={{marginLeft:"70%"}}>
              <div
                style={{
                  marginLeft:"30%",
                                    ...circleStyles.smallCircle,
                  backgroundImage: `url(${circleData[3].image})`,
                  backgroundSize: 'cover',
                  marginBottom:"10%"
                }}
                onClick={() => handleCircleClick(3)}
              ></div>
              <div
                style={{
                  ...circleStyles.bigCircle,
                  backgroundImage: `url(${circleData[4].image})`,
                  backgroundSize: 'cover',
                  marginLeft: '-30%',
                  marginBottom:"10%"
                }}
                onClick={() => handleCircleClick(4)}
              ></div>
              <div
                style={{
                  marginLeft:"30%",
                  ...circleStyles.smallCircle,
                  backgroundImage: `url(${circleData[5].image})`,
                  backgroundSize: 'cover',
                }}
                onClick={() => handleCircleClick(5)}
              ></div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Card>
  );
}
export default CircleComponent;