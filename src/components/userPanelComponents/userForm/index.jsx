import { Button, Card, Checkbox, Col, Input, Row } from 'antd';
import User from "../../../../images/client4.png";
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation } from '../../../redux/actions/personalInfoAction';
import toast from 'react-hot-toast';
import { clearError, clearMessage } from '../../../redux/reducers/personalInformationReducer';
import { fetchUserProfile } from '../../../redux/actions/authAction';
const UserForm = () => {

  // state for Location


  const dispatch = useDispatch();

  const {loading, message , error} = useSelector((state) => state.personalInfo)
  const {user} = useSelector((state) => state.auth);

  const [homeAirport, setHomeAirport] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateProvinceRegion, setStateProvinceRegion] = useState('');
  const [zipPostalCode, setZipPostalCode] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    dispatch(fetchUserProfile())
  },[dispatch])

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

  useEffect(() => {
    if (user) {
      setHomeAirport(user.homeairport || '');
      setAddress(user.address || '');
      setCity(user.city || '');
      setStateProvinceRegion(user.state || '');
      setZipPostalCode(user.zipcode || '');
      setCountry(user.country || '');
    }
    if(error){
      toast.error(error.message)
      dispatch(clearError())
    }
    if(message){
      toast.success(message)
      dispatch(clearMessage())
    }
  },[error, message, toast, dispatch, user])

 



  const cardStyle = {
    /* width: isSmallScreen ? "350px" : "800px", */
    height: "hug",
    gap: "30px",
    boxShadow: "0px 20px 25px -5px #0000001A, 0px 10px 10px 0px #0000000A",
    /*  paddingLeft: isSmallScreen ? "0px" : "30px", */
    marginTop: "40px",
    marginBottom: "40px",
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
    width: "300px", // Fixed width
    height: "47px", // Hug height
    fontSize: "16px",
    padding: "13px 0px 13px 9px", // Padding values
    borderRadius: "5px", // Border radius
    marginBottom: "16px", // Gap
  };



  return (
    <>
      <Col
        xs={24}
        md={12}
        sm={24}
        lg={12}
        xl={12}
        style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
      > <h1>Settings</h1> </Col>

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
          <Col>
            <Row>
              <img src={User} />
            </Row>
            <Row>
              <h3 style={{ marginLeft: "45px", marginBottom: "20px" }}>Edit Profile</h3>
            </Row>
          </Col>

          {/*  RIGHT SIDE */}
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
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  style={inputStyle}
                  placeholder="First Name"
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
                  type="text"
                  id="Email"
                  style={inputStyle}
                  placeholder="Enter your Email"
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
                  Phone Number
                </label>
                <input
                  type="text"
                  id="Phone"
                  style={inputStyle}
                  placeholder="First Name"
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
                  placeholder="Enter your Email"
                />
              </Col>
            </Row>
            {/*  Row 3 */}
            <Row>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={24}

              >
                <Checkbox >
                  Show email and phone number to other accounts
                </Checkbox>
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
              <Button size="large" style={{ background: "#018D97", color: "white" }}>Save Changes</Button>
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
                  placeholder='Enter the State/Province/Region'
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
              <Button disabled={loading} onClick={addLocationFunc} size="large" style={{ background: "#018D97", color: "white" }}>{loading ? "loading..." : "Save Change"}</Button>
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
                <input
                  type="text"
                  id="newPassword"
                  style={inputStyle}
                  placeholder="Re-enter New Password"
                />
              </Col>
            </Row>
            {/*  Row 3 */}
            <Row style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button size="large" style={{ background: "#018D97", color: "white" }}>Save Changes</Button>
            </Row>
          </Col>
        </Row>

      </Card>
    </>
  )
}

export default UserForm