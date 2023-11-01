import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Input, Select, Button, Space, Image, Pagination, Typography } from 'antd';
import {
  SearchOutlined,
  HeartOutlined,
  HeartFilled,
  StarOutlined,
} from '@ant-design/icons';

import P1 from "../../../images/p1.png"
import P2 from "../../../images/p2.png"
import P3 from "../../../images/p3.png"
import P4 from "../../../images/p4.png"
import P5 from "../../../images/p5.png"
import P6 from "../../../images/p6.png"
import P7 from "../../../images/p7.png"
import P8 from "../../../images/p8.png"
import P9 from "../../../images/p9.png"

import Star from "../../../images/packStar.png"
import Time from "../../../images/time.png"

import PrimaryButton from '../../components/common/buttons/primary';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages } from '../../redux/actions/packagesAction';
import { Loader } from '../common/loader';
import { Link, useNavigate } from 'react-router-dom';
import { addtoWishlist } from '../../redux/actions/wishlistAction';
import toast from 'react-hot-toast';
import { clearError, clearMessage } from '../../redux/reducers/wishlistReducer';
import { useMediaQuery } from "react-responsive";



const { Meta } = Card;
const { Option } = Select;


const Ourpackags = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.package);
  const {message, loading:wishlistLoading, error } = useSelector((state) => state.wishlist)
  const {user} = useSelector((state) => state.auth);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [favoraite, setFavoraite] = useState()
  
  const isTabletScreen = useMediaQuery({
    query: "(max-width: 1024px)",
  });


  const isMobileScreen = useMediaQuery({
    query: "(max-width: 669px)",
  });

  const isMobileScreen2 = useMediaQuery({
    query: "(max-width: 511px)",
  });



 const marginTopStyle = isTabletScreen ? '' : '-20%';
  const pageSize = 6;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchPackages(currentPage))
  }, [dispatch, currentPage])

  const { Title } = Typography;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
  };

  const handleRatingChange = (value) => {
    setRatingFilter(value);
  };

  const toggleFavorite = (packagId) => {
    const updatedData = data.map((packagItem) => {
      if (packagItem.id === packagId) {
        return { ...packagItem, favorite: !packagItem.favorite };
      }
      return packagItem;
    });
    // Replace the data array with the updated data
    // Implement your logic to update state or API here
    console.log(updatedData);
  };

  const truncateDescription = (description, lines = 3) => {
    const lineHeight = 20; // You might need to adjust this based on your font size and line height
    const maxHeight = lineHeight * lines;
  
    const dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = description;
    dummyDiv.style.position = 'absolute';
    dummyDiv.style.visibility = 'hidden';
    dummyDiv.style.height = 'auto';
    dummyDiv.style.width = '300px'; // Set a fixed width or use any other width that fits your layout
  
    document.body.appendChild(dummyDiv);
    const textHeight = dummyDiv.offsetHeight;
    document.body.removeChild(dummyDiv);
  
    if (textHeight <= maxHeight) {
      return description;
    }
  
    let truncatedText = '';
    let currentHeight = 0;
    const words = description.split(' ');
  
    for (const word of words) {
      dummyDiv.innerHTML = truncatedText + ' ' + word;
      document.body.appendChild(dummyDiv);
      const wordHeight = dummyDiv.offsetHeight - currentHeight;
  
      if (currentHeight + wordHeight <= maxHeight) {
        truncatedText += (truncatedText ? ' ' : '') + word;
        currentHeight += wordHeight;
      } else {
        break;
      }
  
      document.body.removeChild(dummyDiv);
    }
  
    return truncatedText + '...';
  };

  // Calculate filteredData here, before using it
  const filteredData = data && data
    .filter((packag) =>
      categoryFilter === 'All' ? true : packag.category === categoryFilter
    )
    .filter((packag) => {
      const searchQuery = search.trim().toLowerCase();
      return (
        searchQuery === '' ||
        packag.title.toLowerCase().includes(searchQuery) ||
        packag.description.toLowerCase().includes(searchQuery)

        // Add more fields to search if necessary
      );
    })
    .sort((a, b) => (ratingFilter === 'asc' ? a.rating - b.rating : b.rating - a.rating));

  // Calculate currentData based on filteredData and currentPage
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);

  // styling

  const styles = {
    width: {

      width: "40%",
      borderBottom: "1px solid black",
      borderRadius: "0",
      marginTop:isMobileScreen ? (isMobileScreen2 ? "5%" : "3%") : "3%",
      marginLeft:isMobileScreen ? (isMobileScreen2 ? "7%" : "2%") : "2%"
      

    },

    filterFlex: {

      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",

    },
    borders: {
      border: "none"
    }
  }

  const add_to_Wishlist = (itemId, itemType) => {
    
      const wishlistData = {
        itemId:itemId,
        itemType: itemType
      }
      if(user) {
        const localStorageKey = `wishlist_${itemId}`;
        const checkItem = localStorage.getItem(localStorageKey) === 'true'
        // Check if the item is already in the wishlist
        if (checkItem) {
          toast.error('Item is already in your wishlist.');
        } else {
          // If not in the wishlist, add it and update local storage
          localStorage.setItem(localStorageKey, 'true');
          dispatch(addtoWishlist(wishlistData));
          setFavoraite(checkItem);
        }
      }else{
        navigate('/login')
      }
      
  
    
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

  return (
    <div style={{width:"98%", overflowX:"hidden"}}>
      <Row gutter={[16, 16]} justif="center"><Col span={24} align="middle"> <Title level={2} style={{marginTop:"4%"}}>Our Packages</Title> <p>We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.</p></Col> </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input
            placeholder="Search packags"
            prefix={<SearchOutlined />}
            value={search}
            onChange={handleSearchChange}
            style={styles.width}
            bordered={false}
          />
          <div style={{ margin: "5% 0", color: "#3B505A", fontSize: "14.57px", fontWeight: "400px", marginLeft:isMobileScreen ? (isMobileScreen2 ? "7%" : "2%") : "2%", marginTop:isMobileScreen ? (isMobileScreen2 ? "8%" : "4%") : "4%" }}>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} packages
          </div>
        </Col>


        {/* <Col span={12} align="end" style={styles.filterFlex}>


          <Select
            defaultValue="Raoof"
            bordered={false}
            value={categoryFilter}
            style={{
              width: 120,
              borderBottom: "1px solid black",
              color: "black"
            }}
            onChange={handleCategoryChange}
            options={[
              {
                value: "All",
                label: "Categories"
              },
              {
                value: "Couple",
                label: "Couple"
              },
              {
                value: "Single",
                label: "Single"
              },

            ]}
          />


          <Select
            defaultValue="Order"
            bordered={false}
            value={ratingFilter}
            style={{
              width: 120,
              borderBottom: "1px solid black",
              color: "black"
            }}
            onChange={handleRatingChange}
            options={[
              {
                value: "asc",
                label: "Ascending"
              },
              {
                value: "desc",
                label: "Descending"
              },


            ]}
          />
        </Col> */}

      </Row>

      <Row gutter={[16, 16]}>
        {loading ? <Loader /> : (
          <>
            {currentData.map((packag) => (
              <Col key={packag._id} xs={24} sm={12} md={8} lg={8} xl={8} >
                <Card
                style={{marginLeft:"3%", marginRight:"1%"}}
                  cover={
                    <Image
                      alt={packag.heading}
                      src={packag.images[0].url}
                    />
                  }
                >
                  <Space style={{ position: 'absolute', top: 0, left: 0, padding: '8px' }}>
                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0C111F57", height: "50px", borderRadius: "20px", width: "120px", color: "white" }}><img src={Star} style={{ marginTop: "12px" }} /><h2>{packag.noOfReviews === 0 ? 0 : packag.ratings}</h2></span>
                  </Space>
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      padding: '8px',
                    }}
                  >
                    <HeartFilled onClick={() => add_to_Wishlist(packag._id, packag.itemType)} style={{ color: favoraite ? "Salmon" : "inherit", fontSize: "30px" }} />
                  </div>
                  <br />
                  <Meta
                    title={packag.heading}
                    description={truncateDescription(packag.description)}
                  />


                  <Row style={{marginTop:30}} xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Col span={24}><Title level={5}>Duration</Title></Col>
                    <Col  xs={24} sm={24} md={24} lg={12} xl={16} >
                      <div style={{display:"inline-flex"}} >
                      <img src={Time} style={{marginRight:"5px"}}/>  <p>{packag.duration}</p>
                      </div>
                    </Col>
                    <Link to={`/packages/${packag._id}`}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={16} align="right" style={{ marginTop: marginTopStyle }} >
                      <PrimaryButton title={"View Details"}width='140%' />
                    </Col>
                    </Link>
                    
                  </Row>
                </Card>
              </Col>
            ))}
          </>
        )}

      </Row>
      <div style={{ textAlign: "center", margin: "1%" }}>
        <Pagination
          current={currentPage}
          total={filteredData.length}
          pageSize={pageSize}
          onChange={handlePageChange}

        />
      </div>
    </div>
  );
};

export default Ourpackags;
