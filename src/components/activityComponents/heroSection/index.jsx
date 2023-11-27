import { Row, Col, Image, Space } from "antd";
import A1 from "../../../../images/activityhero2.png";
import A2 from "../../../../images/activityTwo.png";

import { useMediaQuery } from "react-responsive";

const ActivityHeroSection = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 766 });
  const isLaptopScreen = useMediaQuery({ maxWidth: 1024 });
  const rowStyle = {
    background: "linear-gradient(180deg, #70ADBB 0%, #018D97 100%)",
    overflowX: "hidden",
    padding: isLaptopScreen ? "100px 30px 0 30px" : "100px 0 0 0 ",
  };

  const image1Style = {
    marginTop: "15%",
  };

  const image2Style = {
    marginTop:"5%",
    marginBottom:"5%"
  };

  const titleStyle = {
    fontFamily: "Ubuntu",
  
    textShadow:
      "0px 1.5589158535003662px 1.247132658958435px rgba(0, 0, 0, 0.0759), " +
      "0px 3.7462916374206543px 2.99703311920166px rgba(0, 0, 0, 0.1091), " +
      "0px 7.053934574127197px 5.643147945404053px rgba(0, 0, 0, 0.135), " +
      "0px 12.583013534545898px 10.066411018371582px rgba(0, 0, 0, 0.1609), " +
      "0px 23.535144805908203px 18.828115463256836px rgba(0, 0, 0, 0.1941), " +
      "0px 56.334346771240234px 45.06747817993164px rgba(0, 0, 0, 0.27)",
  };

  return (
    <>
      <Row justify="center" style={rowStyle}>
        <Col xs={24} sm={24} lg={24} xl={24} align="center">
          {isSmallScreen ? (
            <Space>
              <h1
                style={{
                    ...titleStyle,
                  fontSize: "32px",
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                The World is Yours To Explore
              </h1>
            </Space>
          ) : (
            <Space>
              <h1
                style={{
                    ...titleStyle,
                  fontSize: "64px",
                  color: "white",
                 
                }}
              >
                The World is Yours
              </h1>
              <h1
                style={{
                    ...titleStyle,
                  fontSize: "64px",
                  color: "white",
                  
                  position: "absolute",
                  marginTop: "3%",
                  marginLeft: isLaptopScreen ? "-35%" : "-22%",
                  zIndex: 1,
                }}
              >
                To Explore
              </h1>
            </Space>
          )}
        </Col>

        <Row gutter={50}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} align="middle">
            <Image
              preview={false}
              src={A1} // Replace with your image URL
              style={image1Style}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} align="middle">
            <Image
              preview={false}
              src={A2} // Replace with your image URL
              style={image2Style}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ActivityHeroSection;
