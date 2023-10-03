import React from 'react';
import { Row, Col, Image, Space } from 'antd';

import A1 from "../../../../images/activity1.png"
import A2 from "../../../../images/activityTwo.png"

import { useMediaQuery } from 'react-responsive';

const ActivityHeroSection = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 766 });

    const rowStyle = {
        background: 'linear-gradient(180deg, #70ADBB 0%, #018D97 100%)',
        padding: '100px 0', // Adjust the padding as needed
        overflowX: 'hidden',
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
                        <h1 style={{ fontSize: "64px", color: "white" }}>The Word is Yours to Explore</h1>
                    </Space> : <Space>
                        <h1 style={{ fontSize: "64px", color: "white" }}>The Word is Yours</h1>
                        <h1 style={{ fontSize: "64px", color: "white", position: "absolute", marginTop: "3%", marginLeft: "-25%", zIndex: 1 }}>to Explore</h1>
                    </Space>}


                </Col>

                <Row gutter={50}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} align='middle'>

                        <Image
                            src={A1} // Replace with your image URL
                            style={image1Style}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} align='middle'>
                        <Image
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
