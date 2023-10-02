import React from 'react';
import CircleComponent from "../../components/common/circleImages";
import ImageCard from "../../components/aboutComponents/teamComponent";
import { Row, Col,} from 'antd';
import Team1 from "../../../images/ibrat.png"
import Team2 from "../../../images/team2.png"
import Team3 from "../../../images/team3.png"
import Team4 from "../../../images/team4.png"
import Icon1 from "../../../images/teamicon1.png"
import Icon2 from "../../../images/teamicon2.png"
import Icon3 from "../../../images/teamicon3.png"
import Icon4 from "../../../images/teamicon4.png"
import Image1 from "../../../images/imageGallery1.png"

import G1 from "../../../images/g1.png"
import G2 from "../../../images/g2.png"
import G3 from "../../../images/g3.png"
import G4 from "../../../images/g4.png"
import G5 from "../../../images/g5.png"
import G6 from "../../../images/g6.png"
import G7 from "../../../images/g7.png"
import G8 from "../../../images/g8.png"

import withNavbar from "../../components/common/HOCNabar/index";
import ServicesSection from '../../components/aboutComponents/servicesSection';
import Footer from "../../components/common/footer";
import AboutHero from '../../components/aboutComponents/aboutHero';
import ChooseUs from '../../components/aboutComponents/chooseUs';
import ImageGallery from '../../components/aboutComponents/imageGallery';


const imageCardData = [
  { imageUrl: Team1, mainText: <div style={{ display: "flex" }}><h3 >Ibrat Saeed</h3> &nbsp;&nbsp;&nbsp;<p>Founder & CEO</p></div>, rotatedText: <div style={{ display: "flex", justifyContent: "space-evenly" }}><img src={Icon4} alt="icon" /><img src={Icon1} alt="icon" /><img src={Icon2} alt="icon" /><img src={Icon3} alt="icon" /></div> },
  { imageUrl: Team2, mainText: <div style={{ display: "flex" }}><h3 >Zohaib Raja  </h3> &nbsp;&nbsp;&nbsp;<p>General Manager  </p></div>, rotatedText: <div style={{ display: "flex", justifyContent: "space-evenly" }}><img src={Icon4} alt="icon" /><img src={Icon1} alt="icon" /><img src={Icon2} alt="icon" /><img src={Icon3} alt="icon" /></div> },
  { imageUrl: Team3, mainText: <div style={{ display: "flex" }}><h3 >Malik Nabil  </h3> &nbsp;&nbsp;&nbsp;<p>Director Admin</p></div>, rotatedText: <div style={{ display: "flex", justifyContent: "space-evenly" }}><img src={Icon4} alt="icon" /><img src={Icon1} alt="icon" /><img src={Icon2} alt="icon" /><img src={Icon3} alt="icon" /></div> },
  { imageUrl: Team4, mainText: <div style={{ display: "flex" }}><h3 >Ghazi Raja</h3> &nbsp;&nbsp;&nbsp;<p>Managing Director  </p></div>, rotatedText: <div style={{ display: "flex", justifyContent: "space-evenly" }}><img src={Icon4} alt="icon" /><img src={Icon1} alt="icon" /><img src={Icon2} alt="icon" /><img src={Icon4} alt="icon" /></div> },
];

const images = [
  G1,
  G2,
  G3,
  G4,
  G5,
  G6,
  G7,
  G8,
];
function About() {
  return (
    <>
      <AboutHero description="This is a sample video description."
        videoSource="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        <ChooseUs/>
      <ServicesSection />


      <Row justify="center"><Col> <h1 style={{ margin: "15% 0" }}>Meet The team</h1></Col></Row>
      <Row >
        {imageCardData.map((data, index) => (

          <Col xs={24} sm={12} md={12} lg={12} xl={8} >
            <ImageCard
              key={index} // Remember to use a unique key for each card
              imageUrl={data.imageUrl}
              mainText={data.mainText}
              rotatedText={data.rotatedText}
            />
          </Col>

        ))}
      </Row>
      <ImageGallery images={images} />
      <CircleComponent />
      <Footer />

    </>
  );
}

export default withNavbar(About);
