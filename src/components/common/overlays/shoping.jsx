import React from 'react';
import { Row, Col, Divider, Image, Typography } from 'antd';
import PrimaryButton from "../buttons/primary"
const ShoppingComponent = () => {
    const { Title } = Typography;
    return (
        <>
            <Row gutter={16} style={{marginTop:"20px"}}>
                <Col span={12} align={"middle"}>
                    <Image src={{}} alt="image" />
                </Col>
                <Col span={12} >
                    <Title level={3}>Title</Title>
                    <Title level={5}>000AED</Title>
                </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
                <Col span={12} align={"middle"}>
                    <Title level={5}>SubTotal</Title>
                </Col>
                <Col span={12} align={"middle"}>
                    <Title level={5}>0000</Title>
                </Col>
            </Row>
            
            <Row justify={"start"}>
                <Col span={24} align={"middle"} style={{paddingTop:"50px"}}>
                    <PrimaryButton title={"Checkout"}  />
                </Col>
            </Row>
        </>
    );
};

export default ShoppingComponent;
