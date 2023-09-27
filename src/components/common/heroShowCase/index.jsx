
import { Row, Col, Image, Space, Typography } from 'antd';
import styles from "./heroShowCase.module.css";
import image1 from "../../../../images/image1.png";
import image2 from "../../../../images/image2.png";
import image3 from "../../../../images/image3.png";
import { useMediaQuery } from 'react-responsive';
import PrimaryButton from '../buttons/primary';
const {Title} = Typography
function HeroShowCase() {
    const isSmallScreen = useMediaQuery({ maxWidth: 562 });
    return (
    <>
        <Row className={styles.hero}>
            <Col xs={24} sm={12} md={10} lg={10} xl={10}   style={{padding:"2%"}} align={"middle"} >
                
                <Title style={{fontSize:isSmallScreen ? "10vw": "4vw",color:"white"}}>Dream | Explore | Discover</Title>
                <Title style={{fontSize:isSmallScreen ? "3vw": "2vw",color:"white"}}>Get the best prices on all excurssions and activities across UAE.</Title>
                <PrimaryButton   title={<Title style={{fontSize:isSmallScreen ? "4vw": "1vw",color:"white"}}>Book Now</Title>}/>
                
                </Col>
                
            <Col xs={24} sm={12} md={14} lg={14} xl={14}  >
                   <Space>
                    <Image
                        src={image1}
                        alt="Image 1"
                        style={{ margin: 0, padding: 0, top: 0, left: "30%", position: "relative",maxWidth:"95%" }}
                    />
                    <Image
                        src={image2}
                        alt="Image 2"
                        style={{ margin: 0, padding: 0,  position: "relative", zIndex: "1",maxWidth:"95%" }}
                    />
                    <Image
                        src={image3}
                        alt="Image 3"
                        style={{ margin: 0, padding: 0,  top: 0, right: "20%", position: "relative",maxWidth:"95%" }}
                    />
                    </Space>
                
            </Col>

        </Row>


    </>)
}
export default HeroShowCase