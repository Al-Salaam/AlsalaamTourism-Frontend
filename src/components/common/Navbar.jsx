import { useEffect, useState } from 'react';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Row, Col, Drawer, Button, ConfigProvider} from 'antd';
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
        <ShoppingCartOutlined style={{ fontSize: "40px" }} />),
      key: 'Shoping',

    },
    {
      label: (
        // user ? <Link  ><UserOutlined style={{ fontSize: "40px" }} /></Link> : null
        user ? <UserOutlined style={{ fontSize: "40px" }} /> : <Link to="/login" >Login</Link>

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
    setCurrent2(e.key);
    if (e.key === 'Shoping') {
      showOverlayMessage(
        <ShoppingComponent />
      );
      onClose();
    } else if (e.key === 'profile') {
      showOverlayMessage(
        <ProfileComponent user={user} loading={loading} />
      );
      onClose();
    } else {
      // Close the drawer if any other link is clicked
      onClose();
    }
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
    query: '(max-width: 1198px)', // Change this breakpoint as needed
  });
  const isNavShort = useMediaQuery({
    query: '(max-width: 1344px)', // Change this breakpoint as needed
  });

  return (
    <>

      <Row style={{
        padding: isMobile ? "10px" : "0 100px",
        backgroundColor: navbarBackgroundColor,
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: "10",

      }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={4} style={{ display: "flex", justifyContent: "flex-start" }}>
          <img
            src={Logo}
            height={60}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={20} style={{ display: "flex", justifyContent: "flex-end" }}  >
          {isMobile ? (
            <>
              <Button
                type="text"
                onClick={showDrawer}
                icon={<MenuOutlined style={{ fontSize: '24px', color: 'white' }} />}
              />
              <Drawer placement="right" onClose={onClose} open={open} style={{ backgroundColor: "#70ADBB", }}>
                <Row>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link to="/" onClick={(e) => onClickMobileDrawerLink({ key: 'home' })} style={{ color: current2 === 'home' ? 'black' : 'white', fontSize: "18px" }}>
                      Home
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link to="/activity" onClick={(e) => onClickMobileDrawerLink({ key: 'activites' })} style={{ color: current2 === 'activites' ? 'black' : 'white', fontSize: "18px" }}>
                      activites
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link to="/notfound" onClick={(e) => onClickMobileDrawerLink({ key: 'home' })} style={{ color: current2 === 'home' ? 'black' : 'white', fontSize: "18px" }}>
                      Packages
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link to="/contact" onClick={(e) => onClickMobileDrawerLink({ key: 'activites' })} style={{ color: current2 === 'activites' ? 'black' : 'white', fontSize: "18px" }}>
                      Contact US
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link to="/about" onClick={(e) => onClickMobileDrawerLink({ key: 'home' })} style={{ color: current2 === 'home' ? 'black' : 'white', fontSize: "18px" }}>
                      About US
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link onClick={(e) => onClickMobileDrawerLink({ key: 'Shoping' })} style={{ color: current2 === 'Shoping' ? 'black' : 'white', fontSize: "18px" }}>
                      <ShoppingCartOutlined style={{ fontSize: "50px" }} />
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link onClick={(e) => onClickMobileDrawerLink({ key: 'profile' })} style={{ color: current2 === 'profile' ? 'black' : 'white', fontSize: "18px" }}>
                      <UserOutlined style={{ fontSize: "50px" }} />
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
                  colorText: "white"

                },
              }}

            >
              <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: 'transparent' }} /></ConfigProvider>
          )}
        </Col>
      </Row>

    </>
  );
};

export default Navbar;
