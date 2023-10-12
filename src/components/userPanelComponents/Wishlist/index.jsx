import { Button, Card, Col, Row, Select } from 'antd';
import Photo from '../../../../images/4.png';
import {
  ClockCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons';

/* const { Meta } = Card; */

const Wishlist = () => {
  return (
    <>
      <Row >
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
          <h1>Wishlist</h1>
        </Col>
        </Row>
        <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ display: "flex", justifyContent: "flex-end", gap: "40px" }}>
          <Select
            name="cars"
            style={{ width: "200px", height: "40px", borderRadius: "10px" }}
            defaultValue="All"
          >
            <Select.Option value="All">All</Select.Option>
            <Select.Option value="Tour">Tour</Select.Option>
          </Select>
        </Col>
      </Row>



      <Row gutter={[12, 12]}xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card hoverable>
          <Row gutter={[12, 12]}xs={24} sm={24} md={24} lg={24} xl={24}>

              <Col xs={24} sm={24} md={5} lg={7} xl={7}>
                <img
                  alt="example"
                  src={Photo}
                  style={{ width: '100%', height: '200px', borderRadius: '20px 0 0 20px' }}
                />
              </Col>


              <Col xs={24} sm={24} md={12} lg={11} xl={11}>
                <h2>Fantastic Dubai Wedding Package with Camping in the Desert(5D/4N)</h2>
                <h3 style={{ color: "gray", marginTop: "5px" }}>On a fantastic honeymoon trip to Dubai, spend your first moments as a married couple and commemorate ...</h3>
              </Col>


              <Col xs={24} sm={24} md={7} lg={6} xl={6} style={{marginTop: '10px',}}>
                <Row style={{ display: "flex", justifyContent: "end" }}>
                  <CloseOutlined style={{ color: "red" }} />
                </Row>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <h2>City Trips</h2>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <ClockCircleOutlined /> <h3 style={{ color: "gray", marginLeft: "5px" }}>4 nights 5 Days</h3>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="large"
                    style={{
                      background: '#3B505A',
                      color: 'white',
                      borderRadius: '20px',
                      width: '180px',
                      marginTop: '40px',
                    }}
                  >
                    View Details
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card>
      </Row>
    </>
  )
}

export default Wishlist;
