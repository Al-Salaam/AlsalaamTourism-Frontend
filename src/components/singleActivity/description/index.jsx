import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card } from 'antd';

const Description = () => {

    const [selectedButton, setSelectedButton] = useState('button1'); // Initially select 'button1'
    const contentMap = {
        button1: <>On this excursion from Dubai, take in a revitalizingly different aspect of the UAE. Visit the beautiful city of Al Ain in the United Arab Emirates,which is home to museums, forts, parks, and primarily Jebel Hafeet, the second-largest mountain in the country.<br/>Your Tour includes visits to such outstanding Al Ain attractions as Jebel Hafeet, the country’s tallest mountain; offering commanding views of the city. Al Jahili Fort, which houses the largest museum with intriguing exhibits including a rare arsenal of portraits of the ruling family portraits, and the renowned Camel Market, an authentic bustling Emirati souk where you can get close glimpses of various camel species.<br/>Explore the captivating displays at the earliest museum of its kind in Al Ain and the Archeological Park, located at a Bronze Age site, to learn more about the ancient Emirati history and the cultural characteristics of the area. Additionally, '\n'enjoy a relaxing trip past the captivating historical buildings and a quick stop at some of the city’s most well-known attractions, like the Al Ain Zoo and Mall.<br/>You can also visit the natural hot springs found at the foot of Jebel Hafeet Mountain promises to be a delightfully pleasant experience. So don’t wait to get in touch with us if you want to leave the glitzy sounds and views of Dubai and enter a different world. The availability of this excursion and the time of the group departure will determine whether or not an individual can reserve it. For an additional fee, we may organize pick-up from other emirates based on your request"</>,
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
                        Description
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Button
                        style={selectedButton === 'button2' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
                        onClick={() => setSelectedButton('button2')}
                    >
                        Key Instructions
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Button
                         style={selectedButton === 'button3' ? { ...styles.selectedButton, ...styles.h1 } : styles.button}
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
                    <Card style={{ marginTop: '20px' }}>
                        {contentMap[selectedButton]}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Description;
