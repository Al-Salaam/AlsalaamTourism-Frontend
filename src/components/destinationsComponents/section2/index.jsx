import { Row, Col } from "antd";
import dubaiCard from "../../../../images/dubaiCard.png";
import abuDhabi from "../../../../images/abuDhabi.png";
import Fujairah from "../../../../images/Fujairah.png";
import sharjah from "../../../../images/sharjah.png";
import rasAlKhaima from "../../../../images/rasAlKhaima.png";
import Section2 from "./index2";

const Section = () => {
  const rowStyle = {
    marginBottom: "5%",
    display: "flex",
    justifyContent: 'space-between',

    
  };

  const data = [
    {
      name: "Dubai",
      activities: "63 Activities",
      tours: "9 Tours",
      imageSrc: dubaiCard,
      Link: "/dubai",
      },
    {
      name: "Abu Dhabi",
      activities: "63 Activities",
      tours: "9 Tours",
      imageSrc: abuDhabi,
      Link: "/abuDhabi"
    },

    {
      name: "Fujairah",
      activities: "63 Activities",
      tours: "9 Tours",
      imageSrc: Fujairah,
      Link: "/fujairah"
    },
    {
      name: " Sharjah",
      activities: "63 Activities",
      tours: "9 Tours",
      imageSrc: sharjah,
      Link: "/sharjah"
    },

    {
      name: "Ras Al-Khaima",
      activities: "63 Activities",
      tours: "9 Tours",
      imageSrc: rasAlKhaima,
      Link:"/RasAlKhaima"
    },
  ];
  return (
    <>
      <Row style={rowStyle}>
        {data.map((data, index) => (
          <Col xs={24} sm={24} md={24} lg={12} xl={12} key={index}>
            <Section2
              name={data.name}
              activities={data.activities}
              tours={data.tours}
              imageSrc={data.imageSrc}
              Link={data.Link}
              
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Section;
