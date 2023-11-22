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
        <div style={{display:"flex",flexDirection:"column"}}>
          <Row  style={{ marginTop: "80px" }}>
            <Col span={8} align={"middle"}>
              <Image src={user?.photo} alt={"image"} style={{width:"70px",height:"70px"}} />
            </Col>
            <Col span={14} align={"left"}>
              <Title level={3} >{user?.name}</Title>
            </Col>
          </Row>
          <Divider/>
          </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>
          <Row >
            
            <Col span={24} align={"left"}>
              <Link to={'/user-panel/user-form'}>
             
              <Title style={{cursor: 'pointer'}} level={5}> <Image src={dashboardIcon} alt={"icon"} preview={false}/>Dashboard</Title>
              </Link>
            </Col>
          </Row>
        </div>
        </>
      )}

    </>
  );
};

export default ProfileComponent;
