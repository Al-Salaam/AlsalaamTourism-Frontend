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
        justifyContent:"center",
        fontFamily: "ubuntu"
    },
    para: {
        color: "#2C2727",
        textAlign: "center",
        fontFamily: "ubuntu"
    },
    imgMarg:{
        margin:"0 10px",
        
    }
}



const StatsSinglePackage = ({pakage}) => {
    return (

        <Row gutter={[16, 16]} style={{ marginTop: "15px" }}  >
            <Col xs={12} sm={12} md={6} lg={6} xl={6} align={"middle"}>
                <h3 style={styles.heading}><img src={Img1} style={styles.imgMarg}  />Duration</h3>
                <p style={styles.para}>{pakage?.duration}</p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} align={"middle"}>
                <h3 style={styles.heading}><img src={Img2} style={styles.imgMarg} />Cancellation</h3>
                <p style={styles.para}>{pakage?.cancellation}</p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} align={"middle"}>
                <h3 style={styles.heading}><img src={Img3}  style={styles.imgMarg}/>Group Size</h3>
                <p style={styles.para}>{pakage?.groupSize} People</p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} align={"middle"}>
                <h3 style={styles.heading}><img src={Img4} style={styles.imgMarg} />Languages</h3>
                <p style={styles.para}>{pakage?.languages[0]}</p>
            </Col>
        </Row>

    );
};

export default StatsSinglePackage;
