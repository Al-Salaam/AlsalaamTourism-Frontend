import React from 'react';
import { Button, Space } from 'antd';
import GoogleIcon from "../../../../images/google1.png"
const LoginWithGoogle = ({handleClick}) => (
    <Space wrap>
         <Button  shape="round"   size="large"  onClick={handleClick} >
           <div style={{display:'flex',width:"400px",justifyContent:'center',alignItems:"center"}}><img src={GoogleIcon}/> <h5>Login With Google</h5></div>
          </Button>

    </Space>
);
export default LoginWithGoogle;