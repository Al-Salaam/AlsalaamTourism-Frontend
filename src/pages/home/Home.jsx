import withNavbar from "../../components/common/HOCNabar";
import styles from "./home.module.css";
import { Row, Col, Image, Space, Typography, Button, Card } from 'antd';
import image1 from "../../../images/image1.png"
import image2 from "../../../images/image2.png"
import image3 from "../../../images/image3.png"
import Sec3img1 from "../../../images/sec3img1.png";
import Sec3img2 from "../../../images/sec3img2.png";
import Sec3img3 from "../../../images/sec3img3.png";
import SecFiveImg1 from "../../../images/secFiveimg1.png";
import SecFiveImg2 from "../../../images/secFiveimg2.png";


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
                <Col span={12} align="middle" justify="center" style={{background: 'linear-gradient(90deg, rgba(105, 149, 167, 0.44) 0%, #018A97 100%)'}} >
                
                
                <Row style={{marginLeft:"-10%"}} >
                        {data.map((item, index) => (
                            
                            <Col span={12} key={index} align="middle" justify="center" style={{marginTop:"5%",marginBottom:"5%",padding:"1%"}}>
                                <div className={styles.flipcard}>
                                    <div className={styles.flipcardinner}>
                                        <div className={styles.flipcardfront} style={{ backgroundImage: `url(${item.imageSrc})`,backgroundPosition: 'center', backgroundSize: 'cover'  }}>
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
            <Row>
                <Col span={24} align="middle" justify="center">
                <Title>Hello</Title>
                </Col>
            </Row>


        </>
    )
}

export default withNavbar(Home)