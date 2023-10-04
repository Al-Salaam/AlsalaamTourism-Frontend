import { Row, Col } from 'antd';
import ContactMap from "../../../../images/contactMap.png";

const Map = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '70vh' }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={ContactMap}
            alt="Map"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Map;
