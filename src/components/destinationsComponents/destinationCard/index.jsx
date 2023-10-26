import { Col, Row } from "antd";

const DestinationCard = (prop) => {
  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const cardStyle = {
    color: 'var(--Body-Text, #696969)',
    fontFamily: 'Ubuntu',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.5',
    letterSpacing: '1.26px',
    maxWidth: '100%', // Make sure the content doesn't exceed its container
    padding: '16px', // Add some padding for better spacing
  };

  return (
    <Row justify="center"> {/* Center the content horizontally */}
      <Col xs={24} sm={24} md={18} lg={16} xl={14}> {/* Adjust the number of columns per screen size */}
        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <p style={{margin:"10px 0 10px 0"}}>
              {prop.Paragraph}
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default DestinationCard;
