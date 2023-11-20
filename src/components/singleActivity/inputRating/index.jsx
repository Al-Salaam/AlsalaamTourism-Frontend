import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Input, Rate } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { createActivitiesReviews } from '../../../redux/actions/activityAction';
import { clearError, clearMessage } from '../../../redux/reducers/activityReducer';
import toast from 'react-hot-toast';

const RatingInput = ({ activity }) => {

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.activity);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const isSmallScreen = useMediaQuery({ maxWidth: 950 });

  const handleAddReviewClick = () => {
    setShowReviewForm(true);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const ratingData = {
      rating: rating,
      comment: reviewText
    }
    console.log(ratingData)
    dispatch(createActivitiesReviews({ id: activity._id, ratingData }))

    setRating(0);
    setReviewText('');

  };

  useEffect(() => {
    if (error) {
      toast.error(error.message)
      dispatch(clearError())
    }
    if (message) {
      toast.success(message)
      dispatch(clearMessage())
      setShowReviewForm(false);
    }
  }, [dispatch, error, message, toast])

  //   Styles

  const styles = {
    para: {
      fontSize: "16px",
      color: "#696969",
      fontWeight: "400px",

    },
    button: {
      backgroundColor: "white",
      border: "none",
      color: "#3B505A",
      fontSize: "20px",
      fontWeight: '700px'
    },
    textArea: {
      backgroundColor: "#EFF0F2",
      border: "none"
    },
    submit: {
      color: "white",
      backgroundColor: "#3B505A",
      width:"170px",
      height:"50px",
      borderRadius:"30px",
      fontSize:"23px"
    }
  }

  const titleStyle = {
    fontFamily: "Ubuntu",
    
   
  };

  return (
    <div >
      <Row gutter={16} style={{padding:"2% 0"}}>
        {/* First Row */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={styles.para}>
          <p style={titleStyle}>Click the button to add a review</p>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} align={isSmallScreen ? "" : "right"}>
          <Button onClick={handleAddReviewClick} style={styles.button}>
            + Add Review
          </Button>
        </Col>
      </Row>

      {/* Second and Third Rows */}
      {showReviewForm && (
        <>
          <Row gutter={16} style={{padding:"2% 0"}}>
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

          <Row gutter={[16]} style={{padding:"2% 0"}}>
            {/* Third Row */}
            <Col xs={24} sm={24} md={12} lg={12} xl={12} align={isSmallScreen ? "middle" : ""} >

              <Rate allowHalf={true} value={rating} onChange={handleRatingChange} style={{fontSize:"40px"}} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} align={isSmallScreen ? "middle" : ""}>
              <Button disabled={loading} style={styles.submit} onClick={handleSubmitReview}>
                {loading ? "loading..." : "Submit"}
              </Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default RatingInput;
