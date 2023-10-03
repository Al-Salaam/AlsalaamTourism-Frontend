import React from 'react';
import { Button, Space } from 'antd';
import GoogleIcon from '../../../../images/google1.png';
import { useMediaQuery } from 'react-responsive';

const LoginWithGoogle = ({ title, className }) => {
  const isSmallScreen = useMediaQuery({ minWidth: 280 });
  const googleAthenticationHandler = () => {
    window.open(`http://localhost:8000/api/v1/auth/google`, "_self");
}
  return (
    <Space wrap>
      <Button
        style={{
          display: 'flex',
          width: isSmallScreen ? '300px' : '70vw', // Change width based on screen size
          justifyContent: 'center',
          alignItems: 'center',
        }}
        shape="round"
        size="large"
        onClick={googleAthenticationHandler}
      >
        <img src={GoogleIcon} alt="Google Icon" />
        <h5>{title}</h5>
      </Button>
    </Space>
  );
};

export default LoginWithGoogle;
