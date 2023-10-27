import { Carousel, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';

const carouselStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  height: '460px',
  width: '48%',
  margin: '10px', 
  borderRadius:"30px"
};

const imagePaths = [
  ["../../../../images/Rectangle 57.png", "../../../../images/Rectangle 58.png"],
  ["../../../../images/desDubai.png", "../../../../images/fujairahver.png"],
  ["../../../../images/destinationMain.png", "../../../../images/desAbuDhabi.png"],
  ["../../../../images/destinationMain.png", "../../../../images/desAbuDhabi.png"]
];

const TopDealCarousel = () => (
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
      {imagePaths.map((images, index) => (
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
);

export default TopDealCarousel;
