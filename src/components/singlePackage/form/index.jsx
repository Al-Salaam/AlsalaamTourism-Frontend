import React, { useState } from 'react';
import { Row, Col, DatePicker, Select, Input, Radio, Button } from 'antd';

const { Option } = Select;

function FormCard() {
  const [formData, setFormData] = useState({
    checkinDate: null,
    numberOfRooms: null,
    numberOfDays: null,
    nationality: '',
    numberOfNights: null,
    roomPreference: '',
    adults: '',
    children: '',
    hotel: '',
    meals: '',
    excursion: '',
    covidDoses: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData);
    setFormData({
        checkinDate: null,
        numberOfRooms: null,
        numberOfDays: null,
        nationality: '',
        numberOfNights: null,
        roomPreference: '',
        adults: '',
        children: '',
        hotel: '',
        meals: '',
        excursion: '',
        covidDoses: '',
      });
  };
  const componentStyle = {
    width: '170px',
    height: '50px',
    margin:"1%"
  };
  
  const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#696969',
    margin:"1%",
  };

  const cardStyle = {
    border: '1px solid #e8e8e8',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: '20px',
    borderRadius: '8px',

  };
  return (
      <>
      <div style={cardStyle}>
      <div style={{display:"flex", justifyContent:"space-between",width:"80%",margin:"0 auto"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={labelStyle}>Check-in Date</div>
          <DatePicker style={componentStyle} onChange={(date) => setFormData({ ...formData, checkinDate: date })} />
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={labelStyle}>Number of Rooms</div>
          <select size='large' style={{...componentStyle, border:"1px solid lightgray", backgroundColor:"white",borderRadius:"7px"}} onChange={(value) => setFormData({ ...formData, numberOfRooms: value })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      </div>
      <Row style={cardStyle} >
        <Col  span={20}  >
        <Row gutter={16}>
        <Col span={12}  >
          
          <div style={labelStyle}>Check-in Date</div>
          <DatePicker style={componentStyle} onChange={(date) => setFormData({ ...formData, checkinDate: date })} />
        </Col>
        <Col span={12}>
          <div style={labelStyle}>Number of Rooms</div>
          <Select size='large' style={componentStyle} onChange={(value) => setFormData({ ...formData, numberOfRooms: value })}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            {/* Add more options as needed */}
          </Select>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <div style={labelStyle}>Number of Days</div>
          <Select size='large' style={componentStyle} onChange={(value) => setFormData({ ...formData, numberOfDays: value })}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            {/* Add more options as needed */}
          </Select>
        </Col>
        <Col span={12}>
          <div style={labelStyle}>Nationality</div>
          <Input style={componentStyle} onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <div style={labelStyle}>Number of Nights</div>
          <Select size='large' style={componentStyle} onChange={(value) => setFormData({ ...formData, numberOfNights: value })}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            {/* Add more options as needed */}
          </Select>
        </Col>
        <Col span={12}>
          <div style={labelStyle}>Room Preference</div>
          <Select size='large' style={componentStyle} onChange={(value) => setFormData({ ...formData, roomPreference: value })}>
            <Option value="1px">1px</Option>
            <Option value="2px">2px</Option>
            {/* Add more options as needed */}
          </Select>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <div style={labelStyle}>Adults</div>
          <Input style={componentStyle} onChange={(e) => setFormData({ ...formData, adults: e.target.value })} />
        </Col>
        <Col span={12}>
          <div style={labelStyle}>Children with Ages</div>
          <Input style={componentStyle} onChange={(e) => setFormData({ ...formData, children: e.target.value })} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <div style={labelStyle}>Select a Hotel</div>
          <Select size='large' style={componentStyle} onChange={(value) => setFormData({ ...formData, hotel: value })}>
            <Option value="hotel1">Hotel 1</Option>
            <Option value="hotel2">Hotel 2</Option>
            <Option value="hotel3">Hotel 3</Option>
            {/* Add more options as needed */}
          </Select>
        </Col>
        <Col span={12}>
          <div style={labelStyle}>Preferred Meals</div>
          <Select size='large' style={componentStyle} onChange={(value) => setFormData({ ...formData, meals: value })}>
            <Option value="meals1">Meals 1</Option>
            <Option value="meals2">Meals 2</Option>
            <Option value="meals3">Meals 3</Option>
            {/* Add more options as needed */}
          </Select>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <div style={labelStyle}>Excursion to be Visited</div>
          <Radio.Group
            style={{margin:"5%"}}
            onChange={(e) => setFormData({ ...formData, excursion: e.target.value })}
            value={formData.excursion}
          >
            <Radio value="withTickets">With Tickets</Radio>
            <Radio value="withoutTickets">Without Tickets</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <div style={labelStyle}>Please Specify the number of received Doses for Covid 19</div>
          <Input style={{width:"50%"}}
            onChange={(e) => setFormData({ ...formData, covidDoses: e.target.value })}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Button type="primary" onClick={handleFormSubmit}>Submit</Button>
        </Col>
      </Row>
        </Col>
        </Row>
        </>
  );
}

export default FormCard;
