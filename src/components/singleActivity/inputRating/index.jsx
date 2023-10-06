import React, { useState } from 'react';
import { Row, Col, Button, Input, Rate } from 'antd';

const RatingInput = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleAddReviewClick = () => {
    setShowReviewForm(true);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmitReview = () => {
    // Handle the submission of the review data (rating and reviewText)
    // You can send this data to your backend or perform any necessary actions here
    console.log('Rating:', rating);
    console.log('Review Text:', reviewText);

    // Reset the form
    setRating(0);
    setReviewText('');
    setShowReviewForm(false);
  };

//   Styles

const styles={
    para:{
        fontSize:"16px",
        color:"#696969",
        fontWeight:"400px",
        
    },
    button:{
     backgroundColor:"white",
     border:"none",
     color:"#3B505A",
     fontSize: "20px",
     fontWeight: '700px'  
    },
    textArea:{
        backgroundColor:"#EFF0F2",
        border:"none"
    },
    submit:{
        color:"white",
        backgroundColor:"#3B505A"
    }
}

  return (
    <div>
      <Row gutter={16}>
        {/* First Row */}
        <Col span={12} style={styles.para}>
          <p>Click the button to add a review</p>
        </Col>
        <Col span={12}>
          <Button onClick={handleAddReviewClick} style={styles.button}>
           + Add Review
          </Button>
        </Col>
      </Row>

      {/* Second and Third Rows */}
      {showReviewForm && (
        <>
          <Row gutter={16}>
            {/* Second Row */}
            <Col span={24}>
              <Input.TextArea
                placeholder="Write your review here"
                value={reviewText}
                onChange={handleReviewTextChange}
                rows={4}
                style={styles.textArea}
              />
            </Col>
          </Row>

          <Row gutter={16}>
            {/* Third Row */}
            <Col span={12}>
              <span>Rating:</span>
              <Rate value={rating} onChange={handleRatingChange} />
            </Col>
            <Col span={12}>
              <Button style={styles.submit} onClick={handleSubmitReview}>
                Submit
              </Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default RatingInput;
