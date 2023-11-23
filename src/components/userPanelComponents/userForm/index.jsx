import { Button, Card, Checkbox, Col, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation, addPersonalInfo, changePasswordAction } from '../../../redux/actions/personalInfoAction';
import toast from 'react-hot-toast';
import { clearError, clearMessage } from '../../../redux/reducers/personalInformationReducer';
import { fetchUserProfile } from '../../../redux/actions/authAction';
import {Loader} from '../../common/loader'
import { useMediaQuery } from 'react-responsive';
const UserForm = () => {

  // state for Location


  const dispatch = useDispatch();

  const { loading, message, error } = useSelector((state) => state.personalInfo)
  const { user } = useSelector((state) => state.auth);

  const [homeAirport, setHomeAirport] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateProvinceRegion, setStateProvinceRegion] = useState('');
  const [zipPostalCode, setZipPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [aboutself, setAboutSelf] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');


  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])

  const addLocationFunc = (e) => {
    e.preventDefault();
    const locationData = {
      homeairport: homeAirport,
      address: address,
      city: city,
      state: stateProvinceRegion,
      zipcode: zipPostalCode,
      country: country
    }
    dispatch(addLocation(locationData))
  }

  const addPersonalInformation = (e) => {
    e.preventDefault();
    const personalData = {
      name: name,
      email: email,
      phone: phone,
      aboutself: aboutself
    }
    dispatch(addPersonalInfo(personalData))
  }

  const changePasswordFunc = (e) => {
    e.preventDefault();
    const passData = {
      oldPassword : oldPassword,
      newPassword: newPassword
    }

    if(newPassword === reEnterPassword){
      dispatch(changePasswordAction(passData))
    }else{
      toast.error('Re-Enter Password does not match')
    }
  }

  useEffect(() => {
    if (user) {
      setHomeAirport(user.homeairport || '');
      setAddress(user.address || '');
      setCity(user.city || '');
      setStateProvinceRegion(user.state || '');
      setZipPostalCode(user.zipcode || '');
      setCountry(user.country || '');
      setName(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
      setAboutSelf(user.aboutself || '');
    }
    if (error) {
      toast.error(error.message)
      dispatch(clearError())
    }
    if (message) {
      toast.success(message)
      dispatch(clearMessage())
    }
  }, [error, message, toast, dispatch, user])





  const cardStyle = {
    /* width: isSmallScreen ? "350px" : "800px", */
    
    gap: "30px",
    boxShadow: "0px 20px 25px -5px #0000001A, 0px 10px 10px 0px #0000000A",
    /*  paddingLeft: isSmallScreen ? "0px" : "30px", */
    marginTop: "40px",
    
    fontFamily: "Ubuntu",
  };

  const labelStyle = {
    fontFamily: "Ubuntu",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "21px",
    letterSpacing: "0em",
    // textAlign: "center",
    color: "#696969",
  };

  const inputStyle = {
    border: "1px solid #ccc",
    fontFamily: "Ubuntu",
    outline: "none",
    // width: "300px", // Fixed width
    // height: "47px", // Hug height
    fontSize: "16px",
    padding: "13px 0px 13px 9px", // Padding values
    borderRadius: "5px", // Border radius
    marginBottom: "16px", // Gap
  };


  const isSmallScreen = useMediaQuery({ maxWidth: 430 });
  return (
    <>
    {loading ? <Loader /> : (
      <>
      <Row>
      <Col
        xs={24}
        md={12}
        sm={24}
        lg={12}
        xl={12}
        style={{ display: "flex", flexDirection: "column",  }}
      > <h1>Settings</h1> </Col></Row>

      <Card style={cardStyle}>
        <Row style={{ marginBottom: "50px" }}>

          <h1>Personal Information</h1>
        </Row>
        {/*  ............................................................
                                PERSONAL INFORMATION
          ............................................................ */}
        <Row style={{ marginBottom: "50px" }} gutter={30} xs={24}
          md={24}
          sm={24}
          lg={24}
          xl={24}>

          {/* LEFT SIDE */}
          <Col >
            <Row>
              <img src={user?.photo} alt='USER IMAGE' style={{ borderRadius: "100%", width:isSmallScreen?'100px': '200px', height: isSmallScreen?'100px': '200px' }} />
            </Row>
            {/* <Row>
              <h3 style={{ marginLeft: "45px", marginBottom: "20px" }}>Edit Profile</h3>
            </Row> */}
          </Col>

          {/*  RIGHT SIDE */}
          <Col xs={24}sm={24}md={24}lg={8}xl={8} style={{marginTop:"20px"}}>
            {/*  Row 1 */}
            <Row gutter={30} xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="FirstName" style={labelStyle}>
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  style={inputStyle}
                  placeholder="Enter the First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>

              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="LastName" style={labelStyle}>
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  style={inputStyle}
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            {/*  Row 2 */}
            <Row gutter={30} xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}>
              <Col
                xs={24}
                md={24}
                sm={12}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="FirstName" style={labelStyle}>
                  Phone Number
                </label>
                <input
                  type="number"
                  id="Phone"
                  style={inputStyle}
                  placeholder="Enter the phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Col>

              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="LastName" style={labelStyle}>
                  About Yourself
                </label>
                <TextArea
                  type='text'
                  id="About"
                  placeholder="About your self"
                  value={aboutself}
                  onChange={(e) => setAboutSelf(e.target.value)}
                />
              </Col>
            </Row>
            {/*  Row 3 */}

            <Row style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
              <Button disabled={loading} onClick={addPersonalInformation} size="large" style={{ background: "#018D97", color: "white" }}>{"Save Changes"}</Button>
            </Row>
          </Col>
        </Row>
        {/*  ............................................................
                                 LOCATION
          ............................................................ */}
        <Row style={{ marginBottom: "50px" }}>
          <h1>Location</h1>
        </Row>
        <Row style={{ marginBottom: "50px" }} gutter={30} xs={24}
          md={24}
          sm={24}
          lg={24}
          xl={24}>

          <Col>
            {/*  Row 1 */}
            <Row gutter={30} xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="FirstName" style={labelStyle}>
                  Home Airport
                </label>
                <input
                  type="text"
                  placeholder='Enter the AirPort'
                  id=""
                  style={inputStyle}
                  value={homeAirport}
                  onChange={(e) => setHomeAirport(e.target.value)}
                />
              </Col>

              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="LastName" style={labelStyle}>
                  Address
                </label>
                <input
                  type="text"
                  id="Address"
                  style={inputStyle}
                  placeholder="Enter your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>
            </Row>
            {/*  Row 2 */}
            <Row gutter={30} xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="FirstName" style={labelStyle}>
                  City
                </label>
                <input
                  type="text"
                  id="City"
                  style={inputStyle}
                  placeholder="Enter the City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Col>

              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="LastName" style={labelStyle}>
                  State/Province/Region
                </label>
                <input
                  type='text'
                  id=""
                  placeholder='Enter the State/Province'
                  style={inputStyle}
                  value={stateProvinceRegion}
                  onChange={(e) => setStateProvinceRegion(e.target.value)}
                />
              </Col>
            </Row>
            {/*  Row 3 */}
            <Row gutter={30} xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="FirstName" style={labelStyle}>
                  Zip/Postal Code
                </label>
                <input
                  type="text"
                  id="City"
                  style={inputStyle}
                  value={zipPostalCode}
                  onChange={(e) => setZipPostalCode(e.target.value)}
                  placeholder='Enter the zipCode'
                />
              </Col>

              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="LastName" style={labelStyle}>
                  Country
                </label>
                <input
                  type='text'
                  id="Country"
                  placeholder='Enter the Country'
                  style={inputStyle}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button disabled={loading} onClick={addLocationFunc} size="large" style={{ background: "#018D97", color: "white" }}>{"Save Change"}</Button>
            </Row>
          </Col>
        </Row>
        {/*  ............................................................
                                CHANGE PASSWORD
          ............................................................ */}

        <Row style={{ marginBottom: "50px" }}>
          <h1>Change Password</h1>
        </Row>
        <Row gutter={30} xs={24}
          md={24}
          sm={24}
          lg={24}
          xl={24} >
          <Col>
            {/*  Row 1 */}
            <Row gutter={30} xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="FirstName" style={labelStyle}>
                  Current Password
                </label>
                <Input.Password
                  type="password"
                  id="currentpassword"
                  style={inputStyle}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </Col>

              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="LastName" style={labelStyle}>
                  New Password
                </label>
                <Input.Password
                  type="password"
                  id="newPassword"
                  style={inputStyle}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Col>
            </Row>
            {/*  Row 2 */}
            <Row gutter={30} xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={12}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="FirstName" style={labelStyle}>
                  Re-enter New Password
                </label>
                <Input.Password
                  type="password"
                  id="newPassword"
                  style={inputStyle}
                  placeholder="Re-enter New Password"
                  value={reEnterPassword}
                  onChange={(e) => setReEnterPassword(e.target.value)}
                />
              </Col>
            </Row>
            {/*  Row 3 */}
            <Row style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button disabled={loading} onClick={changePasswordFunc} size="large" style={{ background: "#018D97", color: "white" }}>{'Save Changes'}</Button>
            </Row>
          </Col>
        </Row>

      </Card>
    </>
    ) }
    </>
    
  )
}

export default UserForm