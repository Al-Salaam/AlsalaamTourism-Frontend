import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, message, Typography, Divider } from 'antd';
import { useMediaQuery } from 'react-responsive';
import * as Yup from 'yup'; // Import Yup for validation
import { Formik, Field, ErrorMessage } from 'formik';
import styles from './login.module.css';
import Eclipse from '../../../../images/eclipse1.png';
import Woman from '../../../../images/womanWithTabb.png';
import LoginWithGoogle from '../../../components/common/buttons/loginWithGoogle';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please input your Username!'),
  password: Yup.string().required('Please input your Password!'),
});

const Login = ({ setIsLogin }) => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isSignUp, setIsSignUp] = useState(false)
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const { Title } = Typography;


  const handleLogin = (values) => {
    setLoading(true);
    setTimeout(() => {
      console.log(values)
      if (userName === 'raoof' && password === 'hello') {
        setIsLogin(true);
        message.success('Login successful');
      } else {
        message.error('Invalid username or password');
      }
      setLoading(false);

    }, 10);
  };

  const dummyAlert = () => {
    alert("hello login with google")
  }

  const handleSignupClick = () => {
    setIsSignUp(true)
  };
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        rememberMe: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ values }) => (

        <Row gutter={16} className={styles.mainRow}>
          {console.log(values)}
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.col1}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onSubmit={handleLogin}

            >
              <Row gutter={16} justify="center">
                <Col  >
                  {isSignUp ? (
                    <>
                      <Title level={1}>WELCOME TO ALSALAAM</Title>
                    </>
                  ) : (
                    <>
                     <Title level={1}>Log In</Title>
                                          </>
                  )}
                </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                  {isSignUp ? (
                    <>
                      <Title level={5}>UserName</Title>
                    </>
                  ) : (
                    <>
                     <Title level={5}>Email/Username</Title>
                                          </>
                  )}
                    
                  </Col>
                  <Col span={24}>
                    <Form.Item name="username">
                      <Field
                        name="username"
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Username"
                            className={styles.grayBackground}
                            onChange={(e) => {
                              field.onChange(e); // This will update Formik's value
                              // Update your component's state with the username value
                              setUserName(e.target.value);
                            }}
                          />
                        )}
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Row>
                  <Col>
                  {isSignUp ? (<>Hello Sign Up</>):("")}
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Title level={5}>Password</Title>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="password">
                      <Field
                        name="password"
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="password"
                            placeholder="Password"
                            className={styles.grayBackground}
                            onChange={(e) => {
                              field.onChange(e); // This will update Formik's value
                              // Update your component's state with the username value
                              setPassword(e.target.value);
                            }}
                          />
                        )}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="remember" valuePropName="checked" noStyle >
                      <Checkbox >Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12} align="right">
                    <a style={{ color: "#007074" }} href="">
                      Forgot password
                    </a>
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: "5%" }}  >
                  <Col span={24} align="middle">
                    <Form.Item>
                      <Button onClick={handleLogin} htmlType='submit' style={{ backgroundColor: "#3B505A", borderRadius: "20px", width: "20em", height: "3em", color: "white" }}>Login</Button>
                    </Form.Item>
                  </Col>

                </Row>
                <Row gutter={12} align="center" style={{ marginTop: "-5%" }} >
                  <Col  >
                    <Form.Item>
                      Dosent have An account <Button  style={{ color: "#007074",backgroundColor:"white",border:"none" }} onClick={handleSignupClick}>Signup</Button>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={12} align="center">
                  <Col  >
                    <Divider plain style={{ borderWidth: 5, borderColor: "lightGray" }}>OR</Divider>
                    <Form.Item>
                      <LoginWithGoogle handleClick={dummyAlert} />
                    </Form.Item>
                  </Col>
                </Row>
            </Form>
          </Col>
          {isSmallScreen ? null : (
            <Col md={12} lg={12} xl={12} className={styles.col2}>
              <div className={styles.container}>
                <h1 className={styles.heading}>
                  Start Your Journey by one Click, Explore Dubai with Alsalaam
                </h1>
                <img className={styles.smallImage} src={Eclipse} alt="Small Image" />
                <img className={styles.largeImage} src={Woman} alt="Large Image" />
              </div>
            </Col>
          )}
        </Row>
      )}
    </Formik>
  );
};

export default Login;
