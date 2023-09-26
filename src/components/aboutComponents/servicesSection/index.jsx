import React from 'react';
import { Row, Col, Card } from 'antd';

const ServicesSection = () => {
    return (
        <Row style={{ paddingTop: "5%" }}>
            <Col span={8}>

                <div style={{ backgroundColor: '#f0f0f0', padding: '16px' }}>
                    <h2>Our Serrvices</h2>
                    <p>Regardless of your location at any time, you can access all of our tour packages and enjoy the same top-quality service. You can also partake in all our offerings and promotions. This is because we are driven to make your comfort our obsession and your satisfaction our daily assignment.</p>
                </div>
            </Col>
            <Col span={16} style={{ background: 'linear-gradient(to bottom, #70ADBB 50%, #70ADBB 50%, #FFFFFF 50%, #FFFFFF 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width:"30%", background: 'blue', textAlign: 'center',margin:"5%" }}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eos. Porro, doloremque. Officia, odit velit distinctio possimus veritatis nihil at iste! Illo, provident eius quidem aliquam odio eaque, consectetur animi iure rem fugit tenetur! Hic, rerum? Sit beatae nisi eos sapiente tenetur corporis perspiciatis mollitia, ad, expedita eaque dignissimos repellendus.
                   </div>
                   <div style={{ width:"30%", background: 'blue', textAlign: 'center',margin:"5%" }}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eos. Porro, doloremque. Officia, odit velit distinctio possimus veritatis nihil at iste! Illo, provident eius quidem aliquam odio eaque, consectetur animi iure rem fugit tenetur! Hic, rerum? Sit beatae nisi eos sapiente tenetur corporis perspiciatis mollitia, ad, expedita eaque dignissimos repellendus.
                   </div>
                   <div style={{ width:"30%", background: 'blue', textAlign: 'center',margin:"5%" }}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eos. Porro, doloremque. Officia, odit velit distinctio possimus veritatis nihil at iste! Illo, provident eius quidem aliquam odio eaque, consectetur animi iure rem fugit tenetur! Hic, rerum? Sit beatae nisi eos sapiente tenetur corporis perspiciatis mollitia, ad, expedita eaque dignissimos repellendus.
                   </div>
            </Col>
        </Row>
    );
};

export default ServicesSection;
