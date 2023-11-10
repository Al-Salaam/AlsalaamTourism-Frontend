import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Rate, DatePicker, Button } from 'antd';
import TextBoxWithButtons from '../buttons';
import PrimaryButton from '../../common/buttons/primary';
import { HeartFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { addtoWishlist } from '../../../redux/actions/wishlistAction';
import { clearError, clearMessage } from '../../../redux/reducers/wishlistReducer';

import { https } from '../../../helpers/https';
import { useNavigate } from 'react-router-dom';


const BookNow = ({ activity }) => {
  const { Title } = Typography;
  const [adults, setAdults] = useState(0);
  const [childern, setChildern] = useState(0);
  const [infant, setInfant] = useState(0);
  const [date, setDate] = useState('');


  const adultIncrement = () => {
    setAdults(adults + 1);
  };

  const adultDecrement = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  };

  const childernIncrement = () => {
    setChildern(childern + 1);
  };

  const childernDecrement = () => {
    if (childern > 0) {
      setChildern(childern - 1);
    }
  };

  const infantIncrement = () => {
    setInfant(infant + 1);
  };

  const infantDecrement = () => {
    if (infant > 0) {
      setInfant(infant - 1);
    }
  };

  const dateHandler = (date) => {
    setDate(date)
  }

  const isSmallScreen = useMediaQuery({ maxWidth: 950 });

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.wishlist);

  
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [favoraite, setFavoraite] = useState(false); // Initialize to false

  // Function to check whether the item is in the wishlist
  const checkWishlistStatus = () => {
    const localStorageKey = `wishlist_${activity?._id}`;
    const isItemInWishlist = localStorage.getItem(localStorageKey) === 'true';
    setFavoraite(isItemInWishlist);
  };

  useEffect(() => {
    // Check the initial wishlist status on component mount
    checkWishlistStatus();
  }, []);
  const add_to_Wishlist = () => {
    if (user) {
      const wishlistData = {
        itemId: activity?._id,
        itemType: activity?.itemType
      };

      // Create a unique key for this item in local storage
      const localStorageKey = `wishlist_${activity?._id}`;
      const checkItem = localStorage.getItem(localStorageKey) === 'true'
      // Check if the item is already in the wishlist
      if (checkItem) {
        toast.error('Item is already in your wishlist.');
      } else {
        // If not in the wishlist, add it and update local storage
        localStorage.setItem(localStorageKey, 'true');
        dispatch(addtoWishlist(wishlistData));
        setFavoraite(true);
      }
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message)
      dispatch(clearError())
    }
    if (message) {
      toast.success(message)
      dispatch(clearMessage())
    }
    
  }, [error, toast, message, dispatch])




  const Styles = {
    margin: {
      margin: "3% 0"
    }
  }

  const operators = {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',

  };

  const valueStyle = {
    fontSize: '24px',
  };

  const placeholderStyle = {
    color: 'black',
  };

  const buttonStyle = {
    cursor: 'pointer',
    fontSize: '18px',
    padding: 0,
    border: "none",
    backgroundColor: "white"
  };

  const isSmallScreen1 = useMediaQuery({ maxWidth: 562 });
  const textBoxStyle = {

    width: isSmallScreen1 ? "100px" : "140px",
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "1%"
  };
 // Calculate total price based on rates and quantities
 const calculateTotalPrice = () => {
  const adultRate = activity?.adults || 0;
  const childrenRate = activity?.children || 0;
  const infantRate = activity?.infants || 0;

  const adultPrice = adults * adultRate;
  const childrenPrice = childern * childrenRate;
  const infantPrice = infant * infantRate;
  const basePrice = activity?.price || 0;

  return basePrice + adultPrice + childrenPrice + infantPrice;
};


  const handleBooking = async () => {
    try {
      if (adults <= 0 || childern < 0 || infant < 0 || date === '') {
        toast.error('Please fill in all the required fields.'); // Validation error
      } else if (!user) {
        navigate('/login');
      } else {
        const bookingData = {
          activityId: activity?._id,
          date: date,
          adults: adults,
          children: childern,
          infants: infant,
          totalAmount: calculateTotalPrice(),
          paymentStatus: "pending"
        };
  
        const response = await https.post(`/create-checkout-session`, bookingData);
  
        if (response.data.data.stripeCheckoutSessionUrl) {
          window.location.href = response.data.data.stripeCheckoutSessionUrl;
        } else {
          toast.error('Error creating Stripe Checkout session. Please try again later.');
        }
      }
    } catch (error) {
      console.error(error);
      // Handle other errors, e.g., display an error message to the user
      toast.error('An error occurred. Please try again later.');
    }
  };
  
  const formattedRating = activity?.noOfReviews === 0 ? 0 : (activity?.ratings % 1 === 0 ? activity?.ratings?.toFixed(0) : activity?.ratings?.toFixed(1));

  const titleStyle = {
    fontFamily: "Ubuntu",
    
   
  };
  return (
    <div >
      <Row gutter={[40]} style={Styles.margin}>
        <Col span={24}><Title level={1} style={titleStyle}>{activity?.name}</Title></Col>
      </Row>
      <Row gutter={[40]} style={Styles.margin}>
        <Col span={12}><Title level={5} style={titleStyle}>From {calculateTotalPrice().toFixed(2)} AED</Title></Col>
        <Col span={12} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <ReactStars
            count={5}
            value={activity?.noOfReviews === 0 ? 0 : activity?.ratings}
            size={28}
            isHalf={true}
            edit={false}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />  {formattedRating}/5 ({activity?.noOfReviews})</Col>
      </Row>
      <Row gutter={[40]} style={Styles.margin}>
        <Col span={24}><Title level={5} style={titleStyle}>{activity?.shortdescription}</Title></Col>
      </Row>
      <Row>
        <Col span={24} style={Styles.margin} align={isSmallScreen ? "middle" : ""} ><DatePicker value={date} onChange={dateHandler} /></Col>
      </Row>
      <Row gutter={16} style={Styles.margin}>
        <Col span={8}>
          <div style={textBoxStyle}>

            <div style={placeholderStyle}><div ><h3 style={titleStyle}>Adult</h3><p style={{...titleStyle, color: "gray" }}>Over 18+</p></div></div>
            <div style={operators}>
              <button style={buttonStyle} onClick={adultIncrement}>
                +
              </button>
              <div style={valueStyle}>{adults}</div>
              <button style={buttonStyle} onClick={adultDecrement}>
                -
              </button>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div style={textBoxStyle}>

            <div style={placeholderStyle}><div ><h3 style={titleStyle}>Children</h3><p style={{...titleStyle, color: "gray" }}>Under 12</p></div></div>
            <div style={operators}>
              <button style={buttonStyle} onClick={childernIncrement}>
                +
              </button>
              <div style={valueStyle}>{childern}</div>
              <button style={buttonStyle} onClick={childernDecrement}>  
                -
              </button>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div style={textBoxStyle}>

            <div style={placeholderStyle}><div ><h3 style={titleStyle}>Infant</h3><p style={{...titleStyle, color: "gray" }}>Under 3</p></div></div>
            <div style={operators}>
              <button style={buttonStyle} onClick={infantIncrement}>
                +
              </button>
              <div style={valueStyle}>{infant}</div>
              <button style={buttonStyle} onClick={infantDecrement}>
                -
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={Styles.margin}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} align={isSmallScreen ? "middle" : ""}><PrimaryButton title={"Book Now"} clickHandler={handleBooking} /></Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}><Button disabled={loading} onClick={add_to_Wishlist} icon={<HeartFilled style={{  color: favoraite ? 'red' : '#000'}} />} style={{...titleStyle, border: "none", fontSize: "30px", color: "#3B505A", display: isSmallScreen ? "none" : "block" }}>Add to wish list</Button></Col>
      </Row>
    </div>
  );
};

export default BookNow;
