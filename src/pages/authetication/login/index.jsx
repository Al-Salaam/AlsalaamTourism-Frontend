import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { useFormik } from 'formik';
import styles from "./login.module.css"
import Eclipse from "../../../../images/eclipse1.png"
import Woman from "../../../../images/womanWithTabb.png"
import { useMediaQuery } from 'react-responsive';

const Login = ({ setIsLogin }) => {
  const [loading, setLoading] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const handleLogin = (values) => {
    // Simulate a login request (replace with your actual login logic)
    setLoading(true);
    setTimeout(() => {
      if (values.username === 'raoof' && values.password === 'hello') {
        setIsLogin(true);
        message.success('Login successful');
      } else {
        message.error('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberMe: false, // Added rememberMe field
    },
    onSubmit: handleLogin,
  });

  return (
    <Row gutter={16} className={styles.mainRow}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.col1}>
        <Form onFinish={formik.handleSubmit}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input
              type="text"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item name="rememberMe" valuePropName="checked">
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>
          <Form.Item>
            <a href="/forgot-password">Forgot Password?</a> {/* Replace with the actual URL */}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="danger" onClick={() => alert('Login with Google clicked')}>
              Login with Google
            </Button>
          </Form.Item>
        </Form>
      </Col>
      {isSmallScreen ? null : (
        <Col md={12} lg={12} xl={12} className={styles.col2}>
          <div className={styles.container}>
            <h1 className={styles.heading}>Start Your Journey by one Click, Explore Dubai with Alsalaam</h1>
            <img className={styles.smallImage} src={Eclipse} alt="Small Image" />
            <img className={styles.largeImage} src={Woman} alt="Large Image" />
          </div>
        </Col>
      )}
    </Row>
  );
};

export default Login;
