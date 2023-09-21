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
import { useMediaQuery } from 'react-responsive';
const { Title } = Typography;
const data = [
    {
        name: 'Ain Dubai',
        rating:4.8,
        imageSrc: AinDubai, 
    },
    {
        name: 'Al Montazah Waterpark',
        rating:4.8,
        imageSrc: CityTour, 
    },
    
    {
        name: 'Al Ain City Tours',
        rating:4.8,
        imageSrc: WaterPark,
    },
    {
        name: 'Aquaventure Waterpark',
        rating:4.8,
        imageSrc: AquaVenture,
    },
    
    {
        name: 'Banana Boat Dubai',
        rating:4.8,
        imageSrc: BananaBoat, 
    },
    {
        name: '3D World Selfie Museum',
        rating:4.8,
        imageSrc: Selfie,
    },
    
];

function RecomendedSection() {

    const isSmallScreen = useMediaQuery({ maxWidth: 1198 });
    const isSmallestScreen = useMediaQuery({ maxWidth: 430 });
    return (
        <Row style={{ marginTop: "5%" }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={10} align="middle" justify="center" >
                <Title style={{ textAlign: "left" }}>Recomended For You</Title>
                <Title level={5} style={{ textAlign: "left", paddingRight: "15%", paddingLeft: 5 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A incidunt quia tenetur magni molestias odio ipsam consequatur omnis earum natus perferendis, voluptatum quae nostrum hic quo eaque error dicta molestiae magnam commodi fugiat neque facere, illo est. Nam veritatis eaque, placeat, animi corporis error ipsa possimus quibusdam vitae fugiat aut.<br /><PrimaryButton title={"View All"} /></Title>

            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={14} align="Right" justify="Right" style={{ background: isSmallestScreen ? "" :'linear-gradient(90deg, rgba(105, 149, 167, 0.44) 0%, #018A97 100%)' }} >
                <Row style={{ marginLeft: "-17%" }} >
                    {data.map((item, index) => (
                        <Col xs={24} sm={24} md={24} lg={24} xl={12} key={index} align="middle" justify="center" style={{ marginTop: "5%", marginBottom: "5%", padding: "1%", paddingLeft: isSmallestScreen ? "15%" : (isSmallScreen ? "10%" : "")}}> 
                            <FlipCard imageSrc={item.imageSrc} title1={item.name} rate={item.rating}/>
                        </Col>

                    ))}
                    
                </Row>


            </Col>
        </Row>
    )
}
export default RecomendedSection