import React from 'react';
import { Row, Col, Divider, Image, Typography } from 'antd';

const ProfileComponent = () => {
    const {Title} = Typography;
  return (
    <>
      <Row gutter={16} style={{marginTop:"100px"}}>
        <Col span={12} align={"middle"}>
         <Image src={{}} alt={"image"} />
        </Col>
        <Col span={12} align={"middle"}>
        <Title level={3} >Name</Title>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={12} align={"middle"}>
        <Image src={{}} alt={"icon"} />
        </Col>
        <Col span={12} align={"middle"}>
        <Title level={5}>Dashboard</Title>
        </Col>
      </Row>
      </>
  );
};

export default ProfileComponent;
