import React from 'react';
import { Row, Col, Image, Space } from 'antd';
import { useMediaQuery } from 'react-responsive';
import Image1 from "../../../../images/choose1.png"
import Image2 from "../../../../images/choose2.png"

const contentStyle1 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'left',
    marginTop:"5%"
};



const col2Style = {
    marginTop: "8%"
}

const ChooseUs = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 580px)', // Change this breakpoint as needed
    });
    const breakPoint1 = useMediaQuery({
        query: '(max-width: 869px)', // Change this breakpoint as needed
    });
    const breakPoint2 = useMediaQuery({
        query: '(max-width: 760px)', // Change this breakpoint as needed
    });
    const breakPoint3 = useMediaQuery({
        query: '(max-width: 760px)', // Change this breakpoint as needed
    });


    const titleStyle2 = {
        fontFamily: 'Ubuntu',
        fontSize: '120%',
        fontWeight: 400,
        lineHeight: '32px',
        letterSpacing: '0.07em',
        textAlign: 'start',
        
        

      };

    return (
        <div style={{width: "99%"}}>
        <Row gutter={16}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                
                <div style={contentStyle1}>
                        <Image preview={false} src={Image1} width={breakPoint1?"44vw":"27vw"} />
                        <Image preview={false} src={Image2}  width={breakPoint1?"42vw":"27vw"} style={{marginTop:"-50%",marginLeft:"25%"}}/>
                </div>
                
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>

                <div style={{ ...titleStyle2, textAlign: isMobile ? "center" : "" }} >
                    <h1 style={col2Style}>Why Choose Us?</h1>
                    <h3 style={col2Style}>Best Practices</h3>
                    <p>At Al Salaam Tourism, we offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards. This is due to our strong passion to provide cost-effective travel solutions that beat the prices, making sure that clients get premium value for their money.</p>
                    <h3 style={col2Style}>24 Hours Service</h3>
                    <p>We understand that travel takes place every day of the week and our customers might need to reach us at any time of the day, so we have ensured that we remain reachable at all times. Our staff is always available for inquiries, while our contacts remain open round the clock, all week long. This we do, to make sure that our quality service delivery isn’t time-restricted.</p>
                    <h3 style={col2Style}>100% Customer Satisfaction</h3>
                    <p>We craft out customer-specific, on-demand services to provide tested-and-trusted travel solutions to our esteemed clients. We go out of our way to design the right set of services, tailored to meet the specific needs of our clients, in order to provide them with a unique experience. This is what keeps us ahead of competitors and continues to further expand our customer base.</p>

                </div>

            </Col>
        </Row>
        </div>
    );
};

export default ChooseUs;
