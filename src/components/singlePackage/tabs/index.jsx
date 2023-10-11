import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card } from 'antd';

const TabsSinglePackage = () => {

    const [selectedButton, setSelectedButton] = useState('button1'); // Initially select 'button1'
    const contentMap = {
        button1: <>The date and time of the tour are subject to availability.
            The tour tickets can be used on their issue date.
            Carry a valid ID with you as it is mandatory.
            Information on the passport needs to be used for the bookings.
            Refunds are not available for the partially utilized services.
            The pickup/drop-off timing May Vary as per the schedules based on your place of residence.
            No exchanges, replacements, or refunds are available for damaged, lost, or stolen tickets.
            You are required to report 30 minutes earlier than the time of the tour/activity.</>,
        button2: 'Content for Button 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, debitis.',
        button3: 'Content for Button 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, debitis.',
        button4: 'Content for Button 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, debitis.',
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

    return (
        <div>
            <Row gutter={16}>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} >
                    <Button
                        style={selectedButton === 'button1' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button1')}

                    >
                        Key Instructions
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Button
                        style={selectedButton === 'button2' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button2')}
                    >
                        Cancellation Guidelines
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Button
                        style={selectedButton === 'button3' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button3')}
                    >
                        Child Policy
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
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
                    <Card style={{ marginTop: '20px' }}>
                        {contentMap[selectedButton]}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default TabsSinglePackage;
