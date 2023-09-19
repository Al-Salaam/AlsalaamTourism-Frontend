
import { Row, Col, Image, Space, Typography, Button, Input, ConfigProvider } from 'antd';
import styles from "./heroShowCase.module.css";
import image1 from "../../../../images/image1.png";
import image2 from "../../../../images/image2.png";
import image3 from "../../../../images/image3.png";

import PrimaryButton from '../buttons/primary';
const {Title} = Typography
function HeroShowCase() {
    return (<>
        <Row className={styles.hero}>
            <Col span={10}  style={{paddingLeft:"10%"}} >
                <Title style={{fontSize:74,color:"white"}}>Dream | Explore | Discover</Title>
                <Title style={{fontSize:24,color:"white"}}>Get the best prices on all excurssions and<br/> activities across UAE.</Title>
                <PrimaryButton   title={<h3>Explore Now</h3>}/>
                </Col>
            <Col span={14}  >
                <Space>
                    <Image
                        src={image1}
                        alt="Image 1"
                        style={{ margin: 0, padding: 0, top: 0, left: "30%", position: "relative" }}
                    />
                    <Image
                        src={image2}
                        alt="Image 2"
                        style={{ margin: 0, padding: 0,  position: "relative", zIndex: "1" }}
                    />
                    <Image
                        src={image3}
                        alt="Image 3"
                        style={{ margin: 0, padding: 0,  top: 0, right: "20%", position: "relative", }}
                    />
                </Space>
            </Col>

        </Row>


    </>)
}
export default HeroShowCase