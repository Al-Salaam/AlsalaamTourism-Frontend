import React from 'react';
import { Row, Col, } from 'antd';

import Img1 from "../../../../images/cal1.svg"
import Img2 from "../../../../images/cancel.png"
import Img3 from "../../../../images/group.png"
import Img4 from "../../../../images/language.png"


// Styling
const styles = {
    heading: {
        color: "#2C2727",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
    },
    para: {
        color: "#2C2727",
        textAlign: "center"
    },
    imgMarg:{
        margin:"0 10px",
        
    }
}



const Stats = () => {
    return (

        <Row style={{ marginTop: "15px" }}  >
            <Col span={6} align={"middle"}>
                <h3 style={styles.heading}><img src={Img1} style={styles.imgMarg}  />Duration</h3>
                <p style={styles.para}>9 hours</p>
            </Col>
            <Col span={6} align={"middle"}>
                <h3 style={styles.heading}><img src={Img2} style={styles.imgMarg} />Cancellation</h3>
                <p style={styles.para}>Up to 1 Day</p>
            </Col>
            <Col span={6} align={"middle"}>
                <h3 style={styles.heading}><img src={Img3}  style={styles.imgMarg}/>Group Size</h3>
                <p style={styles.para}>20 People</p>
            </Col>
            <Col span={6} align={"middle"}>
                <h3 style={styles.heading}><img src={Img4} style={styles.imgMarg} />Languages</h3>
                <p style={styles.para}>Arabic, English</p>
            </Col>
        </Row>

    );
};

export default Stats;
