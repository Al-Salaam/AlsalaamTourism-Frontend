import React from 'react';
import { Button, Space } from 'antd';

const PrimaryButton = ({ title, width = '20em', height = '40px', clickHandler }) => (
  <Space wrap>
    <Button
      type="primary"
      style={{
        backgroundColor: "#3B505A",
        borderRadius: "20px",
        width: width, 
        height: height,
      }}
      onClick={clickHandler} 
    >
      {title}
    </Button>
  </Space>
);

export default PrimaryButton;
