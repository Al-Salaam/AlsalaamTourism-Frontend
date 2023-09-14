import withNavbar from "../../components/common/HOCNabar";
import styles from "./home.module.css";
import { Row, Col, Image, Space } from 'antd';
import image1 from "../../../images/image1.png"
import image2 from "../../../images/image2.png"
import image3 from "../../../images/image3.png"
function Home() {

    return (
        <>
            <div className={styles.hero}>
                <Row >
                    <Col span={10} align="middle" justify="center" >hello</Col>
                    <Col span={14}  >
                    <Space> 
                        <Image
                            src={image1} 
                            alt="Image 1"
                            style={{ margin: 0, padding: 0,maxWidthwidth: "100%",top: 0,left: "30%",position: "relative"}}
                        />
                        <Image
                            src={image2} 
                            alt="Image 2"
                            style={{ margin: 0, padding: 0,maxWidthwidth: "100%",position: "relative",zIndex:"1"}}
                        />
                        <Image
                            src={image3} 
                            alt="Image 3"
                            style={{ margin: 0, padding: 0,maxWidthwidth: "100%",top: 0,right: "20%",position: "relative", }}
                        />
                    </Space>
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default withNavbar(Home)