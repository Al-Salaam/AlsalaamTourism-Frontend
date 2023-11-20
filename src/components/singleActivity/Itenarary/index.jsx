import { Row, Col, Image, Typography, Space } from 'antd';

import Img1 from "../../../../images/one.png"
import Img2 from "../../../../images/two.png"
import Img3 from "../../../../images/three.png"


const titleStyle = {
    fontFamily: "Ubuntu",
    
   
  };
function Itenary() {
    const { Title } = Typography

    return (
        <div style={{margin:'30px 30px 0 40px'}}>
            <Title level={1} style={titleStyle}>Itinerary</Title>
            <Space direction="vertical"  style={{ padding: '20px', }}>
                {/* First Row */}
                <Row gutter={[16, 0]}>
                    <Col span={4} xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Image src={Img1} alt="Image 1" width="70px" />
                    </Col>
                    <Col span={16} xs={16} sm={16} md={16} lg={16} xl={16} >
                       <Title level={5}  style={{...titleStyle, marginTop:"50px",marginLeft:"-35px"}}>Meet our guide at the pick-up point</Title>
                    </Col>
                </Row>

                {/* Second Row */}
                <Row gutter={[16, 0]}>
                    <Col span={16} xs={16} sm={16} md={16} lg={16} xl={16}>
                        <Title level={5} style={{...titleStyle, marginTop:"55px",marginRight:"-35px"}}>Embark on an exquisite and memorable tour/activity with our expert guide.</Title>
                    </Col>
                    <Col span={4} xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Image src={Img2} alt="Image 2" width="70px" />
                    </Col>
                </Row>

                {/* Third Row */}
                <Row gutter={[16, 0]}>
                    <Col span={4} xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Image src={Img3} alt="Image 3" width="70px" />
                    </Col>
                    <Col span={16} xs={16} sm={16} md={16} lg={16} xl={16}>
                        <Title level={5} style={{...titleStyle, marginTop:"50px",marginLeft:"-35px"}}>Return to hotel.</Title>
                    </Col>
                </Row>
            </Space>
        </div>


    )
}
export default Itenary