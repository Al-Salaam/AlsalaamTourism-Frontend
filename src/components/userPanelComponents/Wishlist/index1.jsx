import { Button, Card, Col, Row } from "antd"
import Photo from "../../../../images/4.png"
import {
  ClockCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const Wishlist = () => {
  return (
    <>

      <Row>
        <Col
          xs={24}
          md={12}
          sm={24}
          lg={12}
          xl={12}
          style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
        > <h1>Wishlist</h1> </Col>
      </Row>



      <Row style={{ display: "flex", justifyContent: "flex-end", gap: "40px" }}>
        <select name="cars" id="cars" style={{ width: "200px", height: "40px", borderRadius: "10px" }}>
          <option value="Activity">All</option>
          <option value="Tour">Tour</option>
        </select>
      </Row>

      <Row>

        <Col span={19}>
          <Card hoverable >
            <div style={{ display: 'flex' }}>
              <Col md={7} >
                <img
                  alt="example"
                  src={Photo} // Replace 'Photo' with the actual image source
                  style={{ width: '350px', height: '200px', borderRadius: '20px 0 0 20px' }}
                />
              </Col>
              <Col md={11}>


                <h2>Fantastic Dubai Wedding Package with Camping in the Desert(5D/4N)</h2>
                <h3 style={{ color: "gray", marginTop: "5px" }}>On a fantastic honeymoon trip to Dubai, spend your first moments as a married couple and commemorate ..."</h3>


              </Col>
              <Col md={6} >

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
                      margin: '40px 0 0 0',
                    }}
                  >
                    View Details
                  </Button>
                </Row>
              </Col>
            </div>
          </Card>

        </Col>
      </Row>



    </>
  )
}

export default Wishlist