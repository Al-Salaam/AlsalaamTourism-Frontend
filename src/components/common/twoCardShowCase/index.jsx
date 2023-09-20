import { Row, Col, Image, Space } from 'antd';
import styles from "./twoCard.module.css";
import SecFiveImg1 from "../../../../images/secFiveimg1.png";
import SecFiveImg2 from "../../../../images/secFiveimg2.png";
function TwoCardShowCase() {

    return (

        <Row style={{margin:"12% 0"}}>
            <Col span={24}>
        <Row className={styles.secFive}>
            <Col span={24} align="middle" justify="center" style={{ marginBottom: "-10%" }}>
                <Space >

                    <Image src={SecFiveImg1} style={{ marginLeft: "100px" }} />
                    <Image src={SecFiveImg2} />
                </Space>

            </Col>
        </Row>
        </Col>
        </Row>)
}
export default TwoCardShowCase