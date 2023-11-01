import { Button, Card, Col, Row, Select } from 'antd';
import { Link } from 'react-router-dom'
import {
  ClockCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { fetchWishlistData, removeWishListItems } from '../../../redux/actions/wishlistAction';
import { toast } from 'react-hot-toast'
/* const { Meta } = Card; */
import { Loader } from '../../common/loader'
import {clearError, clearMessage} from '../../../redux/reducers/wishlistReducer'
const Wishlist = () => {
  const dispatch = useDispatch();
  const { loading, data, error, message } = useSelector((state) => state.wishlist);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    dispatch(fetchWishlistData())
  }, [dispatch])


  const removeItemFunc = (itemId, itemType) => {
    // Create a unique key for this item in local storage
    const localStorageKey = `wishlist_${itemId}`;

    // Check if the item is in the wishlist
    if (localStorage.getItem(localStorageKey) === 'true') {
      // If it's in the wishlist, remove it from local storage
      localStorage.removeItem(localStorageKey);
      // Dispatch the action to remove it from the Redux store
    }
    dispatch(removeWishListItems({ itemId, itemType }));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
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
  }, [error, message, toast, dispatch])

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
  
  return (
    <>

      {loading ? <Loader /> : (
        <>
          <Row >
            <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
              <h1>Wishlist</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ display: "flex", justifyContent: "flex-end", gap: "40px" }}>
              <Select
                name="cars"
                style={{ width: "200px", height: "40px", borderRadius: "10px" }}
                defaultValue="All"
                onChange={handleFilterChange}
              >
                <Select.Option value="All">All</Select.Option>
                <Select.Option value="activities">Activities</Select.Option>
                <Select.Option value="packages">Packages</Select.Option>
              </Select>
            </Col>
          </Row>



          <Row gutter={[12, 12]} xs={24} sm={24} md={24} lg={24} xl={24}>
            {data?.activities?.filter((item) => filter === 'All' || filter === 'activities')?.map((item, index) => (
              <>
                <Card hoverable key={item?._id} style={{ width: '100%', minHeight: '100%' }}>
                  <Row gutter={[12, 12]} xs={24} sm={24} md={24} lg={24} xl={24}>

                    <Col xs={24} sm={24} md={5} lg={7} xl={7}>
                      <img
                        alt="example"
                        src={item?.images[0]?.url}
                        style={{ width: '100%', height: '200px', borderRadius: '20px 0 0 20px' }}
                      />
                    </Col>


                    <Col xs={24} sm={24} md={12} lg={11} xl={11}>
                      <h2>{item?.name}</h2>
                      <h3 style={{ color: "gray", marginTop: "5px" }}>{item?.shortdescription}</h3>
                    </Col>


                    <Col xs={24} sm={24} md={7} lg={6} xl={6} style={{ marginTop: '10px', }}>
                      <Row style={{ display: "flex", justifyContent: "end" }}>
                        <CloseOutlined onClick={() => removeItemFunc(item?._id, item?.itemType)} style={{ color: "red" }} />
                      </Row>
                      <Row style={{ display: "flex", justifyContent: "center" }}>
                        <h2>City Trips</h2>
                      </Row>
                      <Row style={{ display: "flex", justifyContent: "center" }}>
                        <ClockCircleOutlined /> <h3 style={{ color: "gray", marginLeft: "5px" }}>{item?.duration}</h3>
                      </Row>
                      <Row style={{ display: "flex", justifyContent: "center" }}>
                        <Link to={`/activity/${item?._id}`}>
                          <Button
                            size="large"
                            style={{
                              background: '#3B505A',
                              color: 'white',
                              borderRadius: '20px',
                              width: '180px',
                              marginTop: '40px',
                            }}
                          >
                            View Details
                          </Button>
                        </Link>

                      </Row>
                    </Col>
                  </Row>
                </Card>
              </>
            ))}

      {data?.packages?.filter((item) => filter === 'All' || filter === 'packages')?.map((item, index) => (
              <>
                <Card hoverable key={item?._id} style={{ width: '100%', minHeight: '100%' }}>
                  <Row gutter={[12, 12]} xs={24} sm={24} md={24} lg={24} xl={24}>

                    <Col xs={24} sm={24} md={5} lg={7} xl={7}>
                      <img
                        alt="example"
                        src={item?.images[0]?.url}
                        style={{ width: '100%', height: '200px', borderRadius: '20px 0 0 20px' }}
                      />
                    </Col>


                    <Col xs={24} sm={24} md={12} lg={11} xl={11}>
                      <h2>{item?.heading}</h2>
                      <h3 style={{ color: "gray", marginTop: "5px" }}>{truncateDescription(item?.description)}</h3>
                    </Col>


                    <Col xs={24} sm={24} md={7} lg={6} xl={6} style={{ marginTop: '10px', }}>
                      <Row style={{ display: "flex", justifyContent: "end" }}>
                        <CloseOutlined onClick={() => removeItemFunc(item?._id, item?.itemType)} style={{ color: "red" }} />
                      </Row>
                      <Row style={{ display: "flex", justifyContent: "center" }}>
                        <h2>City Trips</h2>
                      </Row>
                      <Row style={{ display: "flex", justifyContent: "center" }}>
                        <ClockCircleOutlined /> <h3 style={{ color: "gray", marginLeft: "5px" }}>{item?.duration}</h3>
                      </Row>
                      <Row style={{ display: "flex", justifyContent: "center" }}>
                        <Link to={`/packages/${item?._id}`}>
                          <Button
                            size="large"
                            style={{
                              background: '#3B505A',
                              color: 'white',
                              borderRadius: '20px',
                              width: '180px',
                              marginTop: '40px',
                            }}
                          >
                            View Details
                          </Button>
                        </Link>

                      </Row>
                    </Col>
                  </Row>
                </Card>
              </>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default Wishlist;
