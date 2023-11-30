import { Button, Row, Col, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';
import styles from './login.module.css';
import Eclipse from '../../../../images/eclipse1.png';
import Woman from '../../../../images/forget.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../../redux/actions/authAction';
import { toast } from 'react-hot-toast';
import { clearError, clearMessage } from '../../../redux/reducers/authReducer';

 function ForgotPassword () {
  const [email, setEmail] = useState('');
  const isSmallScreen = useMediaQuery({ maxWidth: 990 });
  const isSmallestScreen = useMediaQuery({ maxWidth: 525 });
  const { Title } = Typography;
  const dispatch = useDispatch();
  const {loading , error, message} = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email){
      toast.error('Please Enter the Email');
    }else{
      dispatch(forgetPassword(email))
    }
    
  }

  useEffect(() => {
    if(error){
      toast.error(error.message);
      dispatch(clearError())
    }
    if(message){
      toast.success(message);
      dispatch(clearMessage())
    }
  },[error,message, dispatch, toast])


  return (
    <div className={styles.mainRow} style={{ marginBottom: "-10%" }}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className={styles.col1}>
          <div style={{ margin: "auto", width: isSmallestScreen ? "85%" : '50%' }}>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}  align="middle" >
                <Title level={2} style={{fontWeight:"bolder"}}>FORGOT PASSWORD</Title>
                <p >We will send a link to your email address to reset your password</p>
              </Col>
            </Row>
            <Row gutter={16} style={{ margin: "5% 0" }}>
              <Col span={24} >
                <Title level={5} >Email</Title>
              </Col>
              <Col span={24}>
                <input
                  type="email"
                  value={email}
                  placeholder="Please Enter your Email"
                  className={styles.grayBackground}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{height:"50px"}}

                />
                
              </Col>
            </Row>


            <Row gutter={16} style={{ marginTop: '5%' }} justify="center">
              <Col className={styles.mainbutton}>
                <Button
                  disabled={loading}
                  className={styles.mainButton}
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: '#3B505A',
                    borderRadius: '20px',
                    width: isSmallestScreen ? '50vw' : '15em',
                    height: '3em',
                    color: 'white',
                    fontWeight:"bolder",
                    fontSize:"15px"
                  }}
                >
                  {loading ? "sending..." : "Send Reset Link"}
                </Button>
              </Col>
            </Row>


            <Row gutter={8} align="center">
              <Col>
                 <Title level={5} style={{color:"#007074",marginTop:"10px"}}><a href='/login'>Back to Login</a></Title>
              </Col>
            </Row>
          </div>
        </Col>
        {isSmallScreen ? null : (
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.col2}>
            <div className={styles.container}>
              <img className={styles.smallImage} src={Eclipse} alt="Small Image" />
              <img className={styles.largeImage} src={Woman} alt="Large Image" />
            </div>
          </Col>
        )}
      </Row>

    </div>
  );
}

export default ForgotPassword;