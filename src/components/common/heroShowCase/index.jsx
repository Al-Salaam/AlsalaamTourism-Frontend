
import { Row, Col, Image, Space, Typography, } from 'antd';
import styles from "./heroShowCase.module.css";
import { Link } from "react-router-dom";
import image1 from "../../../../images/image1.png";
import image2 from "../../../../images/image2.png";
import image3 from "../../../../images/image3.png";
import { useMediaQuery } from 'react-responsive';
import PrimaryButton from '../buttons/primary';
const {Title} = Typography
function HeroShowCase() {
    const isSmallScreen = useMediaQuery({ maxWidth: 562 });

    const titleStyle = {
        fontFamily: 'Ubuntu',
        marginRight:isSmallScreen? "-2%": "8%",
        textShadow: '0px 1.5589158535003662px 1.247132658958435px rgba(0, 0, 0, 0.0759), ' +
          '0px 3.7462916374206543px 2.99703311920166px rgba(0, 0, 0, 0.1091), ' +
          '0px 7.053934574127197px 5.643147945404053px rgba(0, 0, 0, 0.135), ' +
          '0px 12.583013534545898px 10.066411018371582px rgba(0, 0, 0, 0.1609), ' +
          '0px 23.535144805908203px 18.828115463256836px rgba(0, 0, 0, 0.1941), ' +
          '0px 56.334346771240234px 45.06747817993164px rgba(0, 0, 0, 0.27)',
      };

    return (
    <>
        <Row className={styles.hero} style={{paddingTop:isSmallScreen ? "25%" : ""}}>
            <Col xs={24} sm={12} md={10} lg={10} xl={10}   style={{padding:"2%"}} align={"middle"} >
                
                <Title style={{...titleStyle,fontSize:isSmallScreen ? "10vw": "4vw",color:"white"}}>Dream | Explore | Discover</Title>
                <p style={{...titleStyle,fontSize:isSmallScreen ? "3vw": "1.4vw",color:"white"}}>Get the best prices on all excurssions and activities across UAE.</p>
                <div style={{ marginTop: "50px", marginRight: isSmallScreen ? "0%" : "68%",}}>
  <PrimaryButton width='180px' title={<Title style={{ fontSize: isSmallScreen ? "2vw" : "0.1vw", color: "white" }}><Link to="/activity" style={{ color: "white", fontSize: "16px" }}>Explore Now </Link></Title>} />
</div>
                </Col>
                
            <Col xs={24} sm={12} md={14} lg={14} xl={14}  >
                   <Space>
                    <Image
                        preview={false} 
                        src={image1}
                        alt="Image 1"
                        style={{ margin: 0, padding: 0, top: 0, left: "30%", position: "relative",maxWidth:"95%" }}
                        
                    />
                    <Image
                        preview={false}
                        src={image2}
                        alt="Image 2"
                        style={{ margin: 0, padding: 0,  position: "relative", zIndex: "1",maxWidth:"95%" }}
                    />
                    <Image
                        preview={false}
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