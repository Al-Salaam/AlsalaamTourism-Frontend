import { useEffect } from "react";
import { Row, Col, Divider, Image, Typography, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAddToCartData, removeFromCart } from "../../../redux/reducers/activityReducer";
import { CloseCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const ShoppingComponent = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(getAddToCartData());
  }, [dispatch]);

  const { Title } = Typography;

  // Calculate the subtotal
  const subtotal = cart?.reduce(
    (acc, item) => (item ? acc + (item.price || 0) : acc),
    0
  );

  const handleRemoveItem = (activityId) => {
    // Dispatch the removeFromCart action to remove the item from the cart
    dispatch(removeFromCart({ activityId }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", }}>
      {cart.length === 0 ? (
        <>
          <ShoppingCartOutlined style={{ fontSize: "50px" }} />
          <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Your Cart is Empty</h3>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item?.activityId} style={{}}>
              <Row gutter={16} style={{ marginBottom: "20px" }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} align="middle">
                  <Image src={item.image} alt="image" width={150} height={150} style={{ objectFit: 'contain' }} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginTop: "20px" }}>
                  <Title level={4}>{item?.title}</Title>
                  <Title level={4} style={{ marginTop: "-10px" }}>{item?.price} AED</Title>
                  <Space>
                    <Link to={`/activity/${item.slug}`} >View Details</Link>

                    <CloseCircleOutlined
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontSize: "18px",
                        marginRight: "8px", // Adjust the spacing as needed
                      }}
                      onClick={() => handleRemoveItem(item.activityId)}
                    />
                  </Space>
                </Col>
              </Row>
              <Divider />
             
            </div>
          ))}
         
          <div style={{textAlign:"left"}}>
          <h5>SubTotal</h5>
          <h5 style={{color:"#3B505A"}}>{subtotal} AED</h5>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingComponent;
