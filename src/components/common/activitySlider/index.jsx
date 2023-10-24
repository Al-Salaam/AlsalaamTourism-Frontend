import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Image, Rate, Typography } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import FlipCard from '../recomandedSection/index2';
import { useDispatch, useSelector } from 'react-redux';

const itemsPerPage = 3;

const  ActivitySlider = ({ data, auto = false, showTitle = true, showDescription = true, showButtons = true }) => {
    const { Title } = Typography;
    const [currentPage, setCurrentPage] = useState(0);
    const [autoMode, setAutoMode] = useState(auto);
    const [isCardClicked, setIsCardClicked] = useState(false);

    useEffect(() => {
        let intervalId;

        if (autoMode && !isCardClicked) {
            intervalId = setInterval(() => {
                setCurrentPage((prevPage) => (prevPage + 1) % data?.length);
            }, 3000); // Change the delay as needed (e.g., 3000 milliseconds = 3 seconds).
        }

        return () => {
            clearInterval(intervalId); // Clear the interval on component unmount.
        };
    }, [autoMode, data, isCardClicked]);

    const handleCardClick = () => {
        setIsCardClicked(true);

        // Automatically restart the auto mode after 5 seconds (adjust the delay as needed).
        setTimeout(() => {
            setIsCardClicked(false);
        }, 5000);
    };

    const renderCards = () => {
        const cardIndexes = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentPage + i + data?.length) % data?.length;
            cardIndexes.push(index);
        }

        const cardStyle = {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        };

        return (
            <Row gutter={20}>
                {cardIndexes.map((index) => {
                    const item = data[index];
                    return (
                        <Col align="middle" key={item?._id} xs={24} sm={24} md={24} lg={12} xl={8} xxl={8} style={{padding:"1%"}}>
                            <div onClick={handleCardClick}> {/* Add onClick handler to the card */}
                                <FlipCard style={{ border: "red 1px solid" }} imageSrc={item?.images[0]?.url} title1={item?.name} rate={item?.ratings} price={item?.price} shortdescription={item?.shortdescription} activityId={item?._id} noOfReviews={item?.noOfReviews} />
                            </div>
                        </Col>
                    );
                })}
            </Row>
        );
    };

    return (
        <Row style={{ margin: "2% 0" }}>
            {showTitle ? <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{ marginTop: '20px', textAlign: 'center' }}>
                <Title level={3}>Explore Other Activities</Title>
            </Col> : "" }

            {showDescription ? <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{ marginTop: '20px', textAlign: 'center' }}>
                <Title level={5}>At Al salaam Tours & Travels, we provide excellent solutions for taking full advantage of the exciting activities</Title>
            </Col> : "" }
            
            {showButtons ? <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{ marginTop: '20px', textAlign: 'center' }}>
                <Button onClick={() => setCurrentPage((prevPage) => (prevPage - 1 + data?.length) % data?.length)} style={{ backgroundColor: "white", color: "3B505A", borderRadius: "100%", fontSize: "50px", border: "none" }}>
                    <ArrowLeftOutlined />
                </Button>
                <Button onClick={() => setCurrentPage((prevPage) => (prevPage + 1) % data?.length)} style={{ backgroundColor: "white", color: "3B505A", borderRadius: "100%", fontSize: "50px", border: "none" }}>
                    <ArrowRightOutlined />
                </Button>
            </Col> : ""}
            
            <Col span={24}>
                {renderCards()}
            </Col>
        </Row>
    );
};

export default ActivitySlider;
