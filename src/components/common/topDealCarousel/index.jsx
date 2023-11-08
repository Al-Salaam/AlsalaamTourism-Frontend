import { Carousel, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { useMediaQuery } from 'react-responsive';
import deal1 from  "../../../../images/Rectangle 57.png";
import deal2 from  "../../../../images/Rectangle 58.png";
import deal3 from "../../../../images/desDubai.png";
import deal4 from  "../../../../images/fujairahver.png";
import deal5 from "../../../../images/destinationMain.png";
import deal6 from "../../../../images/desAbuDhabi.png";
import topDealBg from "../../../../images/topDealBg.png";

const carouselStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
};

const deals = [[deal1, deal2], [deal3, deal4], [deal5, deal6]];

function TopDealCarousel() {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const imageStyle = {
    height: isMobile ? '200px' : '400px',
    width: '46%',
    borderRadius: '25px',
    margin:"30px 10px 10px 10px"
  };

  const containerStyle = {
    background: `url(${topDealBg})`,
    backgroundSize: '100% 60%', 
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
 
  };

  const titleStyle = {
    fontFamily: "Ubuntu",
    
   
  };
  

  return (
    <div style={{ marginTop: "25px" }}>
      <div style={containerStyle}>
        <Row xs={24} sm={24} md={24} xl={24} lg={24}>
          <Col xs={24} sm={24} md={24} xl={24} lg={24} align="middle">
            <Title style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              marginTop:"30px"
            }}>TOP DEALS</Title>
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
    </div>
  );
}

export default TopDealCarousel;
