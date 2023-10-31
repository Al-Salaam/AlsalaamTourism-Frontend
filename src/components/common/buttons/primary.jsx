import React from 'react';
import { Button, Space, ConfigProvider } from 'antd';

const PrimaryButton = ({ title, width = '20em', height = '40px', clickHandler }) => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: 'white',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: 'white',
      },
    }}
  >
    <Space wrap>
      <Button
        type="default"
        style={{
          backgroundColor: "#3B505A",
          borderRadius: "20px",
          width: width, 
          height: height,
          border: "gray",
          transition: 'background-color 0.3s', // Add a smooth transition
          color: 'white', // Set the default text color to white
        }}
        onClick={clickHandler}
        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#4C626D"; }}
        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#3B505A"; }}
      >
        {title}
      </Button>
    </Space>
  </ConfigProvider>
);

export default PrimaryButton;
