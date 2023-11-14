import { Col, Row } from "antd";
import PropTypes from "prop-types"; 
import PrimaryButton from "../../components/common/buttons/primary";
import BG from "../../../images/payment.png";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

const ActionMessage = (props) => {
  const containerStyle = {
    backgroundColor: "#4CAAB8",
    height: "100vh",
  };

  const rowStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${BG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: "5%",
    borderRadius: "35px 35px 35px 35px",
  };
  const titleStyle = {
    color: "white",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
    fontWeight: 700,
  };

  return (
    <div style={containerStyle}>
      <Row xs={24} sm={24} md={24} lg={24} xl={24} justify="center" align="center">
        <Col xs={22} sm={18} md={16} lg={12} xl={8} justify="center" align="center" style={rowStyle}>
          <Row xs={24} sm={24} md={24} lg={24} xl={24} justify="center" style={{ marginTop: "25%" }}>
            {props.icon}
          </Row>
          <Row xs={24} sm={24} md={24} lg={24} xl={24} justify="center" style={{ marginTop: "10%" }} >
            <Title style={titleStyle}> {props.title}</Title>
          </Row>
          <Row xs={24} sm={24} md={24} lg={24} xl={24} justify="center"  >
            <Col xs={18} sm={14} md={20} lg={20} xl={20}>
              <Title level={5} style={{ color: "white", fontWeight: 400, }}>
                {props.subTitle}
              </Title>
            </Col>
          </Row>
          <Row xs={24} sm={24} md={24} lg={24} xl={24} justify="center" style={{ margin: "4% 0 25% 0" }}>
          <Link to={'/user-panel/booking-history'}>
          <PrimaryButton title={"ok"} width="120px" />
          </Link>
            
          </Row>
        </Col>
      </Row>
    </div>
  );
}

ActionMessage.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default ActionMessage;
