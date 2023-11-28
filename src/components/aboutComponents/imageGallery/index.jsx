import React from 'react';
import {Image, Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import PrimaryButton from '../../common/buttons/primary';

const ImageGallery = ({images}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 501px)', // Change this breakpoint as needed
  });
  const is_Medium_Screen = useMediaQuery({
    query: '(max-width: 1123px)', // Change this breakpoint as needed
  });
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop:isMobile?"20px": "40px",
    marginBottom:isMobile?"20px": "80px",
    marginLeft:isMobile?"": "2.5%",
    marginRight:isMobile?"": "8%",
    

  };
  

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    margin: '5px',
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const smallBoxStyle = {
    flex: '1',
    margin: '5px',
    
  };

  const bigBoxStyle = {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
    marginLeft: isMobile?"":'10px',
    marginRight:isMobile?"": '80px',
    marginTop:isMobile?"2px": '5px',
    marginBottom:isMobile?"2px": '9px',
    
  };
  
  const halfHeightStyle = {
    flex: '0.7',
    margin: '5px',
    
  };

  const thirdHeightStyle = {
    margin: '5px',

    width:"100%"
  };

  const StyleOur = {
    marginLeft:"4%",
    marginRight:"",
    fontFamily: "Ubuntu",
 

  }

  return (
    <>
    <Row style={{margin:"2% 1%"}}>
      <Col  xs={24} sm={24} md={12} lg={12} xl={12} align={isMobile ? "middle" :""}><h1 style={StyleOur}>Our Gallery</h1> <p style={{...StyleOur, marginTop:"2%", marginBottom:"0%",fontSize:isMobile?"":"20px"}}>We bring to the fore all our expertise to make your </p> <p style={{marginLeft:"4%",marginRight:"",fontFamily: "Ubuntu",fontSize:isMobile?"":"20px"}}>journey very comfortable.</p></Col>
      {/* <Col  xs={24} sm={24} md={12} lg={12} xl={12} align={isMobile ? "middle" :"right"}><PrimaryButton width='200px'title={"Open Gallery"}/></Col> */}
    </Row>
    <div style={containerStyle}>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <div style={halfHeightStyle}>
            <Image src={images[0]} alt='Al Salaam Tourism-about us 11' width="100%" height="100%"/>
          </div>
          <div style={halfHeightStyle}>
          <Image src={images[1]} alt='Al Salaam Tourism-about us 12' width="100%" height="100%"/>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={smallBoxStyle}>
          <Image src={images[2]} alt='Al Salaam Tourism-about us 13' width="100%" height="100%"/>
          </div>
        </div>
        <div style={{...columnStyle, marginTop:"0.5%"}}>
          <div style={{height:"68%",marginTop:is_Medium_Screen ? "6px" : ""}}>
          <Image src={images[3]} alt='Al Salaam Tourism-about us 14' width="100%" height="99%"/>
          </div>
          <div style={{height:"40%", marginTop:"5%"}}>
          <Image src={images[4]} alt='Al Salaam Tourism-about us 15' width="100%" height="99%"/>
          </div>
        </div>
        <div style={bigBoxStyle}>
          <div style={halfHeightStyle}>
          <Image src={images[5]} alt='Al Salaam Tourism-about us 16' width="100%" height="100%"/>
          </div>
          <div style={{display:"flex"}}>
          <div style={thirdHeightStyle}>
          <Image src={images[6]} alt='Al Salaam Tourism-about us 17' width="100%" />
          </div>
          <div style={thirdHeightStyle}>
          <Image src={images[7]} alt='Al Salaam Tourism-about us 18' width="100%" />
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ImageGallery;
