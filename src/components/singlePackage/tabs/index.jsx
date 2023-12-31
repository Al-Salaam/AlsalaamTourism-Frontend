import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card } from 'antd';
import { useMediaQuery } from 'react-responsive';

const TabsSinglePackage = ({pakage}) => {
    const isSmallest = useMediaQuery({ maxWidth: 500 });
    const [selectedButton, setSelectedButton] = useState('button1'); // Initially select 'button1'
    const contentMap = {
        button1: pakage?.keyIntructions,
        button2: pakage?.cancellationguide,
        button3: pakage?.childpolicy,
        button4: pakage?.tourbenifits,
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
            color: "black",
            fontFamily: "ubuntu"
        },
        selectedButton: {
            backgroundColor: "white",
            border: "none",
            color: "black",
        },
        h1: {
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "ubuntu"
        },
    }

    return (
        
        <div>
            <Row gutter={16}>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} style={{margin:isSmallest ? '0 0 0 20px':'0'}} >
                    <Button
                        style={selectedButton === 'button1' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button1')}

                    >
                        Key Instructions
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}  style={{margin:isSmallest ? '0 0 0 20px':'0'}}>
                    <Button
                        style={selectedButton === 'button2' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button2')}
                    >
                        Cancellation Guidelines
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}  style={{margin:isSmallest ? '0 0 0 20px':'0'}}>
                    <Button
                        style={selectedButton === 'button3' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button3')}
                    >
                        Child Policy
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}  style={{margin:isSmallest ? '0 0 0 20px':'0'}}>
                    <Button
                        style={selectedButton === 'button4' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button4')}
                    >
                        Tour Benefits
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Card style={{margin:isSmallest ? '0 0 0 20px':'0', fontFamily:"ubuntu"}}>
                        {contentMap[selectedButton]}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default TabsSinglePackage;
