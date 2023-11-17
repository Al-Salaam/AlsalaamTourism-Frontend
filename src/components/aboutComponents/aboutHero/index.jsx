
import { Row, Col, Modal } from 'antd';
import  { useState, useEffect } from 'react';
import PrimaryButton from "../../common/buttons/primary"
import { useMediaQuery } from 'react-responsive';
// import Services from "../../../../images/newdest.png";
import About from "../../../../images/about3.png"




const AboutHero = ({ description, videoSource }) => {
  const [videoModalVisible, setVideoModalVisible] = useState(false);


   

    const titleStyle2 = {
      fontFamily: 'Ubuntu',
      fontSize: '455%',
      fontWeight: 400,
      lineHeight: '72px',
      letterSpacing: '0.07em',
      textAlign: 'start',
      
      textShadow: '0px 1.5589158535003662px 1.247132658958435px rgba(0, 0, 0, 0.0759), ' +
        '0px 3.7462916374206543px 2.99703311920166px rgba(0, 0, 0, 0.1091), ' +
        '0px 7.053934574127197px 5.643147945404053px rgba(0, 0, 0, 0.135), ' +
        '0px 12.583013534545898px 10.066411018371582px rgba(0, 0, 0, 0.1609), ' +
        '0px 23.535144805908203px 18.828115463256836px rgba(0, 0, 0, 0.1941), ' +
        '0px 56.334346771240234px 45.06747817993164px rgba(0, 0, 0, 0.27)',
    };

  useEffect(() => {
    if (videoModalVisible) {
      document.getElementById("videoElement").play();
    }
  }, [videoModalVisible]);

  const openVideoModal = () => {
    setVideoModalVisible(true);
  };

  const closeVideoModal = () => {
    setVideoModalVisible(false);
    // Pause the video when closing the modal
    document.getElementById("videoElement").pause();
  };

  const isVideoBorder = useMediaQuery({
    query: '(max-width: 767px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 1305px)', // Change this breakpoint as needed
  });


  const isTablet = useMediaQuery({
    query: '(max-width: 1421px)', // Change this breakpoint as needed
  });

 

  const isMobileView2 = useMediaQuery({
    query: '(max-width: 1305px)', // Change this breakpoint as needed
  });


  const titleStyle = {
    fontFamily: 'Ubuntu',
    fontSize: isMobileView2 ? "220%" : "400%",
    fontWeight: 700,
    lineHeight: '72px',
    letterSpacing: '0.07em',
    textAlign: 'start',
    marginLeft: "1%",
    textShadow: '0px 1.5589158535003662px 1.247132658958435px rgba(0, 0, 0, 0.0759), ' +
      '0px 3.7462916374206543px 2.99703311920166px rgba(0, 0, 0, 0.1091), ' +
      '0px 7.053934574127197px 5.643147945404053px rgba(0, 0, 0, 0.135), ' +
      '0px 12.583013534545898px 10.066411018371582px rgba(0, 0, 0, 0.1609), ' +
      '0px 23.535144805908203px 18.828115463256836px rgba(0, 0, 0, 0.1941), ' +
      '0px 56.334346771240234px 45.06747817993164px rgba(0, 0, 0, 0.27)',
  };


  return (
   
    <Row   >
      
      <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{borderBottom:isVideoBorder ? "0px":"3px white solid" , paddingBottom: isTablet ? "20px" : "", color: "white", background: 'linear-gradient(180deg, #70ADBB 0%, #018D97 100%)', padding: isMobile ? "10% 7% 7% 7%" : "7% 7% 7% 2% ",}}>
        <div><h1 style={{ ...titleStyle , marginTop: isMobile ? "10%" : "8%" }}>About Alsalaam</h1></div>
        <div><p style={{ ...titleStyle2, margin: "4%", fontSize: isTablet ? "15px" : "15px", marginBottom: isTablet ? "10px" : "10px", lineHeight:isMobile?"120%":"120%", marginRight:"8%"}}>Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions. We enjoy a stellar reputation of excellence in Dubai's tourism sector. We place the needs of our clients first and go the extra mile in ensuring our customer’s travel experience is laced with comfort and beautiful memories that endure for a lifetime.</p></div>
        <div style={{ marginTop:isMobile?"5%":"4%", marginLeft:"1%"}}><PrimaryButton title={<h3>Explore Destination</h3>} width="200px" /></div>
      </Col>

    
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
      
        <div onClick={openVideoModal} style={{ cursor: 'pointer' }}>
         
          <img src={About} style={{ width: "100%",height:"65vh" }} />
        </div>

      </Col>
      <Modal
        title="About US"
        visible={videoModalVisible}
        onCancel={closeVideoModal}
        footer={null}
        width={isMobile ? "" : "60vw"}
        style={{...titleStyle2, margin: "0 auto" }}
      >
        <video id="videoElement" controls width="100%">
          <source src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </Row>
  
  );
};

export default AboutHero;
