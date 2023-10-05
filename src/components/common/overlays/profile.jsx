import React, { useEffect } from 'react';
import { Row, Col, Divider, Image, Typography } from 'antd';
import dashboardIcon from '../../../../images/dashboardicon.png'
const ProfileComponent = ({loading, user}) => {
  const { Title } = Typography;
 

  return (
    <>
      {loading ? "loading..." : (
        <>
          <Row gutter={16} style={{ marginTop: "100px" }}>
            <Col span={12} align={"middle"}>
              <Image src={user?.photo} alt={"image"} />
            </Col>
            <Col span={12} align={"middle"}>
              <Title level={3} >{user?.name}</Title>
            </Col>
          </Row>
          <Divider />
          <Row gutter={16}>
            <Col span={12} align={"middle"}>
              <Image src={dashboardIcon} alt={"icon"} />
            </Col>
            <Col span={12} align={"middle"}>
              <Title level={5}>Dashboard</Title>
            </Col>
          </Row>
        </>
      )}

    </>
  );
};

export default ProfileComponent;
