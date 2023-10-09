import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, MenuOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
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
      label: <Link to="/packages" >Packages</Link>,
      key: 'packages',

    },

    {
      label: <Link to="/contact" >Contact US</Link>,
      key: 'Contact Us',


    },
    {
      label: (
        <Link to="/about" >About US</Link>
      ),
      key: 'about',
    },
    {
      label: (
        <Link  ><ShoppingCartOutlined style={{ fontSize: "50px" }} /></Link>
      ),
      key: 'Shoping',

    },
    {
      label: (
        user ? <Link  ><UserOutlined style={{ fontSize: "50px" }} /></Link> : null
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

  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('transparent');

  useEffect(() => {
    // Add an event listener to handle scroll
    const handleScroll = () => {
      // Change background color when scrolling
      const scrollY = window.scrollY;
      const threshold = 50; // Adjust this threshold as needed
      if (scrollY > threshold) {
        setNavbarBackgroundColor('#3B505A6B'); // Change to the desired color
      } else {
        setNavbarBackgroundColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [current, setCurrent] = useState('mail');
  const [current2, setCurrent2] = useState();
  useEffect(() => {
    // Check if 'current2' is not undefined, then apply color change
    if (current2 !== undefined) {
      // Update the style of the links in the mobile drawer
      const links = document.querySelectorAll(".mobile-drawer-link");
      links.forEach(link => {
        const key = link.getAttribute("data-key");
        link.style.color = key === current2 ? 'black' : 'white';
      });
    }
  }, [current2]);


  const onClickMobileDrawerLink = (e) => {
    setCurrent2(e.key);

  }
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
        <ProfileComponent user={user} loading={loading} />
      );
    }
  };


  const isMobile = useMediaQuery({
    query: '(max-width: 786px)', // Change this breakpoint as needed
  });
  const isNavShort = useMediaQuery({
    query: '(max-width: 1344px)', // Change this breakpoint as needed
  });

  return (
    <>

      <Row style={{
        padding: '0 100px',
        backgroundColor: navbarBackgroundColor,
        // margin: '0 5%',
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: "10"
      }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={10}>
          <Image
            src={Logo}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={14} align={"end"}  >
          {isMobile ? (
            <>
              <Button
                type="text"
                onClick={showDrawer}
                icon={<MenuOutlined style={{ fontSize: '24px', color: 'black' }} />}
              />
              <Drawer placement="right" onClose={onClose} visible={open} style={{ backgroundColor: "#70ADBB", width: "50%" }}>
                <Row>
                  <Col span={24} align="middle" style={{ margin: "15% 0" }}>
                    <Link to="/" onClick={(e) => onClickMobileDrawerLink({ key: 'home' })} style={{ color: current2 === 'home' ? 'black' : 'white', fontSize: "18px" }}>
                      Home
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "15% 0" }}>
                    <Link to="/activity" onClick={(e) => onClickMobileDrawerLink({ key: 'activites' })} style={{ color: current2 === 'activites' ? 'black' : 'white', fontSize: "18px" }}>
                      activites
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "15% 0" }}>
                    <Link to="/notfound" onClick={(e) => onClickMobileDrawerLink({ key: 'home' })} style={{ color: current2 === 'home' ? 'black' : 'white', fontSize: "18px" }}>
                      Packages
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "15% 0" }}>
                    <Link to="/contact" onClick={(e) => onClickMobileDrawerLink({ key: 'activites' })} style={{ color: current2 === 'activites' ? 'black' : 'white', fontSize: "18px" }}>
                      Contact US
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "15% 0" }}>
                    <Link to="/about" onClick={(e) => onClickMobileDrawerLink({ key: 'home' })} style={{ color: current2 === 'home' ? 'black' : 'white', fontSize: "18px" }}>
                      About US
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "15% 0" }}>
                    <Link to="/shopping" onClick={(e) => onClickMobileDrawerLink({ key: 'activites' })} style={{ color: current2 === 'activites' ? 'black' : 'white', fontSize: "18px" }}>
                    <ShoppingCartOutlined style={{ fontSize: "50px" }} />
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "15% 0" }}>
                    <Link to="/profile" onClick={(e) => onClickMobileDrawerLink({ key: 'activites' })} style={{ color: current2 === 'activites' ? 'black' : 'white', fontSize: "18px" }}>
                      Profile
                    </Link>
                  </Col>

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
                  colorText: isNavShort ? "black" : "white"

                },
              }}
            ><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: 'transparent', marginLeft: "30%" }} /> </ConfigProvider>
          )}
        </Col>
      </Row>

    </>
  );
};

export default Navbar;
