import { Row, Col, Image, Space, Typography } from 'antd';
import Sec3img1 from "../../../../images/Abu_Dhabi-removebg.png";
import Sec3img2 from "../../../../images/sec3img2.png";
import Sec3img3 from "../../../../images/sec3img3.png";
import PrimaryButton from '../buttons/primary';
import { Link } from 'react-router-dom';

const { Title } = Typography;

function ThreeCardShowCase(){
    return(
        <Row style={{ marginTop: 80, background: 'linear-gradient(180deg, #89A7B2 0%, #028B95 100%)', }}>

        <Col span={24} align="middle" justify="center" style={{ marginTop: "-100px",paddingBottom:"5%" }}>
            <Title level='5'>Destinations</Title>
            <Space>
                <Image
                    src={Sec3img1}
                    alt="Image 1"
                    style={{ margin: 0, padding: 0, maxWidthwidth: "100%", top: 0, left: "35%", position: "relative" }}
                />
                <Image
                    src={Sec3img2}
                    alt="Image 2"
                    style={{ margin: 0, padding: 0, maxWidthwidth: "100%", position: "relative", zIndex: "1" }}
                />
                <Image
                    src={Sec3img3}
                    alt="Image 3"
                    style={{ margin: 0, padding: 0, maxWidthwidth: "100%", top: 0, right: "32%", position: "relative", }}
                />
            </Space>
            <Title level='5' style={{marginTop:"5%"}}></Title>
            <Link to="/destinations"><PrimaryButton title={<h4>View All</h4>}/></Link>
        </Col>

    </Row>
    )
}
export default ThreeCardShowCase;