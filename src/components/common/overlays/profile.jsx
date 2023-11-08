import React, { useEffect } from 'react';
import { Row, Col, Divider, Image, Typography } from 'antd';
import dashboardIcon from '../../../../images/dashboardicon.png'
import { Link } from 'react-router-dom';
const ProfileComponent = ({loading, user}) => {
  const { Title } = Typography;
 

  return (
    <>
      {loading ? "loading..." : (
        <>
          <Row  style={{ marginTop: "80px" }}>
            <Col span={8} align={"middle"}>
              <Image src={user?.photo} alt={"image"} style={{width:"70px",height:"70px"}} />
            </Col>
            <Col span={12} align={"left"}>
              <Title level={3} >{user?.name}</Title>
            </Col>
          </Row>
          <Divider/>
          <Row >
            <Col span={8} align={"middle"}>
              <Image src={dashboardIcon} alt={"icon"} />
            </Col>
            <Col span={12} align={"left"}>
              <Link to={'/user-panel/user-form'}>
              <Title style={{cursor: 'pointer'}} level={5}>Dashboard</Title>
              </Link>
            </Col>
          </Row>
        </>
      )}

    </>
  );
};

export default ProfileComponent;
