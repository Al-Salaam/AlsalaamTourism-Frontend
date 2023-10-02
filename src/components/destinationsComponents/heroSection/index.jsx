import { Row, Col, Typography } from "antd";
import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

const Hero = (prop) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 562 });

  return (
    <Row
      style={{
        paddingTop: isSmallScreen ? "20%" : "28%", // Adjust padding for smaller screens
        paddingBottom: isSmallScreen ? "2%" : "5%", // Adjust padding for smaller screens
        backgroundImage: `url("${prop.imageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
        align="middle"
        justify="center"
        style={{
          marginTop: isSmallScreen ? "40px" : "-100px", // Adjust margin for smaller screens
          paddingBottom: isSmallScreen ? "40%" : "12%", // Adjust padding for smaller screens
        }}
      >
        <Title
          level={5}
          style={{
            color: "white",
            fontFamily: "Ubuntu",
            fontWeight: 700,
            lineHeight: isSmallScreen ? "80px" : "72.68px", // Adjust line height for smaller screens
            letterSpacing: isSmallScreen ? "5px" : "6.48px", // Adjust letter spacing for smaller screens
            wordWrap: "break-word",
            background: "transparent",
            fontSize: isSmallScreen ? "8vw" : "4vw", // Adjust font size for smaller screens
          }}
        >
          {prop.Heading}
        </Title>
      </Col>
    </Row>
  );
};


export default Hero;
