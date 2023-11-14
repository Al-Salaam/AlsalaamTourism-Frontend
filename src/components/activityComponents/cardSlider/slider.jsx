import React, { useState } from 'react';
import { Card, Row, Col, Button, Image, Rate } from 'antd';
import Title from 'antd/es/typography/Title';
import imog from "../../../../images/4.png"


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
            marginLeft:"10px"
        };
        return (
            <Row gutter={20}>
                {cardsToShow?.map((item) => (
                    <Col key={item?._id} xs={22} sm={22} md={12} lg={8} xl={8} xxl={8}>
                        <Card style={cardStyle}>

                            <Row  xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Col span={24}> <p>{item?.comment}</p></Col>
                            </Row>

                            <Row gutter={10} style={{marginTop:"30px"}}>
                                <Col xs={8} sm={8} md={12} lg={12} xl={4}><Image src= {item?.user?.photo} style={{width:"70px",height:"70px", borderRadius:"100%",border:"2px solid #4FAEAB"}}/></Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={10}><Title level={4}> {item?.name}</Title></Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={10}><Rate allowHalf={true} disabled value={item?.rating} count={5} style={{color:"#4FAEAB"}}/></Col>
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
            {reviews?.length === 0 ? null : (<>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Button onClick={handlePreviousClick} disabled={currentPage === 0} style={{marginRight:"10px"}} >
                    Previous
                </Button>
                <Button onClick={handleNextClick} disabled={currentPage + 1 >= Math.ceil(reviews?.length / itemsPerPage)}>
                    Next
                </Button>
            </div>
            </>)}
            
        </div>
    );
};

export default CardSlider;
