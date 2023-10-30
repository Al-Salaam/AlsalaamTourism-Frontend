import React from 'react';
import {Image, Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import PrimaryButton from '../../common/buttons/primary';

const ImageGallery = ({images}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 501px)', // Change this breakpoint as needed
  });
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom:"20px"
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
    
  };

  const halfHeightStyle = {
    flex: '0.7',
    margin: '5px',
    
  };

  const thirdHeightStyle = {
    margin: '5px',

    width:"100%"
  };

  return (
    <>
    <Row style={{margin:"2% 1%"}}>
      <Col  xs={24} sm={24} md={12} lg={12} xl={12} align={isMobile ? "middle" :""}><h1>Our Gallery</h1> <p>We bring to the fore all our expertise to make your journey very comfortable.</p></Col>
      {/* <Col  xs={24} sm={24} md={12} lg={12} xl={12} align={isMobile ? "middle" :"right"}><PrimaryButton width='200px'title={"Open Gallery"}/></Col> */}
    </Row>
    <div style={containerStyle}>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <div style={halfHeightStyle}>
            <Image src={images[0]} width="100%" height="100%"/>
          </div>
          <div style={halfHeightStyle}>
          <Image src={images[1]} width="100%" height="100%"/>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={smallBoxStyle}>
          <Image src={images[2]} width="100%" height="100%"/>
          </div>
        </div>
        <div style={{...columnStyle, marginTop:"0.7%"}}>
          <div style={{height:"68%"}}>
          <Image src={images[3]} width="100%" height="99%"/>
          </div>
          <div style={{height:"40%", marginTop:"5%"}}>
          <Image src={images[4]} width="100%" height="99%"/>
          </div>
        </div>
        <div style={bigBoxStyle}>
          <div style={halfHeightStyle}>
          <Image src={images[5]} width="100%" height="100%"/>
          </div>
          <div style={{display:"flex"}}>
          <div style={thirdHeightStyle}>
          <Image src={images[6]} width="100%" />
          </div>
          <div style={thirdHeightStyle}>
          <Image src={images[7]} width="100%" />
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ImageGallery;
