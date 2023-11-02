import { Row, Col, Image, Space } from 'antd';
import A1 from "../../../../images/activity1.png"
import A2 from "../../../../images/activityTwo.png"

import { useMediaQuery } from 'react-responsive';

const ActivityHeroSection = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 766 });
    const isLaptopScreen = useMediaQuery({ maxWidth: 1024 });
    const rowStyle = {
        background: 'linear-gradient(180deg, #70ADBB 0%, #018D97 100%)',
        overflowX: 'hidden',
        padding: isLaptopScreen ? '100px 30px 0 30px':'100px 0 0 0 '
    };

    const image1Style = {
        marginTop: "25%"
    };

    const image2Style = {

    };

    return (
        <>

            <Row justify="center" style={rowStyle}>
                <Col xs={24} sm={24} lg={24} xl={24} align='middle'>

                    {isSmallScreen ? <Space>
                        <h1 style={{
        fontSize: "64px",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", 
        marginBottom: "10px",      
      }}>The Word is Yours To Explore</h1>
                    </Space> : <Space>
                        <h1 style={{ fontSize: "64px", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",  }}>The Word is Yours</h1>
                        <h1 style={{
        fontSize: "64px",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", 
        position: "absolute",
        marginTop: "3%",
        marginLeft: isLaptopScreen ? "-35%" : "-22%",
        zIndex: 1,
      }}>To Explore</h1>
                    </Space>}


                </Col>

                <Row gutter={50}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} align='middle'>

                        <Image
                            preview={false}
                            src={A1} // Replace with your image URL
                            style={image1Style}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} align='middle'>
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
