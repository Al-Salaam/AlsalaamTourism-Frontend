import { Row, Col,Typography } from 'antd';

import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

function CommonHero(prop) {
    const isSmallScreen = useMediaQuery({ maxWidth: 1000 });

    const containerStyle = {
        position: 'relative',
        height: isSmallScreen? '50vh': '70vh',
        backgroundImage: `url(${prop.image})`,
        padding: '4% 0 5%',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        
    };

    const titleContainerStyle = {
        
        
    };

    const titleStyle = {
        color: '#FFF',
        fontFamily: 'Ubuntu',
        fontSize: isSmallScreen ? '8vw' : '4vw',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '112%', 
        letterSpacing: '4.48px',
        marginBottom: '10px', 
        marginTop: "120px",
        textShadow:'2px 2px 2px rgba(0, 0, 0, 0.7)',
    };

    const subTitleStyle = {
        color: '#FFF',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)',
        fontFamily: 'Ubuntu',
        fontSize: isSmallScreen ? '4vw' : '1.3vw',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '100%', /* 31.36px */
        letterSpacing: '1.96px',
    };

    return (
        <div style={containerStyle}>
            <Row >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: "3%" }}>
                    <div style={titleContainerStyle}>
                        <Title style={titleStyle}>{prop.title1}</Title>
                        <Title style={subTitleStyle}>{prop.title2}</Title>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default CommonHero;
