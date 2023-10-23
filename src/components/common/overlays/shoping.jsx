import React, { useEffect } from "react";
import { Row, Col, Divider, Image, Typography, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAddToCartData, removeFromCart } from "../../../redux/reducers/activityReducer";
import { CloseOutlined } from "@ant-design/icons";
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
    <div style={{ padding: "20px" }}>
      {cart.length === 0 ? (
        <h1 style={{textAlign:'center',marginTop:'100px'}}>Your cart is empty</h1>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item?.activityId}>
              <Row gutter={16} style={{ marginBottom: "20px" }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} align="middle">
                  <Image src={item.image} alt="image" width={150} height={150} style={{objectFit:'contain'}} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Title level={3}>{item?.title}</Title>
                  <Title level={5}>{item?.price} AED</Title>
                  <Space>
                    <Link to={`/activity/${item.activityId}`}>View Details</Link>
                    <CloseOutlined
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
          <Row gutter={16}>
            <Col span={12} align="middle">
              <Title level={5}>SubTotal</Title>
            </Col>
            <Col span={12} align="middle">
              <Title level={5}>{subtotal} AED</Title>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default ShoppingComponent;
