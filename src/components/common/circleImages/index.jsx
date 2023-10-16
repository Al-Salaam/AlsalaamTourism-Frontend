import  { useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import Client1 from "../../../../images/client1.png"
import Client2 from "../../../../images/client2.png"
import Client3 from "../../../../images/client3.png"
import Client4 from "../../../../images/client4.png"
import Client5 from "../../../../images/client5.png"
import Client6 from "../../../../images/client6.png"
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
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    image: Client2,
    heading: 'Title 2',
    description: 'Description for Image 2',
  },
  {
    image: Client3,
    heading: 'Title 3',
    description: 'Description for Image 3',
  },
  {
    image: Client4,
    heading: 'Title 3',
    description: 'Description for Image 3',
  },
  {
    image: Client5,
    heading: 'Title 3',
    description: 'Description for Image 3',
  },
  {
    image: Client6,
    heading: 'Title 3',
    description: 'Description for Image 3',
  },
];

function CircleComponent() {
  const [centerImage, setCenterImage] = useState(circleData[0].image);
  const [centerHeading, setCenterHeading] = useState(circleData[0].heading);
  const [centerDescription, setCenterDescription] = useState(circleData[0].description);
  const [centerSummary, setCenterSummary] = useState(circleData[0].summary);



  const handleCircleClick = (index) => {
    setCenterImage(circleData[index].image);
    setCenterHeading(circleData[index].heading);
    setCenterDescription(circleData[index].description);
    setCenterSummary(circleData[index].summary);
  };


  const isSmallScreen = useMediaQuery({ maxWidth: 800 });

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
              <Title level={1} style={{ color: 'white' }}>
                That’s What Our Clients Say
              </Title>
              <Title level={4} style={{ color: 'white' }}>
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
              <h1 style={{color:"white"}}>{centerHeading}</h1>
              <h2 style={{color:"white"}}>{centerDescription}</h2>
              </div>
              <p style={{color:"white"}}>{centerSummary}</p>
              </div>
            </Col>
            <Col span={8} align="middle"  >
              <div style={{marginRight:"-95%"}}>
              <div
                style={{
                  marginRight:"-10%",
                                    ...circleStyles.smallCircle,
                  backgroundImage: `url(${circleData[3].image})`,
                  backgroundSize: 'cover',
                }}
                onClick={() => handleCircleClick(3)}
              ></div>
              <div
                style={{
                  ...circleStyles.bigCircle,
                  backgroundImage: `url(${circleData[4].image})`,
                  backgroundSize: 'cover',
                  marginLeft: '-30%',
                }}
                onClick={() => handleCircleClick(4)}
              ></div>
              <div
                style={{
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