import { Row, Col, Image, Space, Typography } from 'antd';
import styles from "./twoCard.module.css";
import SecFiveImg1 from "../../../../images/secFiveimg1.png";
import SecFiveImg2 from "../../../../images/secFiveimg2.png";
import TopDeal1 from "../../../../images/topDeal1.png";
import TopDeal2 from "../../../../images/topDeal2.png";
import { useMediaQuery } from 'react-responsive';

const {Title} = Typography;
function TwoCardShowCase() {

    const isSmallestScreen = useMediaQuery({ maxWidth: 430 });

    return (

        <Row style={{ margin: "12% 0" }}>
            <Col span={24}>
                <Row className={styles.secFive} align="middle" justify="center"  >
                    <Title style={{color:"White"}}>Top Deals</Title>
                    <Col span={24} align="middle" justify="center" style={{ marginBottom: "-10%", }}>
                        {isSmallestScreen ? 
                        <Row > 
                            <Col span={24}>
                            <Image  src={TopDeal1} style={{marginBottom:"15%", marginTop:"5%"}} />
                            </Col>
                            <Col span={24}>
                            <Image  src={TopDeal2}  />
                            </Col>
                            </Row> :

                            <Space>
                                <Image src={SecFiveImg1} />
                                <Image src={SecFiveImg2} style={{ marginLeft: "-15%" }} />
                            </Space>}


                    </Col>
                </Row>
            </Col>
        </Row>)
}
export default TwoCardShowCase