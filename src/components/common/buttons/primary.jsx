import React from 'react';
import { Button, Space } from 'antd';
const PrimaryButton = (props,clickHandler) => (
    <Space wrap>
        <Button type="primary"  style={{ backgroundColor: "#3B505A", borderRadius: "20px", width: "20em",height:"40px"  }} clickHandler={clickHandler} >{props.title}</Button>

    </Space>
);
export default PrimaryButton;