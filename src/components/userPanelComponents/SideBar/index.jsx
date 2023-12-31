import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  ClockCircleOutlined,
  MenuOutlined,
  TagOutlined,
  LogoutOutlined,
  SettingOutlined,
  InboxOutlined,
  FastBackwardOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from '../../../../images/alsalaamLogo (2).png';
import Logo1 from '../../../../images/alsalaamLogo.png';
import Inbox from '../Inbox';
import BookingHistory from '../bookingHistory';
import Wishlist from '../Wishlist';
import UserForm from '../userForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, logoutUser } from '../../../redux/actions/authAction';
import toast from 'react-hot-toast';
import { clearError, clearMessage } from '../../../redux/reducers/authReducer';
import { useMediaQuery } from 'react-responsive';
import { Header } from 'antd/es/layout/layout';

const { Content, Sider } = Layout;

const SideBar = () => {
  const dispatch = useDispatch();
  const { user, loading, error, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const logoutFunction = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      navigate('/');
    }
  }, [error, message, dispatch, toast, navigate]);

  const skeletonLoaderStyle = {
    display: 'flex',
    margin: '15px 0 10px 15px',
    color: 'white',
  };

  const imageStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    marginRight: '5px',
    animation: 'loadingAnimation 1.5s infinite ease-in-out',
  };

  const textStyle = {
    width: '150px',
    height: '20px',
    backgroundColor: '#ccc',
    marginBottom: '10px',
    animation: 'loadingAnimation 1.5s infinite ease-in-out',
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 450 });
  return (
    <>
       {isSmallScreen && 
 <Layout style={{ minHeight: '100vh' }}>
 <Header
   style={{
     background: 'linear-gradient(45deg, #70ADBB, #018D97)',
     padding: 0,
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
   }}
 >
   <div style={{display:"flex",alignItems:"center",marginLeft:"3%"}}>
     <img
       src={ Logo}
       style={{
         width: '40px',
         height: '40px',
       
       }}
       alt="Logo"
     />
   </div>

   {loading ? (
            <div style={skeletonLoaderStyle}>
              <div style={imageStyle}></div>
              <div>
                <div style={textStyle}></div>
                <div style={textStyle}></div>
              </div>
            </div>
          ) : (
   <div>        
   <div style={{ display: 'flex', alignItems: 'center', color: 'white', justifyContent:"space-between", margin: '0 0 0 1%' }}>
  <img src={user?.photo} style={{ width: '45px', height: '45px', borderRadius: '50%' }} alt="User" />
  <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{marginTop:"65px"}}>{user?.name}</h2>
    <h4 style={{marginTop:"-40px" }}>Since: {formatDate(user?.createdAt)}</h4>
  </div>
</div>      
   </div>
          )}
   {/* <div>
     <Button
       type="text"
       icon={<MenuOutlined />}
       onClick={() => setCollapsed(!collapsed)}
       style={{
         fontSize: '10px',
         width: 24,
         height: 24,
         backgroundColor: 'white',
         border: '1px solid #018D97',
         margin: '10px 15px',
       }}
     />
   </div> */}
 </Header>
 <Layout>
   <Content style={{
     margin: '0px',
     padding: 10,
     minHeight: 280,
     background: 'white',
   }}>
     <div
       style={{
         overflowX: 'auto',
         whiteSpace: 'nowrap',
         display: 'flex',
       }}
     >
       <Menu
         mode="horizontal"
         selectedKeys={[pathname]}
         style={{
           backgroundColor: 'transparent',
           color: 'black',
          
           transition: 'margin-left 0.3s ease',
           display: 'inline-block',
         }}
       >
         <Menu.Item key="/user-panel/user-form" icon={<SettingOutlined />}>
           <Link to="/user-panel/user-form">Settings</Link>
         </Menu.Item>
         <Menu.Item key="/user-panel/booking-history" icon={<ClockCircleOutlined />}>
           <Link to="/user-panel/booking-history">Booking History</Link>
         </Menu.Item>
         <Menu.Item key="/user-panel/wishlist" icon={<TagOutlined />}>
           <Link to="/user-panel/wishlist">Wishlist</Link>
         </Menu.Item>
         <Menu.Item key="/user-panel/inquiry" icon={<InboxOutlined />}>
           <Link to="/user-panel/inquiry">Inquiry</Link>
         </Menu.Item>
         <Menu.Item key="/user-panel/back" icon={<FastBackwardOutlined />}>
           <Link to="/">Back</Link>
         </Menu.Item>
         <Menu.Item onClick={logoutFunction} key="logout" icon={<LogoutOutlined />}>
           Logout
         </Menu.Item>
       </Menu>
     </div>
     {/* Conditionally render components based on the pathname */}
     {pathname === '/user-panel/inquiry' && <Inbox />}
     {pathname === '/user-panel/booking-history' && <BookingHistory />}
     {pathname === '/user-panel/wishlist' && <Wishlist />}
     {pathname === '/user-panel/user-form' && <UserForm />}
   </Content>
 </Layout>
</Layout>
}
    {!isSmallScreen && 
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
      
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          position: 'fixed',
          left: 0,
          height: '100%',
          zIndex: 1,
          background: 'linear-gradient(45deg, #70ADBB, #018D97)',
         
        }}
      >
        <div className="logo">
          <img
            src={collapsed ? Logo : Logo1}
            style={{
              width: collapsed ? '45px' : '160px',
              height: '60px',
              margin: '10px 0 0 15px',
            }}
            alt="Logo"
          />
          <Layout style={{ marginLeft: collapsed ? '67px' : '187px'}}>
            <div
              style={{
                padding: 0,
                zIndex: 2,
                position: 'absolute',
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '10px',
                  width: 24,
                  height: 24,
                  backgroundColor: 'white',
                  border: '1px solid #018D97',
                }}
              />
            </div>
          </Layout>
        </div>
        <div className="logo">
          {loading ? (
            <div style={skeletonLoaderStyle}>
              <div style={imageStyle}></div>
              <div>
                <div style={textStyle}></div>
                <div style={textStyle}></div>
              </div>
            </div>
          ) : (
            <>
              {collapsed ? (
                <img
                  src={user?.photo}
                  style={{ width: '40px', height: '40px', margin: '10px 0 0 15px', borderRadius: '100%' }}
                  alt="User"
                />
              ) : (
                <div style={{ display: 'flex', margin: '10px 0 10px 15px', color: 'white' }}>
                  <img src={user?.photo} style={{ width: '60px', height: '60px', borderRadius: '100%' }} alt="User" />
                  <div style={{ margin: '20px 0 0 5px' }}>
                    <h4>{user?.name}</h4>
                    <h4>Since: {formatDate(user?.createdAt)}</h4>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <Menu mode="inline" selectedKeys={[pathname]} style={{ backgroundColor: 'transparent', color: 'white' }} className="menu">
          <Menu.Item key="/user-panel/user-form" icon={<SettingOutlined />}>
            <Link to="/user-panel/user-form">Settings</Link>
          </Menu.Item>
          <Menu.Item key="/user-panel/booking-history" icon={<ClockCircleOutlined />}>
            <Link to="/user-panel/booking-history">Booking History</Link>
          </Menu.Item>
          <Menu.Item key="/user-panel/wishlist" icon={<TagOutlined />}>
            <Link to="/user-panel/wishlist">Wishlist</Link>
          </Menu.Item>
          <Menu.Item key="/user-panel/inquiry" icon={<InboxOutlined />}>
            <Link to="/user-panel/inquiry">Inquiry</Link>
          </Menu.Item>
          <Menu.Item key="/user-panel/back" icon={<FastBackwardOutlined />}>
            <Link to="/">Back</Link>
          </Menu.Item>

          <Menu.Item onClick={logoutFunction} key="logout" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? '100px' : '220px', marginTop: '20px' }}>
        <Content style={{
          margin: '0 12px 12px 0',
          padding: 10,
          minHeight: 280,
          background: 'white',
        }}>
          {/* Conditionally render components based on the pathname */}
          {pathname === '/user-panel/inquiry' && <Inbox />}
          {pathname === '/user-panel/booking-history' && <BookingHistory />}
          {pathname === '/user-panel/wishlist' && <Wishlist />}
          {pathname === '/user-panel/user-form' && <UserForm />}
        </Content>
      </Layout>
    </Layout>
}
    </>
    
  );
};

export default SideBar;
