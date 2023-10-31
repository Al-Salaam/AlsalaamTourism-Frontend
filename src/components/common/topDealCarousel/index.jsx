import { Carousel, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { useMediaQuery } from 'react-responsive';


import deal1 from  "../../../../images/Rectangle 57.png";
import deal2 from  "../../../../images/Rectangle 58.png";
import deal3 from "../../../../images/desDubai.png";
import deal4 from  "../../../../images/fujairahver.png"
import deal5 from "../../../../images/destinationMain.png"
import deal6 from "../../../../images/desAbuDhabi.png"
const carouselStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};




const deals = [[deal1,deal2],[deal3,deal4], [deal5, deal6] ]


function  TopDealCarousel ()  {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)', 
  });
  const imageStyle = {
    height: isMobile ? '200px':'460px',
    width: '48%',
    margin: '10px', 
    borderRadius:"30px"
  };
  
  return(
  
  <div style={{ background: 'linear-gradient(180deg, #89A7B2 0%, #028B95 100%)', marginTop: "25px" }}>
    <Row xs={24} sm={24} md={24} xl={24} lg={24}>
      <Col xs={24} sm={24} md={24} xl={24} lg={24} align="middle">
        <Title style={{
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
        }}>TOP DEALS </Title>
      </Col>
    </Row>
    <Carousel autoplay>
      {deals.map((images, index) => (
        <div key={index}>
          <div className="carousel-slide" style={carouselStyle}>
            {images.map((image, subIndex) => (
              <img key={subIndex} style={imageStyle} src={image} alt={`Image ${subIndex + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);}

export default TopDealCarousel;
