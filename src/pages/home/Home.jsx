import withNavbar from "../../components/common/HOCNabar";
import styles from "./home.module.css";
import { Row, Col, Image, Space, Typography, Button, Input, ConfigProvider } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import image1 from "../../../images/image1.png"
import image2 from "../../../images/image2.png"
import image3 from "../../../images/image3.png"
import Sec3img1 from "../../../images/sec3img1.png";
import Sec3img2 from "../../../images/sec3img2.png";
import Sec3img3 from "../../../images/sec3img3.png";
import SecFiveImg1 from "../../../images/secFiveimg1.png";
import SecFiveImg2 from "../../../images/secFiveimg2.png";
import Phone from "../../../images/phone-bold.png";
import Msg from "../../../images/email-bold.png";
import Offers from "../../../images/moon_discount.png";
import Gruntee from "../../../images/circle-tick.png";
import Daimond from "../../../images/diamond.png";
import Background from "../../../images/herroBackground.png";
import Logo from "../../../images/alsalaamLogo.png"


const { Title } = Typography;
const customStyle = {
    position: 'relative',
};

const imageStyle = {
    width: '100%',
    height: 'auto', // Adjust the height as needed
};

const textOverlayStyle = {
    position: 'absolute',
    top: '78%',
    left: '30%',
    transform: 'rotate(-27deg)',
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '10px',
    borderRadius: '5px',
    color: "white",
};

const data = [
    {
        name: 'John Doe',
        profession: 'Architect & Engineer',
        description: 'We love that guy',
        imageSrc: image2, // Replace with your dummy image URL
    },
    {
        name: 'Jane Smith',
        profession: 'Designer',
        description: 'She is amazing',
        imageSrc: image2, // Replace with your dummy image URL
    },
    // Add more objects as needed
    {
        name: 'John Doe',
        profession: 'Architect & Engineer',
        description: 'We love that guy',
        imageSrc: image2, // Replace with your dummy image URL
    },
    {
        name: 'Jane Smith',
        profession: 'Designer',
        description: 'She is amazing',
        imageSrc: image2, // Replace with your dummy image URL
    },
    // Add more objects as needed
    {
        name: 'John Doe',
        profession: 'Architect & Engineer',
        description: 'We love that guy',
        imageSrc: image2, // Replace with your dummy image URL
    },
    {
        name: 'Jane Smith',
        profession: 'Designer',
        description: 'She is amazing',
        imageSrc: image2, // Replace with your dummy image URL
    },
    // Add more objects as needed
];

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
                                style={{ margin: 0, padding: 0, maxWidth: "100%", top: 0, left: "30%", position: "relative" }}
                            />
                            <Image
                                src={image2}
                                alt="Image 2"
                                style={{ margin: 0, padding: 0, maxWidth: "100%", position: "relative", zIndex: "1" }}
                            />
                            <Image
                                src={image3}
                                alt="Image 3"
                                style={{ margin: 0, padding: 0, maxWidth: "100%", top: 0, right: "20%", position: "relative", }}
                            />
                        </Space>
                    </Col>

                </Row>

            </div>


            <Row style={{ marginTop: 200, background: 'linear-gradient(180deg, #89A7B2 0%, #028B95 100%)', }}>

                <Col span={24} align="middle" justify="center" style={{ marginTop: "-100px" }}>
                    <Title level='5'>Destinations</Title>
                    <Space>
                        <Image
                            src={Sec3img1}
                            alt="Image 1"
                            style={{ margin: 0, padding: 0, maxWidthwidth: "100%", top: 0, left: "30%", position: "relative" }}
                        />
                        <Image
                            src={Sec3img2}
                            alt="Image 2"
                            style={{ margin: 0, padding: 0, maxWidthwidth: "100%", position: "relative", zIndex: "1" }}
                        />
                        <Image
                            src={Sec3img3}
                            alt="Image 3"
                            style={{ margin: 0, padding: 0, maxWidthwidth: "100%", top: 0, right: "20%", position: "relative", }}
                        />
                    </Space>
                    <Title level='5'></Title>
                    <Button>Default Button</Button>
                </Col>

            </Row>
            <Row>
                <Col>
                    <div style={customStyle}>
                        <Image src={image1} style={imageStyle} />
                        <div style={textOverlayStyle}>
                            <h3>Dubai</h3>
                            <h4>63 Activites</h4>
                            <h5>9 tours</h5>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={styles.secFive}>
                <Col span={24} align="middle" justify="center" style={{ marginBottom: "-10%" }}>
                    <Space >

                        <Image src={SecFiveImg1} style={{ marginLeft: "100px" }} />
                        <Image src={SecFiveImg2} />
                    </Space>

                </Col>
            </Row>
            <Row style={{ marginTop: "20%" }}>
                <Col span={12} align="middle" justify="center" >
                    <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, voluptas!</Title>
                </Col>
                <Col span={12} align="middle" justify="center" style={{ background: 'linear-gradient(90deg, rgba(105, 149, 167, 0.44) 0%, #018A97 100%)' }} >


                    <Row style={{ marginLeft: "-10%" }} >
                        {data.map((item, index) => (

                            <Col span={12} key={index} align="middle" justify="center" style={{ marginTop: "5%", marginBottom: "5%", padding: "1%" }}>
                                <div className={styles.flipcard}>
                                    <div className={styles.flipcardinner}>
                                        <div className={styles.flipcardfront} style={{ backgroundImage: `url(${item.imageSrc})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                            <h1>hello</h1>
                                        </div>
                                        <div className={styles.flipcardback}>
                                            <h1>{item.name}</h1>
                                            <p>{item.profession}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        ))}
                    </Row>


                </Col>
            </Row>
            {/* Footer */}

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

            <Row style={{ padding: "5%", backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <Col span={6} >

                    <Row style={{ marginBottom: "5%" }}><Col><img src={Logo} /></Col></Row>
                    <Row style={{ marginBottom: "5%" }}><Col>Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions.</Col></Row>
                    <Row><Col span={6}>Icon1</Col><Col span={6}>Icon2</Col><Col span={6}>Icon3</Col><Col span={6}>Icon4</Col></Row>

                </Col>




                <Col span={6} align={"middle"} justify={"center"} >
                    <Row justify={"center"} ><Col style={{ marginBottom: "5%" }} align={"middle"}>Lorem ipsum dolor sit amet.</Col></Row>
                    <Row justify={"center"}><Col style={{ marginBottom: "5%" }}>Lorem ipsum dolor sit amet.</Col></Row>
                    <Row justify={"center"}><Col style={{ marginBottom: "5%" }}>Lorem ipsum dolor sit amet.</Col></Row>
                    <Row justify={"center"}><Col style={{ marginBottom: "5%" }}>Lorem ipsum dolor sit amet.</Col></Row>
                    <Row justify={"center"}><Col>Lorem ipsum dolor sit amet.</Col></Row>
                </Col>

                <Col span={6} align={"middle"} justify={"center"} >
                    <Row justify={"center"} ><Col style={{ marginBottom: "5%" }} align={"middle"}>Lorem ipsum dolor sit amet.</Col></Row>
                    <Row justify={"center"}><Col style={{ marginBottom: "5%" }}>Lorem ipsum dolor sit amet.</Col></Row>
                    <Row justify={"center"}><Col style={{ marginBottom: "5%" }}>Lorem ipsum dolor sit amet.</Col></Row>
                    <Row justify={"center"}><Col style={{ marginBottom: "5%" }}>Lorem ipsum dolor sit amet.</Col></Row>

                </Col>

                <Col span={6} align={"middle"} justify={"center"}>
                    <Row style={{ marginBottom: "5%" }} align={"left"} justify={"left"}>
                        <Col>
                            <Title level={4}>Subscribe to our Newsletter</Title>

                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "10%" }} align={"left"} justify={"left"}>
                        <Col>
                            <Title level={5}>Get special offers, and more from Al Salaam</Title>

                        </Col>
                    </Row>

                    <Row align={"left"} justify={"left"}>
                        <Col span={18}>
                            <Input placeholder="Basic usage" />
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
                                    
                                    <Button icon={<SendOutlined />} size={5} />
                                </Space>
                            </ConfigProvider>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>



        </>
    )
}

export default withNavbar(Home)