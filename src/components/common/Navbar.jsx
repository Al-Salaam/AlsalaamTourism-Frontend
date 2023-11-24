import { useEffect, useState } from "react";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Row, Col, Drawer, Button, ConfigProvider } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Logo from "../../../images/alsalaamLogo.png";
import ShoppingComponent from "./overlays/shoping";
import ProfileComponent from "./overlays/profile";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../redux/actions/authAction";
import { getAddToCartData } from "../../redux/reducers/activityReducer";
import "./navbar.css";

const Navbar = ({ showOverlayMessage }) => {
  const dispatach = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  const { cart } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatach(getAddToCartData());
  }, [dispatach]);

  useEffect(() => {
    dispatach(fetchUserProfile());
  }, [dispatach]);

  const navlinkStyles = ({ isActive }) => {
    return {
      colorL: isActive ? "white" : "black",
      backgroundColor: "transparent",
      borderBottom: isActive ? "2px solid black" : null,
      padding: "15%",
      fontFamily: "Ubuntu",
      textShadow:
        "0px 1.5589158535003662px 1.247132658958435px rgba(0, 0, 0, 0.0759), " +
        "0px 3.7462916374206543px 2.99703311920166px rgba(0, 0, 0, 0.1091), " +
        "0px 7.053934574127197px 5.643147945404053px rgba(0, 0, 0, 0.135), " +
        "0px 12.583013534545898px 10.066411018371582px rgba(0, 0, 0, 0.1609), " +
        "0px 23.535144805908203px 18.828115463256836px rgba(0, 0, 0, 0.1941), " +
        "0px 56.334346771240234px 45.06747817993164px rgba(0, 0, 0, 0.27)",
    };
  };

  const items = [
    {
      label: (
        <NavLink to="/" style={navlinkStyles}>
          Home
        </NavLink>
      ),
      key: "home",
    },
    {
      label: (
        <NavLink to="/activity" style={navlinkStyles}>
          Activites
        </NavLink>
      ),
      key: "activites",
    },
    {
      label: (
        <NavLink to="/packages" style={navlinkStyles}>
          Packages
        </NavLink>
      ),
      key: "packages",
    },

    {
      label: (
        <NavLink to="/contact" style={navlinkStyles}>
          Contact US
        </NavLink>
      ),
      key: "Contact Us",
    },
    {
      label: (
        <NavLink to="/about" style={navlinkStyles}>
          About US
        </NavLink>
      ),
      key: "about",
    },
    {
      label: (
        <NavLink>
          <ShoppingCartOutlined style={{ fontSize: "28px" }} />

          {cart.length > 0 && (
            <div
              className="notification-count"
              style={{
                position: "absolute",
                top: "8px",
                right: "-8px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <span>{cart && cart.length}</span>
            </div>
          )}
        </NavLink>
      ),
      key: "Shoping",
    },
    {
      label:
        // user ? <Link  ><UserOutlined style={{ fontSize: "40px" }} /></Link> : null
        user ? (
          <UserOutlined style={{ fontSize: "28px", color: "white" }} />
        ) : (
          <NavLink to={"/login"} style={navlinkStyles}><UserOutlined style={{ fontSize: "25px" }} /></NavLink>
        ),
      key: "profile",
    },
  ];

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [navbarBackgroundColor, setNavbarBackgroundColor] =
    useState("transparent");

  useEffect(() => {
    // Add an event listener to handle scroll
    const handleScroll = () => {
      // Change background color when scrolling
      const scrollY = window.scrollY;
      const threshold = 50; // Adjust this threshold as needed
      if (scrollY > threshold) {
        setNavbarBackgroundColor("#3B505A6B"); // Change to the desired color
      } else {
        setNavbarBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [current, setCurrent] = useState("mail");
  const [current2, setCurrent2] = useState();
  useEffect(() => {
    // Check if 'current2' is not undefined, then apply color change
    if (current2 !== undefined) {
      // Update the style of the links in the mobile drawer
      const links = document.querySelectorAll(".mobile-drawer-link");
      links.forEach((link) => {
        const key = link.getAttribute("data-key");
        link.style.color = key === current2 ? "black" : "white";
      });
    }
  }, [current2]);

  const onClickMobileDrawerLink = (e) => {
    setCurrent2(e.key);
    setCurrent2(e.key);
    if (e.key === "Shoping") {
      showOverlayMessage(<ShoppingComponent />);
      onClose();
    } else if (e.key === "profile") {
      showOverlayMessage(<ProfileComponent user={user} loading={loading} />);
      onClose();
    } else {
      // Close the drawer if any other link is clicked
      onClose();
    }
  };
  const onClick = (e) => {
    // Check if "Shoping" or "Profile" is clicked and pass different content accordingly
    if (e.key === "Shoping") {
      showOverlayMessage(<ShoppingComponent />);
    } else if (e.key === "profile") {
      showOverlayMessage(<ProfileComponent user={user} loading={loading} />);
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)", // Change this breakpoint as needed
  });


  return (
    <>
      <Row
        style={{
          padding: isMobile ? "10px" : "10px 50px",
          backgroundColor: navbarBackgroundColor,
          position: "fixed",
          paddingTop: "27px",
          width: "100vw",
          zIndex: "10",
        }}
      >
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
         <Link to="/"> <img src={Logo} height={60} /></Link>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={20}
          lg={20}
          xl={20}
          xxl={20}
          style={{ display: "flex", justifyContent: "end" }}
        >
          {isMobile ? (
            <>
              <Button
                type="text"
                onClick={showDrawer}
                icon={
                  <MenuOutlined
                    style={{
                      fontSize: "24px",
                      color: "white",
                      marginRight: "20px",
                    }}
                  />
                }
              />
              <Drawer
                placement="right"
                onClose={onClose}
                open={open}
                style={{ backgroundColor: "#70ADBB" }}
              >
                <Row>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link
                      to="/"
                      onClick={(e) => onClickMobileDrawerLink({ key: "home" })}
                      style={{
                        color: current2 === "home" ? "black" : "white",
                        fontSize: "18px",
                      }}
                    >
                      Home
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link
                      to="/activity"
                      onClick={(e) =>
                        onClickMobileDrawerLink({ key: "activites" })
                      }
                      style={{
                        color: current2 === "activites" ? "black" : "white",
                        fontSize: "18px",
                      }}
                    >
                      activites
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link
                      to="/packages"
                      onClick={(e) =>
                        onClickMobileDrawerLink({ key: "packages" })
                      }
                      style={{
                        color: current2 === "packages" ? "black" : "white",
                        fontSize: "18px",
                      }}
                    >
                      Packages
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link
                      to="/contact"
                      onClick={(e) =>
                        onClickMobileDrawerLink({ key: "contact" })
                      }
                      style={{
                        color: current2 === "contact" ? "black" : "white",
                        fontSize: "18px",
                      }}
                    >
                      Contact US
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link
                      to="/about"
                      onClick={(e) => onClickMobileDrawerLink({ key: "about" })}
                      style={{
                        color: current2 === "about" ? "black" : "white",
                        fontSize: "18px",
                      }}
                    >
                      About US
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link
                      onClick={(e) =>
                        onClickMobileDrawerLink({ key: "Shoping" })
                      }
                      style={{
                        color: current2 === "Shoping" ? "black" : "white",
                        fontSize: "18px",
                      }}
                    >
                      <ShoppingCartOutlined style={{ fontSize: "50px" }} />
                    </Link>
                  </Col>
                  <Col span={24} align="middle" style={{ margin: "5% 0" }}>
                    <Link
                      onClick={(e) =>
                        onClickMobileDrawerLink({ key: "profile" })
                      }
                      style={{
                        color: current2 === "profile" ? "black" : "white",
                        fontSize: "18px",
                      }}
                    >
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
                  colorPrimary:"#66aab8",
                  lineWidth:-1,
                  fontSize: 20,
                  colorText: "white",
                },
              }}
            >
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                style={{
                  backgroundColor: "transparent",
                  width: "800px",
                  display: "flex",
                  justifyContent: "flex-end",
                  border: "none",
                }}
              />
            </ConfigProvider>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
