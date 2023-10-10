import React, { useState } from 'react';
import { Card, Row, Col, Button, Image, Rate, Typography } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined, } from '@ant-design/icons';

import FlipCard from '../recomandedSection/index2';


const data = [
    {
        id: 1,
        profile: 'Profile 1',
        name: 'Name 1',
        date: 'Date 1',
        rating: '1',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        id: 2,
        profile: 'Profile 1',
        name: 'Name 1',
        date: 'Date 1',
        rating: '2',
        description: 'Description 2',
    },
    {
        id: 3,
        profile: 'Profile 1',
        name: 'Name 1',
        date: 'Date 1',
        rating: '3',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        id: 4,
        profile: 'Profile 1',
        name: 'Name 1',
        date: 'Date 1',
        rating: '4',
        description: 'Description 4',
    },
    {
        id: 5,
        profile: 'Profile 1',
        name: 'Name 1',
        date: 'Date 1',
        rating: '5',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        id: 6,
        profile: 'Profile 1',
        name: 'Name 1',
        date: 'Date 1',
        rating: '4',
        description: 'Description 6',
    },
    {
        id: 7,
        profile: 'Profile 1',
        name: 'Name 1',
        date: 'Date 1',
        rating: '3',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },


];

const itemsPerPage = 3;

const ActivitySlider = () => {
    const { Title } = Typography;
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextClick = () => {
        if (currentPage + 1 < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousClick = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderCards = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const cardsToShow = data.slice(startIndex, endIndex);

        const cardStyle = {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add the box shadow style here
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        };
        return (
            <Row gutter={20} >
                {cardsToShow.map((item) => (
                    <Col align="middle" key={item.id} xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                        <FlipCard style={{ border: "red 1px solid" }} />
                    </Col>
                ))}
            </Row>
        );
    };

    return (
        <Row style={{ margin: "2% 0" }}>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{ marginTop: '20px', textAlign: 'center' }}>
                <Title level={3}>Explore Other Activities</Title>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{ marginTop: '20px', textAlign: 'center' }}>
                <Title level={5}>At Al salaam Tours & Travels, we provide excellent solutions for taking full advantage of the exciting activities</Title>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{ marginTop: '20px', textAlign: 'center' }}>
                <Button onClick={handlePreviousClick} disabled={currentPage === 0} style={{ backgroundColor: "white", color: "3B505A", borderRadius: "100%", fontSize: "50px", border: "none" }}>
                    <ArrowLeftOutlined />
                </Button>
                <Button onClick={handleNextClick} disabled={currentPage + 1 >= Math.ceil(data.length / itemsPerPage)} style={{ backgroundColor: "white", color: "3B505A", borderRadius: "100%", fontSize: "50px", border: "none" }}>
                    <ArrowRightOutlined />
                </Button>
            </Col>
            <Col span={24}>
                {renderCards()}
            </Col>
        </Row>
    );
};

export default ActivitySlider;
