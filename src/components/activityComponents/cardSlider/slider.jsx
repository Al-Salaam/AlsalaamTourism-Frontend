import React, { useState } from 'react';
import { Card, Row, Col, Button, Image, Rate } from 'antd';



const itemsPerPage = 3;

const CardSlider = ({reviews}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextClick = () => {
        if (currentPage + 1 < Math.ceil(reviews?.length / itemsPerPage)) {
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
        const cardsToShow = reviews?.slice(startIndex, endIndex);

        const cardStyle = {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add the box shadow style here
            
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

        };
        return (
            <Row gutter={20}>
                {cardsToShow?.map((item) => (
                    <Col key={item?._id} xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                        <Card style={cardStyle}>

                            <Row gutter={[40]}>
                                <Col span={24}> <p>{item?.comment}</p></Col>
                            </Row>

                            <Row gutter={[40]}  >
                                <Col span={8}><Image src= {item?.user?.photo}/></Col>
                                <Col span={8}><p>Name: {item?.name}</p></Col>
                                <Col span={8}><Rate allowHalf={true} disabled value={item?.rating} count={5} style={{color:"#4FAEAB"}}/></Col>
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
                <Button onClick={handleNextClick} disabled={currentPage + 1 >= Math.ceil(reviews?.length / itemsPerPage)}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default CardSlider;
