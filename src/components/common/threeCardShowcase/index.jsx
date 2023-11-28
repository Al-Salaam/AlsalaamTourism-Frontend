import { Row, Col, Image, Space, Typography } from 'antd';
import Sec3img1 from "../../../../images/Abu_Dhabi-removebg.png";
import Sec3img2 from "../../../../images/sec3img2.png";
import Sec3img3 from "../../../../images/sec3img3.png";
import Destination from "../../../../images/destination.png";
import PrimaryButton from '../buttons/primary';
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

const { Title } = Typography;

function ThreeCardShowCase() {
    const isMobile = useMediaQuery({
        query: "(max-width: 1050px)", // Change this breakpoint as needed
    });

    const isMobile2 = useMediaQuery({
        query: "(max-width: 768px)", // Change this breakpoint as needed
    });

    const titleStyle = {
        fontFamily: "Ubuntu",
         
      };

    return (
        <Row style={{ marginTop:isMobile? 120 : 120, background: 'linear-gradient(180deg, #89A7B2 0%, #028B95 100%)', }}>

            <Col span={24} align="middle" justify="center" style={{ marginTop:isMobile?"-155px": isMobile2?"-150px":"-195px", paddingBottom: "3%" }}>
                <Title level={6} style={{...titleStyle, marginTop:isMobile? "35px":isMobile2? "20px":"20px", marginBottom:isMobile?"35px":'30px'}}>Destinations</Title>
                {/* <Space>
                    <Image
                        src={Sec3img1}
                        alt="Image 1"
                        style={{ margin: 0, padding: 0, maxWidthwidth: "100%", top:0, left: "35%", position: "relative" }}
                        preview={false}

                    />
                    <Image
                        src={Sec3img2}
                        alt="Image 2"
                        style={{ margin: 0, padding: 0, maxWidthwidth: "100%", position: "relative", zIndex: "1", }}
                        preview={false}
                    />
                    <Image
                        src={Sec3img3}
                        alt="Image 3"
                        style={{ margin: 0, padding: 0, maxWidthwidth: "100%", top: 0, right: "35%", position: "relative" }}
                        preview={false}
                    />
                </Space> */}
                <Image  src={Destination} alt='Al Salaam Tourism 3' preview={false}/>
              
                <div style={{}}><Link to="/destinations"><PrimaryButton title={<h3>View All</h3>} /></Link></div>
            </Col>

        </Row>
    )
}
export default ThreeCardShowCase;