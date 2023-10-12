import React, { useState } from 'react';
import { Row, Col, DatePicker, Select, Input, Radio, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

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
  const isSmallestScreen = useMediaQuery({ maxWidth: 1045 });
  const isSmallScreen = useMediaQuery({ maxWidth: 1006 });
  const componentStyle = {
    width: '155px',
    height: '50px',
    margin: isSmallestScreen ? "5% 0" : "5%"
  };

  const labelStyle = {
    fontSize: '100%',
    fontWeight: 'bold',
    color: '#696969',
    margin: isSmallestScreen ? "5% 0" : "5%",
  };

  const cardStyle = {
    border: '1px solid #e8e8e8',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    padding:"5%",
    width:isSmallestScreen ? "100%" : "80%",
    margin:isSmallScreen? "5%" : "2% 20%",
    


  };

  
  return (
    <>
      <div style={cardStyle}>

        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>Travel Date</div>
            <DatePicker style={componentStyle} onChange={(date) => setFormData({ ...formData, checkinDate: date })} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>No. of Rooms</div>
            <select size='large' style={{ ...componentStyle, border: "1px solid lightgray", backgroundColor: "white", borderRadius: "7px" }} onChange={(value) => setFormData({ ...formData, numberOfRooms: value })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>Days of Visit</div>
            <select size='large' style={{ ...componentStyle, border: "1px solid lightgray", backgroundColor: "white", borderRadius: "7px" }} onChange={(value) => setFormData({ ...formData, numberOfRooms: value })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{...labelStyle, fontSize:"90%"}}>Traveler’s Nationality</div>
            <Input style={componentStyle} onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />

          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>No of Night stays</div>
            <select size='large' style={{ ...componentStyle, border: "1px solid lightgray", backgroundColor: "white", borderRadius: "7px" }} onChange={(value) => setFormData({ ...formData, numberOfRooms: value })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{...labelStyle, fontSize:"85%"}}>1 Pax in each Room or 2</div>
            <select size='large' style={{ ...componentStyle, border: "1px solid lightgray", backgroundColor: "white", borderRadius: "7px" }} onChange={(value) => setFormData({ ...formData, numberOfRooms: value })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more options as needed */}
            </select>

          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>No. of Pax Adults</div>
            <Input style={componentStyle} onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{...labelStyle, fontSize:"75%"}}>No. of pax Children (with ages) </div>
            <Input style={componentStyle} onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />

          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>Select Hotel</div>
            <select size='large' style={{ ...componentStyle, border: "1px solid lightgray", backgroundColor: "white", borderRadius: "7px" }} onChange={(value) => setFormData({ ...formData, numberOfRooms: value })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>Preferred Meal</div>
            <select size='large' style={{ ...componentStyle, border: "1px solid lightgray", backgroundColor: "white", borderRadius: "7px" }} onChange={(value) => setFormData({ ...formData, numberOfRooms: value })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more options as needed */}
            </select>

          </div>
        </div>
         
        <div style={{ display: "flex",flexDirection:"column"  }}>
        <div style={{...labelStyle,display:"flex",justifyContent:"center"}}>Excursion to be Visited</div>

          <div style={{ display:"flex", justifyContent:"space-evenly" }}>
            
            <label>
              <input type="radio" name="ticketType" value="withTickets"/> With Tickets
            </label>
            <br/>
              <label>
                <input type="radio" name="ticketType" value="withoutTickets"/> Without Tickets
              </label>
          </div>

        </div>
           
        
          <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",alignItems:"center"}}>
            <div style={{...labelStyle}}>Please Specify the number of received Doses for Covid 19</div>
            <Input style={{...componentStyle,width:"70%"}} onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />
          </div>
        
        

        <div style={{ display: "flex",justifyContent:"center"  , margin: "0 auto" }}>
        <Button  onClick={handleFormSubmit} style={{width: "20vw", backgroundColor:"#3B505A",color:"white", borderRadius:"30px"}}>Submit</Button>
        
        </div>

      </div>

    </>
  );
}

export default FormCard;
