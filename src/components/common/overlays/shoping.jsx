import React, { useEffect } from 'react';
import { Row, Col, Divider, Image, Typography } from 'antd';
import PrimaryButton from "../buttons/primary";
import { useDispatch, useSelector } from 'react-redux';
import { getAddToCartData } from '../../../redux/reducers/activityReducer';
import { Link } from 'react-router-dom';

const ShoppingComponent = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.activity);

    useEffect(() => {
        dispatch(getAddToCartData());
    }, [dispatch]);

    const { Title } = Typography;

    // Calculate the subtotal
    const subtotal = cart?.reduce((acc, item) => (item ? acc + (item.price || 0) : acc), 0);

    return (
        <div style={{ padding: '20px' }}>
            {cart && cart.map((item) => (
                <div key={item?.activityId}>
                    <Row gutter={16} style={{ marginBottom: "20px" }}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} align="middle">
                            <Image src={item.image} alt="image" />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Title level={3}>{item?.title}</Title>
                            <Title level={5}>{item?.price} AED</Title>
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

            <Row justify="start" style={{ paddingTop: "20px" }}>
                <Col span={24} align="middle">
                    <Link to={`/activity/${cart.map((item) => item.activityId).join(',')}`}>
                        <PrimaryButton title="View Details" />
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default ShoppingComponent;
