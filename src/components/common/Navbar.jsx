import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';
import { Menu, Row, Col, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const items = [
  {
    label: <Link to="/">Navigation One</Link>,
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: <Link to="/">Navigation One</Link>,
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: (
          <Link to="/">
            Home
          </Link>
        ),
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <Link to="/activity">
        Navigation Four - Link
      </Link>
    ),
    key: 'alipay',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 786px)', // Change this breakpoint as needed
  });

  return (
    <>
      <Row  align="middle" style={{padding:"0 50px"}}>
        <Col xs={12} sm={12} md={12} lg={12} xl={10}>
          <h1>Logo</h1>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={14} align="right"  >
          {isMobile ? (
            <>
              <Button
                type="text"
                onClick={showDrawer}
                icon={<MenuOutlined style={{ fontSize: '24px', color: '#000' }} />}
              />
              <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={open}>
                <Row>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} align="middle">
                <Link to="/activity">
                  <p>Some contents...</p>
                </Link>
                </Col>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </Row>
              </Drawer>
            </>
          ) : (
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
