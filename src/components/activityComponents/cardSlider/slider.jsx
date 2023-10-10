import React, { useState } from 'react';
import { Card, Row, Col, Button, Image, Rate } from 'antd';

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

const CardSlider = () => {
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
            
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

        };
        return (
            <Row gutter={20}>
                {cardsToShow.map((item) => (
                    <Col key={item.id} xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                        <Card style={cardStyle}>

                            <Row gutter={[40]}>
                                <Col span={24}> <p>{item.description}</p></Col>
                            </Row>

                            <Row gutter={[40]}  >
                                <Col span={8}><Image src= {item.profile}/></Col>
                                <Col span={8}><p>Name & Date: {item.name} <br/> {item.date}</p></Col>
                                <Col span={8}><Rate value={item.rating} count={5} style={{color:"#4FAEAB"}}/></Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    };

    return (
        <div>
            {renderCards()}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Button onClick={handlePreviousClick} disabled={currentPage === 0}>
                    Previous
                </Button>
                <Button onClick={handleNextClick} disabled={currentPage + 1 >= Math.ceil(data.length / itemsPerPage)}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default CardSlider;
