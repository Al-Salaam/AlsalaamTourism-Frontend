import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';
import { Menu, Row, Col, Drawer, Button, ConfigProvider, Image } from 'antd';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Logo from "../../../images/alsalaamLogo.png"
import ShoppingComponent from './overlays/shoping';
import ProfileComponent from './overlays/profile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../redux/actions/authAction';




const Navbar = ({ showOverlayMessage }) => {

  const dispatach = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatach(fetchUserProfile())
  }, [dispatach])

  const items = [
    {
      label: <Link to="/" >Home</Link>,
      key: 'home',
    },
    {
      label: <Link to="/activity">Activites</Link>,
      key: 'activites',


    },
    {
      label: <Link to="/" >Packages</Link>,
      key: 'packages',

    },

    {
      label: <Link to="/" >Contact US</Link>,
      key: 'Contact Us',


    },
    {
      label: (
        <Link to="/" >About US</Link>
      ),
      key: 'about',
    },
    {
      label: (
        <Link  >Shoping</Link>
      ),
      key: 'Shoping',
    },
    {
      label: (
       user ?  <Link  >Profile</Link> : null
      ),
      key: 'profile',
    },
  ];

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

    // Check if "Shoping" or "Profile" is clicked and pass different content accordingly
    if (e.key === 'Shoping') {
      showOverlayMessage(
        <ShoppingComponent />
      );
    } else if (e.key === 'profile') {
      showOverlayMessage(
        <ProfileComponent user={user} loading={loading}/>
      );
    }
  };


  const isMobile = useMediaQuery({
    query: '(max-width: 786px)', // Change this breakpoint as needed
  });

  return (
    <>

      <Row style={{
        padding: '0 100px',
        backgroundColor: 'transparent',
        margin: '0 5%',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: "10"
      }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={10}>
          <Image
            src={Logo}
          />
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
            <ConfigProvider
              theme={{
                token: {

                  colorPrimary: 'black',
                  fontSize: 20,
                  lineHeight: "21px",
                  colorText: "white"

                },
              }}
            ><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: 'transparent' }} /> </ConfigProvider>
          )}
        </Col>
      </Row>

    </>
  );
};

export default Navbar;
