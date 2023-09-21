import { Row, Col, Image, Space, Typography, Button, Input, ConfigProvider } from 'antd';
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
const Title = Typography;
function Footer(){
    return(  <Row>
        <Col span={24}>
    <Row align={'middle'} style={{ backgroundColor: "#EFEFFF", padding: "1%" }} >

        <Col span={12} align={"middle"} justify={"center"} ><Row align={"middle"} justify={"center"}><Col><img src={Phone} /></Col><Col><Title level={5}> Call on +971524928120</Title></Col></Row></Col>

        <Col span={12} align={"center"}> <Row align={"middle"} justify={"center"}><Col><img src={Msg} /></Col><Col><Title level={5}> info@alsalaamtourism.com</Title></Col></Row> </Col>
    </Row>
    <Row align={'middle'} style={{ backgroundColor: "#4CAAB8", padding: "1%" }} >

        <Col span={6} align={"middle"} justify={"center"} ><img src={Phone} /><Title level={5}> Here for you</Title></Col>

        <Col span={6} align={"center"}><img src={Gruntee} /><Title level={5} > Best Price Guarantee</Title></Col>
        <Col span={6} align={"middle"} justify={"center"} ><img src={Offers} /><Title level={5}> Exclusive offers</Title></Col>

        <Col span={6} align={"center"}><img src={Daimond} /><Title level={5}> New Finds Every Month</Title></Col>
    </Row>

    <Row style={{ color:"white", padding: "5%", backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Col span={6} >

            <Row style={{ marginBottom: "5%" }}><Col><img src={Logo} /></Col></Row>
            <Row style={{ marginBottom: "5%" }}><Col>Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions.</Col></Row>
            <Row><Col span={6}><img src={Instagram} style={{backgroundColor:"#3B505A",borderRadius:"50%",padding:"10%"}} /></Col><Col span={6}><img src={Facebook} style={{backgroundColor:"#3B505A",borderRadius:"50%",padding:"10%"}} /></Col><Col span={6}><img src={Twitter} style={{backgroundColor:"#3B505A",borderRadius:"50%",padding:"10%"}} /></Col><Col span={6}><img src={Youtube} style={{backgroundColor:"#3B505A",borderRadius:"50%",padding:"10%"}} /></Col></Row>

        </Col>




        <Col span={6} style={{paddingLeft:"15%"}}  >
            <Row ><Col style={{ marginBottom: "15%" }} ><Link to="/" style={{color:"white",fontSize:"16px"}}>Home</Link></Col></Row>
            <Row ><Col style={{ marginBottom: "15%" }}><Link to="/" style={{color:"white",fontSize:"16px"}}>Tours</Link></Col></Row>
            <Row ><Col style={{ marginBottom: "15%" }}><Link to="/" style={{color:"white",fontSize:"16px"}}>Packages</Link></Col></Row>
            <Row ><Col style={{ marginBottom: "15%" }}><Link to="/" style={{color:"white",fontSize:"16px"}}>Our Partner</Link></Col></Row>
            <Row ><Col><Link to="/" style={{color:"white",fontSize:"16px"}}>Services</Link></Col></Row>
            
        </Col>

        <Col span={6} style={{paddingLeft:"5%"}} >
            <Row justify={"start"} ><Col style={{ marginBottom: "5%" }}><Link to="/" style={{color:"white",fontSize:"16px"}}>Blog</Link></Col></Row>
            <Row justify={"start"}><Col style={{ marginBottom: "5%" }}><Link to="/" style={{color:"white",fontSize:"16px"}}>Contact US</Link></Col></Row>
            <Row justify={"start"}><Col style={{ marginBottom: "5%" }}><Link to="/" style={{color:"white",fontSize:"16px"}}>Carrer</Link></Col></Row>

        </Col>

        <Col span={6} align={"middle"} justify={"center"} >
            <Row style={{ marginBottom: "5%" }} align={"left"} justify={"left"}>
                <Col >
                    <Title style={{color:"white"}} level={4}>Subscribe to our Newsletter</Title>

                </Col>
            </Row>
            <Row style={{ marginBottom: "10%" }} align={"left"} justify={"left"}>
                <Col>
                    <Title style={{color:"white"}} level={5}>Get special offers, and more from Al Salaam</Title>

                </Col>
            </Row>

            <Row align={"left"} justify={"left"}>
                <Col span={18}>
                    <Input placeholder="Input your email" />
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
                            
                            <Button style={{border:"none",color:"white"}} icon={<SendOutlined />} size={5} />
                        </Space>
                    </ConfigProvider>
                    
                </Col>
            </Row>
        </Col>
    </Row>
    </Col>
    </Row>)
}
export default Footer