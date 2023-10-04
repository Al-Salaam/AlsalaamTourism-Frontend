import React, { useState } from 'react';
import { Row, Col, Typography, Rate, DatePicker, Button } from 'antd';
import TextBoxWithButtons from '../buttons';
import PrimaryButton from '../../common/buttons/primary';
import { HeartOutlined } from '@ant-design/icons'; 

const BookNow = () => {
    const {Title} = Typography;
    const [rating, setRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
  
    const handleRatingChange = (value) => {
      setRating(value);
      setTotalReviews((prevTotalReviews) => prevTotalReviews + 1);
    };
  return (
    <div>
      <Row gutter={16}>
        <Col span={24}><Title level={4}>Al Ain City Tours</Title></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}><Title level={5}>From 699.00 AED</Title></Col>
        <Col span={12}> <Rate onChange={handleRatingChange} value={rating} />  {rating}/5 ({totalReviews})</Col>
      </Row>
      <Row>
        <Col span={24}><Title level={5}>Visit the beautiful city of Al Ain in the United Arab Emirates, which is home to museums, forts, parks, and primarily Jebel Hafeet, the second-largest mountain in the country.</Title></Col>
      </Row>
      <Row>
        <Col span={24}><DatePicker/></Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}><TextBoxWithButtons title={<div ><h3>Adults</h3><p style={{color:"gray"}}>Over 18+</p></div>}/></Col>
        <Col span={8}><TextBoxWithButtons title={<div ><h3>Children</h3><p style={{color:"gray"}}>Under 12</p></div>}/></Col>
        <Col span={8}><TextBoxWithButtons title={<div ><h3>Infant</h3><p style={{color:"gray"}}>Under 3</p></div>}/></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}><PrimaryButton title={"Book Now"}/></Col>
        <Col span={12}><Button icon={<HeartOutlined/>} style={{border:"none",fontSize:"30px",color:"#3B505A"}}>Add to wish list</Button></Col>
      </Row>
    </div>
  );
};

export default BookNow;
