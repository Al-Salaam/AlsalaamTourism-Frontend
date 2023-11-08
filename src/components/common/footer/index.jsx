import { Row, Col, Space, Typography, Button, Input, ConfigProvider } from 'antd';
import { Link } from "react-router-dom";
import { SendOutlined } from '@ant-design/icons';
import Phone from "../../../../images/phone-bold.png";
import Msg from "../../../../images/email-bold.png";
import Offers from "../../../../images/moon_discount.png";
import Gruntee from "../../../../images/circle-tick.png";
import Daimond from "../../../../images/diamond.png";
import Background from "../../../../images/herroBackground.png";
import Logo from "../../../../images/alsalaamLogo.png";
import Youtube from "../../../../images/youtube.png";
import Facebook from "../../../../images/facebook.png";
import Twitter from "../../../../images/twitter.png";
import Instagram from "../../../../images/instagram.png";
import { useMediaQuery } from 'react-responsive';
const {Title} = Typography;
function Footer() {
    const isTablet = useMediaQuery({
        query: '(max-width: 675px)', 
      });
    const isSmallestScreen = useMediaQuery({ maxWidth: 990 });

    const titleStyle = {
        fontFamily: "Ubuntu",
        
       
      };
    const isMobileScreen = useMediaQuery({ maxWidth: 1012 });
    
    return (

    <Row>
        <Col span={24}>
            <Row  align={'middle'} style={{ backgroundColor: "#EFEFFF", padding: "1%" }} >

                <Col  xs={10} sm={10} md={10} lg={10} xl={10}align={"middle"} justify={"center"} >
        <Row align={"middle"} justify={"end"}>
            <Col><img src={Phone} style={{width:isTablet?".8rem":"1.2rem"}} /></Col>
            <Col><Title  style={{fontSize:isTablet?".6rem":"1rem"}}> <a
        href="tel:+971524928120"
        style={{...titleStyle, textDecoration: "none", color: "#3B505A" }}
      >
        Call on +971524928120
      </a></Title></Col>
      </Row>
      </Col>

                
                
        <Col  xs={14} sm={10} md={14} lg={12} xl={8} align={"center"}> <Row align={"middle"} justify={"center"}>
            <Col><img src={Msg} style={{width:isTablet?".8rem":"1.2rem"}}/></Col><Col>
            <Title style={{fontSize:isTablet?".7rem":"1rem"}}>
                 <a href="mailto:info@alsalaamtourism.com" style={{ textDecoration: "none", color: "#3B505A" }}>info@alsalaamtourism.com</a>
                 </Title>
                 </Col></Row> </Col>
            </Row>
            <Row align={'middle'} style={{ backgroundColor: "#4CAAB8", padding: "1%" }} >

                <Col xs={12} sm={12} md={12} lg={6} xl={6} align={"middle"} justify={"center"} ><img src={Phone} /><Title level={5} style={{...titleStyle,color:"#FFFFFF"}}> Here for you</Title></Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} align={"center"}><img src={Gruntee} /><Title level={5} style={{...titleStyle,color:"#FFFFFF"}}> Best Price Guarantee</Title></Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} align={"middle"} justify={"center"} ><img src={Offers} /><Title level={5}style={{...titleStyle,color:"#FFFFFF"}}> Exclusive offers</Title></Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} align={"center"}><img src={Daimond} /><Title level={5}style={{...titleStyle,color:"#FFFFFF"}}> New Finds Every Month</Title></Col>
            </Row>

            <Row style={{ color: "white", padding: "5%", backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} >

                    <Row style={{ marginBottom: "5%" }}><Col><img src={Logo} /></Col></Row>
                    <Row style={{ marginBottom: "5%" }}><Col style={titleStyle}>Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions.</Col></Row>
                    <Row><Col span={4}><img src={Instagram} style={{ backgroundColor: "#3B505A", borderRadius: "50%", padding: "5%" }} /></Col><Col span={4}><img src={Facebook} style={{ backgroundColor: "#3B505A", borderRadius: "50%", padding: "5%" }} /></Col><Col span={4}><img src={Twitter} style={{ backgroundColor: "#3B505A", borderRadius: "50%", padding: "5%" }} /></Col><Col span={6}><img src={Youtube} style={{ backgroundColor: "#3B505A", borderRadius: "50%", padding: "5%" }} /></Col></Row>
                    <Row style={{ marginBottom: "5%" }}><Col>Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions.</Col></Row>
                    <Row><Col span={4}><img src={Instagram} style={{ backgroundColor: "#3B505A", borderRadius: "50%", padding: "5%" }} /></Col><Col span={4}><img src={Facebook} style={{ backgroundColor: "#3B505A", borderRadius: "50%", padding: "5%" }} /></Col><Col span={4}><img src={Twitter} style={{ backgroundColor: "#3B505A", borderRadius: "50%", padding: "5%" }} /></Col>
                    </Row>

                </Col>




                <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ paddingLeft: isSmallestScreen ? "" :"15%",paddingTop:isSmallestScreen ? "5%" :"" }}  >
                    <Row style={{margin:isSmallestScreen? "2% 0" :""}} ><Col style={{ marginBottom: isSmallestScreen ? "" :"15%" }} ><Link to="/" style={{...titleStyle, color: "white", fontSize: "16px" }}>Home</Link></Col></Row>
                    <Row style={{margin:isSmallestScreen? "2% 0" :""}} ><Col style={{ marginBottom: isSmallestScreen ? "" :"15%" }}><Link to="/activity" style={{...titleStyle, color: "white", fontSize: "16px" }}>Activites</Link></Col></Row>
                    <Row style={{margin:isSmallestScreen? "2% 0" :""}}><Col style={{ marginBottom: isSmallestScreen ? "" :"15%" }}><Link to="/packages" style={{...titleStyle, color: "white", fontSize: "16px" }}>Packages</Link></Col></Row>
                    <Row style={{margin:isSmallestScreen? "2% 0" :""}}><Col style={{ marginBottom: isSmallestScreen ? "" :"15%" }}><Link to="/" style={{...titleStyle, color: "white", fontSize: "16px" }}>Our Partner</Link></Col></Row>
                    <Row style={{margin:isSmallestScreen? "2% 0" :""}} ><Col><Link to="/" style={{...titleStyle, color: "white", fontSize: "16px" }}>Services</Link></Col></Row>

                </Col>

                <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ paddingLeft: isSmallestScreen ? "" :"5%",paddingTop:isSmallestScreen ? "5%" :"" }} >
                <Row justify={"start"} style={{margin:isSmallestScreen? "2% 0" :""}} ><Col style={{ marginBottom: isSmallestScreen ? "" :"5%" }}><Link to="/about" style={{...titleStyle, color: "white", fontSize: "16px", }}>About US</Link></Col></Row>
                    <Row justify={"start"} style={{margin:isSmallestScreen? "2% 0" :""}} ><Col style={{ marginBottom: isSmallestScreen ? "" :"5%" }}><Link to="/" style={{...titleStyle, color: "white", fontSize: "16px", }}>Blogs</Link></Col></Row>
                    <Row justify={"start"} style={{margin:isSmallestScreen? "2% 0" :""}}><Col style={{ marginBottom: isSmallestScreen ? "" :"5%" }}><Link to="/contact" style={{...titleStyle, color: "white", fontSize: "16px" }}>Contact US</Link></Col></Row>
                    <Row justify={"start"} style={{margin:isSmallestScreen? "2% 0" :""}}><Col style={{ marginBottom: isSmallestScreen ? "" :"5%" }}><Link to="/" style={{...titleStyle, color: "white", fontSize: "16px" }}>Carrer</Link></Col></Row>

                </Col>

                <Col xs={24} sm={24} md={12} lg={6} xl={6} align={"middle"} justify={"center"} >
                    <Row style={{ marginBottom: "5%",marginTop:isSmallestScreen ? "10%":"" }} align={"left"} justify={"left"}>
                        <Col >
                            <h2 style={{...titleStyle, color: "white" }}>Subscribe to our newsLetter</h2>

                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "10%" }} align={"left"} justify={"left"}>
                        <Col>
                            <Title style={{...titleStyle, color: "white" }} level={5}>Get special offers, and more from Al Salaam</Title>

                        </Col>
                    </Row>

                    <Row align={"left"} justify={"left"}>
                        <Col span={18}>
                            <Input style={titleStyle} placeholder="Input your email here" />
                        </Col>
                        <Col span={6}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: 'white',
                                        colorBgContainer: '#3B505A',
                                        borderRadius: 5,

                                    },
                                }}
                            >
                                <Space>

                                    <Button style={{ border: "none", color: "white" }} icon={<SendOutlined />} size={5} />
                                </Space>
                            </ConfigProvider>

                        </Col>
                    </Row>
                </Col>
                <Col span={24}  style={{position:"relative",bottom: isMobileScreen ? "-10px" : "-50px"}} >Copyright @2023</Col>    
            </Row>
                
        </Col>
        
    </Row>)
}
export default Footer
