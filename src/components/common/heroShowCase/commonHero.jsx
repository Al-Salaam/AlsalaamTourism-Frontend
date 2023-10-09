import { Row, Col,Typography } from 'antd';

import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

function CommonHero(prop) {
    const isSmallScreen = useMediaQuery({ maxWidth: 1000 });

    const containerStyle = {
        position: 'relative',
        height: isSmallScreen? '50vh': '50vh',
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
        textShadow: '0px 1.5589158535003662px 1.247132658958435px rgba(0, 0, 0, 0.08), 0px 3.7462916374206543px 2.99703311920166px rgba(0, 0, 0, 0.11), 0px 7.053934574127197px 5.643147945404053px rgba(0, 0, 0, 0.14), 0px 12.583013534545898px 10.066411018371582px rgba(0, 0, 0, 0.16), 0px 23.535144805908203px 18.828115463256836px rgba(0, 0, 0, 0.19), 0px 56.334346771240234px 45.06747817993164px rgba(0, 0, 0, 0.27)',
        fontFamily: 'Ubuntu',
        fontSize: isSmallScreen ? '8vw' : '3vw',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '112%', 
        letterSpacing: '4.48px',
        marginBottom: '10px', 
        marginTop: "120px",
    };

    const subTitleStyle = {
        color: '#FFF',
        textShadow: '0px 1.5589158535003662px 1.247132658958435px rgba(0, 0, 0, 0.08), 0px 3.7462916374206543px 2.99703311920166px rgba(0, 0, 0, 0.11), 0px 7.053934574127197px 5.643147945404053px rgba(0, 0, 0, 0.14), 0px 12.583013534545898px 10.066411018371582px rgba(0, 0, 0, 0.16), 0px 23.535144805908203px 18.828115463256836px rgba(0, 0, 0, 0.19), 0px 56.334346771240234px 45.06747817993164px rgba(0, 0, 0, 0.27)',
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
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: "2%" }}>
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
