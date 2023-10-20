import {
  Row,
  Col,
  Card,
  Radio,
  Menu,
  Dropdown,
  Checkbox,
  Input,
  Tooltip,
  Divider,
} from "antd";
import checkoutStripe from "../../../../images/checkoutStripe.png";
import checkoutCard from "../../../../images/checkoutCard.png";
import { DownOutlined } from "@ant-design/icons";
import PrimaryButton from "../../common/buttons/primary";
import { useMediaQuery } from "react-responsive";
import checkoutBooking from "../../../../images/checkoutBooking.png";
import swal from "sweetalert";
// import withReactContent from "sweetalert2-react-content";
import Coupenicon from "../../../../images/coupenicon.png";
import TextArea from "antd/es/input/TextArea";

// const MySwal = withReactContent(Swal);

const Booking = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 692 });

  const handleFormSubmit = () => {
    console.log("Button clicked");
  };

  const cardStyle2 = {
    width: "360px",
    height: "571px",
    // borderRadius: '2px',
    border: "1px solid #d9d9d9",
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
    color: "#696969",
  };


  const inputC2 = {
    border: "1px solid #ccc",
    fontFamily: "Ubuntu",
    outline: "none",
    width: "315px", // Fixed width
    height: "47px", // Hug height
    fontSize: "16px",
    padding: "13px 0px 13px 9px", // Padding values
    borderRadius: "5px", // Border radius
    marginBottom: "16px", // Gap
    marginTop: "20px",
  };



  const cardHeaderStyle = {
    borderBottom: "none",
  };
  const HeadingStyle2 = {
    fontFamily: "Ubuntu",
  };

  const radioStyle = {
    display: "block",
    border: "1px solid #d9d9d9",
    padding: "5px 0 50px 20px", // Add extra padding at the bottom for space
    width: isSmallScreen ? "210%" : "410%",
    height: "53px",
    top: "682px",
    borderRadius: "1px",
    fontFamily: "Ubuntu",
    fontWeight: 400,
    fontSize: "15px",
  };
 

  const termsAndPolicyStyle = {
    fontSize: "14px",
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    width: "2000px",
  };
  const checkboxTextStyle = {
    fontFamily: "Ubuntu",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
  };

  const greenTextStyle = {
    color: "#007074",
    marginRight: "5px",
    marginLeft: "5px",
  };



  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={24} sm={24} lg={12} xl={12} >
        <Card
          title={<h1>Booking Submission</h1>}
          style={{  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', padding: "0", marginTop:"40px", marginBottom:"40px", marginLeft:"20px",}}
          // style={cardStyle}
          headStyle={cardHeaderStyle}
        >
          <Row gutter={30}>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="FirstName" style={labelStyle}>
                First Name
              </label>
            
              <Input
                placeholder="First Name"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>

            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="LastName" style={labelStyle}>
                Last Name
              </label>

              <Input
                placeholder="Last Name"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
          </Row>

          <Row gutter={30}>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="Email" style={labelStyle}>
                Email
              </label>
              <Input
                placeholder="Enter your Email"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="Phone" style={labelStyle}>
                Phone
              </label>
              <Input
                placeholder="Enter Your Phone#"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
          </Row>

          <Row gutter={30}>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="AddressLine1" style={labelStyle}>
                Address Line 1
              </label>
              <Input
                placeholder="Enter Your Address1"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="AddressLine2" style={labelStyle}>
                Address Line 2
              </label>
              <Input
                placeholder="Enter Your Address2"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
          </Row>

          <Row gutter={30}>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="City" style={labelStyle}>
                City
              </label>
              <Input
                placeholder="Your City"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="State/Province/Region" style={labelStyle}>
                State/Province/Region
              </label>
              <Input
                placeholder="Enter Your State/Province"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
          </Row>

          <Row gutter={30}>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="ZipCode/PostalCode" style={labelStyle}>
                Zip Code/ Postal Code
              </label>
              <Input
                placeholder="Enter Your ZipCode"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="Country" style={labelStyle}>
                Country
              </label>
              <Input
                placeholder="Your Country"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  outline: "none",
                  marginBottom:"5px",
                  width:"80%",
                  height:"40px",
                  border:"1px solid #E0E0E0"
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} sm={24} lg={12} xl={12}>
              <label htmlFor="SpecialRequirment" style={labelStyle}>
                Special Requirment
              </label>
              <TextArea
                style={{ fontFamily: "Ubuntu",}}
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Col>
          </Row>

          <Row>
            <Col
              xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <h2 style={HeadingStyle2}>Payment Method</h2>
            </Col>

            <Row>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={12}
                xl={24}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "30px",
                }}
              >
                <Radio.Group>
                  <Radio style={radioStyle} value="stripe">
                    <img
                      src={checkoutStripe}
                      alt="Stripe"
                      style={{ verticalAlign: "middle", marginRight: "15px" }}
                    />
                    Stripe
                   
                  </Radio>

                  <Radio style={radioStyle} value="card">
                    <img
                      src={checkoutCard}
                      alt="Card"
                      style={{ verticalAlign: "middle", marginRight: "18px" }}
                    />
                    Card
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>

            <Row>
              <Col
                xs={24}
                md={12}
                sm={24}
                lg={12}
                xl={24}
                style={termsAndPolicyStyle}
              >
                <Checkbox style={checkboxTextStyle}>
                  I confirmed that I have read and accepted the
                  <span style={greenTextStyle}>Privacy Policy</span>
                  and
                  <span style={greenTextStyle}>Terms & Conditions</span>.
                </Checkbox>
              </Col>
            </Row>

            <Row>
              <Col style={{ marginTop: "35px" }}>
                <PrimaryButton
                  title={<h4>Submit</h4>}
                  width="150px"
                  onClick={handleFormSubmit}
                />
              </Col>
            </Row>
          </Row>
        </Card>
      </Col>
      <Col
        xs={24}
        md={12}
        sm={24}
        lg={12}
        xl={12}
        style={{ display: "flex", alignItems: "", justifyContent: "center" }}
      >
        <Card
          title={<h2>Your Booking </h2>}
          style={{ ...cardStyle2 }}
          headStyle={cardHeaderStyle}
        >
          <Row>
            <Col
              xs={24}
              md={24}
              sm={24}
              lg={24}
              xl={24}
              style={{ display: "flex", alignItems: "start" }}
            >
              <img
                src={checkoutBooking}
                alt="bookingimage"
                style={{ marginRight: "6px" }}
              />
              <h2 style={{ margin: "0", fontFamily: "Ubuntu" }}>
                Al Ain City Tours
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={12} xl={12}>
              <h3
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "40px",
                  fontWeight: "500",
                }}
              >
                Number of Adults
              </h3>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} xl={12} align="end">
              <h3
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "40px",
                  fontWeight: "500",
                }}
              >
                1
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={18} sm={12} lg={12} xl={24}>
              <Input
                placeholder="Coupen Code"
                style={inputC2}
                suffix={
                  <Tooltip title="Enter your CoupenCode">
                    <img src={Coupenicon} />
                  </Tooltip>
                }
              />
            </Col>
          </Row>

          <Divider
            type="horizontal"
            style={{ height: "0px", border: "0.1px solid #D1D1D8" }}
          />

          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col xs={12} md={12} sm={12} lg={12} xl={12}>
              <h3
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "20px",
                  fontWeight: "500",
                }}
              >
                Adult Rights
              </h3>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} xl={12} align="end">
              <h3
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#3B505A",
                }}
              >
                699.00 AED
              </h3>
            </Col>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col xs={12} md={12} sm={12} lg={12} xl={12}>
              <h3
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "20px",
                  fontWeight: "500",
                }}
              >
                Sub Total
              </h3>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} xl={12} align="end">
              <h3
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#3B505A",
                }}
              >
                699.00 AED
              </h3>
            </Col>
          </Row>

          <Divider
            type="horizontal"
            style={{ height: "0px", border: "0.1px solid #D1D1D8" }}
          />

          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col>
              <h2
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "0px",
                  fontWeight: "600",
                  color: "#2C2727",
                }}
              >
                Pay Amount
              </h2>
            </Col>
            <Col>
              <h3
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "5px",
                  fontWeight: "500",
                  color: "#3B505A",
                }}
              >
                699.00 AED
              </h3>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Booking;
