
import { Row, Col, Modal } from 'antd';
import  { useState, useEffect } from 'react';
import PrimaryButton from "../../common/buttons/primary"
import { useMediaQuery } from 'react-responsive';
import Services from "../../../../images/aboutModel.png";


const AboutHero = ({ description, videoSource }) => {
  const [videoModalVisible, setVideoModalVisible] = useState(false);

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

  const isMobile = useMediaQuery({
    query: '(max-width: 1305px)', // Change this breakpoint as needed
  });
  const isTablet = useMediaQuery({
    query: '(max-width: 1421px)', // Change this breakpoint as needed
  });
  return (
    <Row   >
      
      <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{borderBottom:"3px white solid" , paddingBottom: isTablet ? "20px" : "", color: "white", background: 'linear-gradient(180deg, #70ADBB 0%, #018D97 100%)', padding: isMobile ? "" : "7%" }}>
        <h1 style={{ marginTop: isMobile ? "11%" : "1%" }}>About Alsalaam</h1>
        <p style={{ margin: "2%", fontSize: isTablet ? "10px" : "15px", marginBottom: isTablet ? "10px" : "10px" }}>Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions. We enjoy a stellar reputation of excellence in Dubai's tourism sector. We place the needs of our clients first and go the extra mile in ensuring our customer’s travel experience is laced with comfort and beautiful memories that endure for a lifetime.</p>
        <PrimaryButton title={"Explore Destination"} width="200px" />
      </Col>

    
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
      
        <div onClick={openVideoModal} style={{ cursor: 'pointer' }}>
         
          <img src={Services} style={{ width: "100%",height:"45vh" }} />
        </div>

      </Col>
      <Modal
        title="Our Services"
        visible={videoModalVisible}
        onCancel={closeVideoModal}
        footer={null}
        width={isMobile ? "" : "60vw"}
        style={{ margin: "0 auto" }}
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
