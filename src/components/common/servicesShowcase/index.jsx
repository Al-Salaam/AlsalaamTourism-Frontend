import { useState, useEffect } from "react";
import { Row, Col, Typography, List, Modal } from "antd";
import Services from "../../../../images/ourServices.jpeg";
import { useMediaQuery } from "react-responsive";
import style from "./style.css";

const { Title } = Typography;

const data = [
  { id: 1, text1: "Travels & Tours" },
  { id: 2, text1: "Excursion Tickets" },
  { id: 3, text1: "Transfers" },
];

function ServicesShowCase(props) {
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
    query: "(max-width: 400px)", // Change this breakpoint as needed
  });

  const isMobileView = useMediaQuery({
    query: "(max-width: 425px)",
  });

  const isSmallScreen = useMediaQuery({ maxWidth: 1198 });

  const titleStyle = {
    fontFamily: "Ubuntu",
  };

  return (
    <>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{ padding: isSmallScreen ? "0 0 0 9%" : "4.5% 0 0 4%" }}
        >
          <Title style={{ ...titleStyle, marginLeft: "-1rem" }}>
            Our Services
          </Title>
          <p
            style={{
              ...titleStyle,
              paddingLeft: "2%",
              fontSize: "18px",
              marginBottom: "2%",
            }}
          >
            Al Salaam Tourism is a customer-oriented organization offering
            professional, world-class tourism solutions.
          </p>

          <List
            style={{ paddingLeft: "12%", borderBottom: "none" }}
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item) => (
              <List.Item className={style}>
                <div>
                  <span style={{ marginRight: "8px" }}>&#8226;</span>
                  <strong style={{ ...titleStyle }}>{item.text1}</strong>
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ padding: " 5%" }}>
          <div onClick={openVideoModal} style={{ cursor: "pointer" }}>
            {/* <video width="100%">
              <source src={props.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <img
              src={Services}
              style={{
                width: isMobileView ? "99%" : "100%",
                height: isMobileView ? "95%" : "100%",
                borderRadius: "15px",
              }}
            />
          </div>
        </Col>
      </Row>

      <Modal
        title="Our Services"
        visible={videoModalVisible}
        onCancel={closeVideoModal}
        footer={null}
        width={isMobile ? "" : "60vw"}
        style={{ margin: "0 auto" }}
      >
        <video id="videoElement" controls width="100%">
          <source src={props.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </>
  );
}

export default ServicesShowCase;
