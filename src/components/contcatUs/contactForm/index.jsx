import { Form, Input, Row, Col, Typography, Space } from "antd";
import formcall from "../../../../images/formcall.svg";
import Formmsg from "../../../../images/formmsg.svg";
import FormLoc from "../../../../images/formLoc.svg";
import PrimaryButton from "../../common/buttons/primary";
import "antd";
import { useMediaQuery } from "react-responsive";

const { Title } = Typography;

const formContainerStyle = {
  
  borderRadius: "20px",
  overflow: "hidden",
};

const circleStyle = {
  position: "absolute",
  top: "155px",
  left: "200px",
  height: "129px",
  width: "129px",
  backgroundColor: "#FFFFFF1F",
  borderRadius: "50%",
  fillOpacity: "0.13px",
};
const circleStyle2 = {
  position: "relative",
  top: "180px",
  left: "90px",

  height: "200px",
  width: "200px",
  backgroundColor: "#FFFFFF1F",
  borderRadius: "50%",
  fillOpacity: "0.13px",
};

const labelStyle = {
  marginBottom: "8px",
  fontFamily: "Ubuntu, sans-serif",
  fontWeight: "bold",
  
};

const MyForm = () => {
  const isSmallestScreen = useMediaQuery({ maxWidth: 990 });
  return (
    <Row >
    
      <Col
        xs={24}
        sm={24}
        md={21}
        xl={12}
        lg={12}
        style={{
          textAlign: "right",
          justifyContent: "flex-end",
          marginRight: isSmallestScreen? "":"200px",
          marginLeft: isSmallestScreen ? "5px" : "-100px",
       
          display: "flex",
          marginTop: "50px",
          marginBottom: "50px",
          
          ...formContainerStyle,
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={14}
          xl={12}
          lg={18}
          style={{
            background: "linear-gradient(to bottom, #70ADBB, #018D97)",
            flex: 1,
            padding: "4%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            position: "relative",
            borderRadius: "20px",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={24} xl={20} align="middle">
            <Title
              level={3}
              style={{
                color: "white",
                fontFamily: "Ubuntu",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "100%",
              }}
            >
              Contact Information
            </Title>
          </Col>
          <Col xs={24} sm={24} md={19} lg={24} xl={17} align="middle">
            <Title
              style={{
                color: "#C9C9C9",
                fontFamily: "Ubuntu",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "140%",
                marginBottom: "30px",
              }}
            >
              Here’s how you can reach us.
            </Title>
          </Col>
          <Row style={{ marginBottom: "30px" }}>
            <Col xs={24} sm={12} md={24} lg={12} xl={2} align="middle">
              <img src={formcall} alt="Phone" />
            </Col>

            <Col xs={24} sm={12} md={24} lg={12} xl={10} align="middle">
              <Title
                level={5}
                style={{
                  color: "#FFF",
                  fontFamily: "Ubuntu",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                +971 4 320 5652
              </Title>
            </Col>
          </Row>
          <Row style={{ marginBottom: "30px" }}>
            <Col xs={24} sm={12} md={24} lg={12} xl={2} align="middle">
              <img src={Formmsg} alt="Phone" />
            </Col>

            <Col xs={24} sm={12} md={24} lg={12} xl={15} align="middle">
              <Title
                level={5}
                style={{
                  color: "#FFF",
                  fontFamily: "Ubuntu",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                info@alsalaamtourism.com
              </Title>
            </Col>
          </Row>
          <Row style={{ marginBottom: "30px" }}>
            <Col xs={24} sm={12} md={24} lg={12} xl={2} align="middle">
              <img src={FormLoc} alt="Location" />
            </Col>

            <Col xs={24} sm={12} md={24} lg={12} xl={21} align="middle">
              <Title
                level={5}
                style={{
                  color: "#FFF",
                  fontFamily: "Ubuntu",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Office 17, Awazel Building, Ras Al Khor 2 Manama St, Dubai, UAE.
              </Title>
            </Col>
            <Col
              xs={22}
              sm={12}
              md={24}
              lg={12}
              xl={24}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div style={circleStyle}></div>
              <div style={circleStyle2}></div>
            </Col>
          </Row>
        </Col>
      </Col>

      <Col
        xs={24}
        sm={24}
        md={20}
        xl={10}
        lg={8}
        style={{
          marginTop: "4%",
          
        
        }}
      >
        <Row
          gutter={50}
          style={{
            color: "var(--Body-Text, #696969)",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",

            marginRight: isSmallestScreen ? "" : "90px",
            marginLeft: isSmallestScreen ? "5px" : "-100px",

            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          <Col xs={23} sm={24} md={18} xl={9} lg={14}>
            <label htmlFor="FirstName" style={labelStyle}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              style={{
                border: "none",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "100%",
                marginTop: "8%",
                fontSize: "16px",
              }}
            />
          </Col>

          <Col xs={23} sm={24} md={18} xl={9} lg={14} style={{marginTop:isSmallestScreen? "20px":""}}>
            <label htmlFor="LastName" style={labelStyle}>
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              style={{
                border: "none",
                fontFamily: "Ubuntu",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "100%",
                marginTop: "8%",
                fontSize: "16px",
              }}
            />
          </Col>
        </Row>

        <Row
          justify="start"
          gutter={50}
          style={{
            marginTop: "5%",
            color: "var(--Body-Text, #696969)",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            marginRight: isSmallestScreen ? "" : "90px",
            marginLeft: isSmallestScreen ? "5px" : "-100px",

            marginBottom: "20px",
          }}
        >
          <Col xs={23} sm={24} md={18} xl={9} lg={14}>
            <label htmlFor="Email" style={{ ...labelStyle }}>
              Email
            </label>
            <input
              type="text"
              id="email"
              style={{
                border: "none",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "100%",
                marginTop: "8%",
                fontSize: "16px",
              }}
            />
          </Col>

          <Col xs={23} sm={24} md={18} xl={9} lg={14} style={{marginTop:isSmallestScreen? "20px":""}}>
            <label htmlFor="PhoneNumber" style={labelStyle}>
              Phone Number
            </label>
            <input
              type="text"
              id="PhoneNumber"
              style={{
                border: "none",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "100%",
                marginTop: "8%",
                fontSize: "16px",
              }}
            />
          </Col>
        </Row>

        <Row
          justify="start"
          gutter={50}
          style={{
            marginTop: "5%",
            color: "var(--Body-Text, #696969)",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            marginRight: isSmallestScreen ? "" : "90px",
            marginLeft: isSmallestScreen ? "5px" : "-100px",

            marginBottom: "20px",
          }}
        >
          <Col xs={12} sm={13} md={9} xl={6} lg={9}>
            <label htmlFor="Message" style={labelStyle}>
              Message
            </label>
            <input
              type="text"
              id="Message"
              style={{
                border: "none",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "200%",
                marginTop: "8%",
                marginBottom: "4%",
                fontSize: "16px",
              }}
            />
          </Col>
        </Row>

        <Row
          justify="end"
          gutter={50}
          style={{
            marginTop: "5%",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          <Col xs={16} sm={20} md={14} xl={15} lg={16}>
            <PrimaryButton title={<h4>Send Message</h4>} width="170px" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MyForm;
