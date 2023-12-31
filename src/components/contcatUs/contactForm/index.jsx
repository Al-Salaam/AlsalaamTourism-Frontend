import { Row, Col, Typography, Input } from "antd";
import formcall from "../../../../images/formcall.svg";
import Contact from "../../../../images/ContactUS.png"
import contact2 from "../../../../images/contact2.png"
import Formmsg from "../../../../images/formmsg.svg";
import FormLoc from "../../../../images/formLoc.svg";
import PrimaryButton from "../../common/buttons/primary";
import "antd";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { contactAsync } from "../../../redux/actions/contact";
import toast from "react-hot-toast";
import {
  clearError,
  clearMessage,
} from "../../../redux/reducers/contactReducer";

const { TextArea } = Input;
const { Title } = Typography;

const formContainerStyle = {
  overflow: "hidden",
};

const circleStyle = {
  position: "absolute",

  height: "60px",
  width: "60px",
  backgroundColor: "#FFFFFF1F",
  borderRadius: "50%",
  fillOpacity: "0.13px",
};
const circleStyle2 = {
  position: "relative",

  height: "100px",
  width: "100px",
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
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.contactus);
  const isSmallestScreen = useMediaQuery({ maxWidth: 990 });

  const contactFunc = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !phoneNumber || !userMessage) {
      toast.error("Please fill out all the required fields.");
    } else {
      const contactData = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        phone: phoneNumber,
        message: userMessage,
      };
      dispatch(contactAsync(contactData));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setUserMessage("");
    }
  }, [error, message, toast, dispatch]);
  const isMobileScreen = useMediaQuery({ maxWidth: 600 });

  const isMobileScreen2 = useMediaQuery({ maxWidth: 900 });

  const isScreen = useMediaQuery({ maxWidth: 767 });

  const isScreen2 = useMediaQuery({ maxWidth: 1200 });

  return (
    <Row
      xs={24}
      sm={24}
      md={24}
      xl={24}
      lg={24}
      style={{
        marginBottom: "50px",
        backgroundColor: "white",
        borderRadius: "15px",
        marginLeft:isScreen2?"":"80px"
      }}
    >
      {/* Left Side */}
      <Col
        xs={24}
        sm={24}
        md={12}
        xl={10}
        lg={12}
        style={{
          textAlign: "right",
          justifyContent: "end",
          marginRight: isSmallestScreen ? "" : "0px",
          // marginLeft: isSmallestScreen ? "5px" : "-100px",
          display: "flex",
          // marginTop: "50px",
          // marginBottom: "50px",
          ...formContainerStyle,
        }}
      >
      { isScreen?
       <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              align={isMobileScreen ? "middle" : "end"}
            >
              <img src={contact2} alt="Al Salaam Tourism-contact us 1" style={{height:isMobileScreen2?"95%":"101%", width:isMobileScreen2?"100%":"70%"}}/>
            </Col>   : <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              align={isMobileScreen ? "middle" : "end"}
            >
              <img src={Contact} alt="Al Salaam Tourism-contact us 1" style={{height:isMobileScreen2?"95%":"101%", width:isMobileScreen2?"100%":"70%"}}/>
            </Col>  
          }
      </Col>

      {/* Right Side */}
      <Col
        xs={24}
        sm={24}
        md={12}
        xl={10}
        lg={10}
        style={{
          paddingTop: "2%",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px 0 0 0",
          // paddingTop: "50px",
          // marginBottom:"50px"
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
            marginRight: isSmallestScreen ? "" : "10px",
            marginLeft: isSmallestScreen ? "5px" : "20px",
          }}
        >
          <Col xs={23} sm={24} md={18} xl={9} lg={10}>
            <label htmlFor="FirstName" style={labelStyle}>
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                border: "none",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "110%",
                marginTop: "8%",
                fontSize: "16px",
              }}
            />
          </Col>

          <Col
            xs={23}
            sm={24}
            md={18}
            xl={9}
            lg={10}
            style={{ marginTop: isSmallestScreen ? "20px" : "" }}
          >
            <label htmlFor="LastName" style={labelStyle}>
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                border: "none",
                fontFamily: "Ubuntu",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "110%",
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
            marginRight: isSmallestScreen ? "" : "10px",
            marginLeft: isSmallestScreen ? "5px" : "20px",
          }}
        >
          <Col xs={23} sm={24} md={18} xl={9} lg={10}>
            <label htmlFor="Email" style={{ ...labelStyle }}>
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: "none",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "110%",
                marginTop: "8%",
                fontSize: "16px",
              }}
            />
          </Col>

          <Col
            xs={23}
            sm={24}
            md={18}
            xl={9}
            lg={10}
            style={{ marginTop: isSmallestScreen ? "20px" : "" }}
          >
            <label htmlFor="PhoneNumber" style={labelStyle}>
              Phone Number
            </label>
            <input
              type="number"
              id="PhoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{
                border: "none",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width: "110%",
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
            marginRight: isSmallestScreen ? "" : "10px",
            marginLeft: isSmallestScreen ? "5px" : "20px",
          }}
        >
          <Col xs={12} sm={13} md={9} xl={6} lg={9}>
            <label htmlFor="Message" style={labelStyle}>
              Message
            </label>
            <textArea
              rows={3}
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              style={{
                border: "none",
                borderBottom: "2px solid #ccc",
                outline: "none",
                width:isMobileScreen2?"230%": "340%",
                marginTop: "8%",
                fontSize: "12px",
              }}
            />
          </Col>
        </Row>

        <Row
          justify="end"
          style={{
            // marginTop: "5%",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          <Col
            xs={16}
            sm={20}
            md={14}
            xl={16}
            lg={16}
            align="middle"
            style={{ margin: "10% 0 10% 0" }}
          >
            <PrimaryButton
              clickHandler={contactFunc}
              title={<h4>{loading ? "loading..." : "Send Message"}</h4>}
              width="170px"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MyForm;
