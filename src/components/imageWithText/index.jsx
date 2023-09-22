import { Row, Col, Image,Typography } from 'antd';
import image1 from "../../../images/image1.png";
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
    padding: '10px',
    borderRadius: '5px',
    color: "white",
};
function ImageWithText(){
    return(
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
    )
}
export default ImageWithText