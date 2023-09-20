import styles from "./recomended.module.css";
import { Row, Col, Image, Space, Typography, Button, Input, ConfigProvider, Rate } from 'antd';
import AinDubai from "../../../../images/ainDubai.png"
import CityTour from "../../../../images/alAinCityTour.png"
import WaterPark from "../../../../images/alMontazahWaterPark.png"
import AquaVenture from "../../../../images/aquaVenture.png"
import BananaBoat from "../../../../images/bananaBoat.png"
import Selfie from "../../../../images/3dSelfie.png"
import PrimaryButton from "../buttons/primary";
import FlipCard from "./index2";
const { Title } = Typography;
const data = [
    {
        name: 'John Doe',
        profession: 'Architect & Engineer',
        description: 'We love that guy',
        imageSrc: AinDubai, // Replace with your dummy image URL
    },
    {
        name: 'Jane Smith',
        profession: 'Designer',
        description: 'She is amazing',
        imageSrc: CityTour, // Replace with your dummy image URL
    },
    // Add more objects as needed
    {
        name: 'John Doe',
        profession: 'Architect & Engineer',
        description: 'We love that guy',
        imageSrc: WaterPark, // Replace with your dummy image URL
    },
    {
        name: 'Jane Smith',
        profession: 'Designer',
        description: 'She is amazing',
        imageSrc: AquaVenture, // Replace with your dummy image URL
    },
    // Add more objects as needed
    {
        name: 'John Doe',
        profession: 'Architect & Engineer',
        description: 'We love that guy',
        imageSrc: BananaBoat, // Replace with your dummy image URL
    },
    {
        name: 'Jane Smith',
        profession: 'Designer',
        description: 'She is amazing',
        imageSrc: Selfie, // Replace with your dummy image URL
    },
    // Add more objects as needed
];

function RecomendedSection() {
    
    return (
        <Row style={{ marginTop: "5%" }}>
            <Col span={8} align="middle" justify="center" >
                <Title style={{ textAlign: "left" }}>Recomended For You</Title>
                <Title level={5} style={{ textAlign: "left", paddingRight: "15%", paddingLeft: 5 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A incidunt quia tenetur magni molestias odio ipsam consequatur omnis earum natus perferendis, voluptatum quae nostrum hic quo eaque error dicta molestiae magnam commodi fugiat neque facere, illo est. Nam veritatis eaque, placeat, animi corporis error ipsa possimus quibusdam vitae fugiat aut.<br /><PrimaryButton title={"View All"} /></Title>

            </Col>
            <Col span={16} align="Right" justify="Right" style={{ background: 'linear-gradient(90deg, rgba(105, 149, 167, 0.44) 0%, #018A97 100%)' }} >
                <Row style={{ marginLeft: "-17%" }} >
                    {/* {data.map((item, index) => (
                        <Col span={12} key={index} align="middle" justify="center" style={{ marginTop: "5%", marginBottom: "5%", padding: "1%" }}>
                            <div className={styles.flipcard}>
                                <div className={styles.flipcardinner}>
                                    <div className={styles.flipcardfront} style={{ backgroundImage: `url(${item.imageSrc})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                        <Row>
                                            <Col span={12} >Ain Dubai  </Col>
                                            <Col span={12}><Rate allowHalf defaultValue={4}/></Col>
                                        </Row>
                                        <Row>
                                            <Col><Button >Flip</Button></Col>
                                        </Row>
                                    </div>
                                    <div className={styles.flipcardback}>
                                        <h1>{item.name}</h1>
                                        <p>{item.profession}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    ))} */}
                    <FlipCard/>
                </Row>


            </Col>
        </Row>
    )
}
export default RecomendedSection