import React from 'react';
import { Row, Col, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';
import NotFoundImage from "../../../images/notfound.png";
import Arrow from "../../../images/backArrow.png";

const styles = {
  background: {
    backgroundImage: `url(${NotFoundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:"100vh"
  },
  text:{
    color:"white",
    margin:"0",
    padding:"0",
    lineHeight:"150px"
  }
};

const NotFoundComponent = () => {

const {Title} = Typography
const isMobile = useMediaQuery({
    query: '(max-width: 467px)'
  });   

  return (
    <Row style={{...styles.background, display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Col >
        <Title level={3} style={styles.text}>ERROR</Title>
        <Title level={5} style={{...styles.text,fontSize: isMobile ? "49vw": "2000%"}}>404</Title>
        <Title level={5} style={{...styles.text,marginLeft: isMobile ? "" : "300px",fontSize:"24px"}}><div style={{lineHeight:"35px",margin:isMobile ? "" :"25% auto"}}>Something Went <br/> Wrong</div></Title>
        <Title level={5} style={{...styles.text, textAlign:"center",marginTop:"15%"}}><a href='/' style={styles.text}><h3 style={{color:"white",padding:"0",margin:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>Back<img width={"50px"} src = {Arrow}/></h3></a></Title>
      </Col>
    </Row>
  );
};

export default NotFoundComponent;
