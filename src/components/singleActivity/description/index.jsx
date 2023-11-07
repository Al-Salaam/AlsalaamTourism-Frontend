import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card } from 'antd';

const Description = ({activity}) => {

    const [selectedButton, setSelectedButton] = useState('button1'); // Initially select 'button1'
    const contentMap = {
        button1: activity?.description,
        button2: activity?.keyinstructions,
        button3: activity?.reservationpolicy,
        button4: activity?.benifits,
    };

    useEffect(() => {
        // Load content for the selected button (button1 by default)
        const timer = setTimeout(() => {
            setSelectedButton('button1');
        }, 0);

        return () => clearTimeout(timer);
    }, []);


    //Styles
    const styles = {
        button: {
            backgroundColor: "white",
            border: "none",
            color: "black"
        },
        selectedButton: {
            backgroundColor: "white",
            border: "none",
            color: "black",
        },
        h1: {
            fontSize: "18px",
            fontWeight: "bold",
        },
    }


    const titleStyle = {
        fontFamily: "Ubuntu",
        
       
      };
    return (
        <div>
            <Row gutter={16}>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} >
                    <Button
                        style={selectedButton === 'button1' ? { ...styles.selectedButton, ...styles.h1, ...titleStyle, ...titleStyle} : styles.button}
                        onClick={() => setSelectedButton('button1')}

                    >
                        Description
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Button
                        style={selectedButton === 'button2' ? { ...styles.selectedButton, ...styles.h1, ...titleStyle } : styles.button}
                        onClick={() => setSelectedButton('button2')}
                    >
                        Key Instructions
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Button
                        style={selectedButton === 'button3' ? { ...styles.selectedButton, ...styles.h1, ...titleStyle } : styles.button}
                        onClick={() => setSelectedButton('button3')}
                    >
                        Reservation Policy
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Button
                        style={selectedButton === 'button4' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button4')}
                    >
                        Benefits
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Card style={{...titleStyle, marginTop: '20px' }}>
                        {contentMap[selectedButton]}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Description;
