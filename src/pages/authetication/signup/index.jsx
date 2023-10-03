import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Row, Col, Typography, Divider } from 'antd';
import { useMediaQuery } from 'react-responsive';
import styles from '../login/login.module.css';
import Eclipse from '../../../../images/eclipse1.png';
import Woman from '../../../../images/womanWithTabb.png';
import LoginWithGoogle from '../../../components/common/buttons/loginWithGoogle';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../redux/actions/authAction';
import toast from 'react-hot-toast';
import { clearError, clearMessage } from '../../../redux/reducers/authReducer';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isSmallScreen = useMediaQuery({ maxWidth: 990 });
    const { Title } = Typography;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector((state) => state.auth);
    const handleLogin = (e) => {
        e.preventDefault();
        const credentials = {
            name, username, email, password
        }
        dispatch(signup(credentials))
    };

   

    useEffect(() => {
        if (error) {
            toast.error(error.message);
            dispatch(clearError())
        }
        if (message) {
            toast.success(message)
            dispatch(clearMessage());
            navigate('/login')
        }


    }, [toast, error, message, dispatch, navigate])



    return (
        <div className={styles.mainRow}>
            <Row >
                <Col xs={24} sm={24} md={24} lg={12} xl={12} className={styles.col1}>
                    <div>
                        <Row gutter={16}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ margin: "5% 0" }} align="middle" >
                                <Title level={2}>WELCOME TO ALSALAAM</Title>
                            </Col>
                        </Row>

                        <Row gutter={16} style={{ margin: "5% 0" }}>
                            <Col span={24}>
                                <Title level={5}>Full Name</Title>
                            </Col>
                            <Col span={24}>
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="Full name"
                                    className={styles.grayBackground}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Col>
                        </Row>


                        <Row gutter={16} style={{ margin: "5% 0" }}>
                            <Col span={24}>
                                <Title level={5}>Username</Title>
                            </Col>
                            <Col span={24}>
                                <input
                                    type="text"
                                    placeholder="username"
                                    value={username}
                                    className={styles.grayBackground}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Col>
                        </Row>


                        <Row gutter={16} style={{ margin: "5% 0" }}>
                            <Col span={24} >
                                <Title level={5}>Email</Title>
                            </Col>
                            <Col span={24}>
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="email"
                                    className={styles.grayBackground}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </Col>
                        </Row>




                        <Row gutter={16} style={{ margin: "5% 0" }}>
                            <Col span={24}>
                                <Title level={5}>Password</Title>
                            </Col>
                            <Col span={24}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className={styles.grayBackground}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Col>
                        </Row>

                        <Row gutter={16} style={{ margin: "5% 0" }}>
                            <Col span={24}>
                                <Checkbox>
                                    I confirmed that I have read and accepted the{' '}
                                    <a
                                        href="#"
                                        style={{
                                            color: '#007074',
                                            fontWeight: 'bold',
                                        }}

                                    >
                                        Privacy Policy
                                    </a>
                                </Checkbox>
                            </Col>
                        </Row>




                        <Row gutter={16} style={{ marginTop: '5%' }} justify="center">
                            <Col className={styles.mainbutton}>
                                <Button
                                    disabled={loading}
                                    className={styles.mainButton}
                                    onClick={handleLogin}
                                    style={{
                                        backgroundColor: '#3B505A',
                                        borderRadius: '20px',
                                        width: '20em',
                                        height: '3em',
                                        color: 'white',
                                    }}
                                >
                                    {loading ? "loading..." : "Create an account"}
                                </Button>
                            </Col>
                        </Row>


                        <Row gutter={8} align="center">
                            <Col>
                                <Divider plain style={{ borderWidth: 5, borderColor: 'lightGray' }}>
                                    OR
                                </Divider>
                                <LoginWithGoogle  title={'Login with google'} />
                            </Col>
                        </Row>
                    </div>
                </Col>
                {isSmallScreen ? null : (
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.col2}>
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

        </div>
    );
};

export default SignUp;