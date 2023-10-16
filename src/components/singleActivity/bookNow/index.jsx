import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Rate, DatePicker, Button } from 'antd';
import TextBoxWithButtons from '../buttons';
import PrimaryButton from '../../common/buttons/primary';
import { HeartOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { clearError, clearMessage } from '../../../redux/reducers/WishlistReducer';
import { addtoWishlist } from '../../../redux/actions/wishlistAction';


const BookNow = ({activity}) => {
  const { Title } = Typography;
  // const [rating, setRating] = useState(0);
  // const [totalReviews, setTotalReviews] = useState(0);
  const isSmallScreen = useMediaQuery({ maxWidth: 950 });
  // const handleRatingChange = (value) => {
  //   setRating(value);
  //   setTotalReviews((prevTotalReviews) => prevTotalReviews + 1);
  // };
  const dispatch = useDispatch();
  const {loading, error, message } = useSelector((state) => state.wishlist);
  
  const add_to_Wishlist = () => {
    const wishlistData = {
      itemId: activity._id,
      itemType: activity.itemType
    }
    dispatch(addtoWishlist(wishlistData))
  }

  useEffect(() => {
    if(error){
      toast.error(error.message)
      dispatch(clearError())
    }
    if(message){
      toast.success(message)
      dispatch(clearMessage())
    }
  },[error, toast, message, dispatch])

  const Styles = {
    margin: {
      margin: "3% 0"
    }
  }
  return (
    <div >
      <Row gutter={[40]} style={Styles.margin}>
        <Col span={24}><Title level={1}>{activity?.name}</Title></Col>
      </Row>
      <Row gutter={[40]} style={Styles.margin}>
        <Col span={12}><Title level={5}>From {activity?.price}.00 AED</Title></Col>
        <Col span={12} style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <ReactStars
          count={5}
          value={activity?.noOfReviews === 0 ?  0 : activity?.ratings}
          size={28}
          isHalf={true}
          edit={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />  {activity?.noOfReviews === 0 ?  0 : activity?.ratings}/5 ({activity?.noOfReviews})</Col>
      </Row>
      <Row gutter={[40]} style={Styles.margin}>
        <Col span={24}><Title level={5}>{activity?.shortdescription}</Title></Col>
      </Row>
      <Row>
        <Col span={24} style={Styles.margin} align={isSmallScreen ? "middle" : ""} ><DatePicker /></Col>
      </Row>
      <Row gutter={16} style={Styles.margin}>
        <Col span={8}><TextBoxWithButtons title={<div ><h3>Adults</h3><p style={{ color: "gray" }}>Over 18+</p></div>} /></Col>
        <Col span={8}><TextBoxWithButtons title={<div ><h3>Children</h3><p style={{ color: "gray" }}>Under 12</p></div>} /></Col>
        <Col span={8}><TextBoxWithButtons title={<div ><h3>Infant</h3><p style={{ color: "gray" }}>Under 3</p></div>} /></Col>
      </Row>
      <Row gutter={16} style={Styles.margin}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} align={isSmallScreen ? "middle" : ""}><PrimaryButton title={"Book Now"} /></Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}><Button disabled={loading} onClick={add_to_Wishlist} icon={<HeartOutlined />} style={{ border: "none", fontSize: "30px", color: "#3B505A", display: isSmallScreen ? "none" : "block" }}>Add to wish list</Button></Col>
      </Row>
    </div>
  );
};

export default BookNow;
