import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import NationalityDrop from "./nationalityDrop";
import PhoneInput from "react-phone-number-input";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { createInquiryForUser } from "../../../redux/actions/inquiryAction";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/inquiryReducer";
import { useNavigate } from "react-router-dom";

function FormCard({ pakage }) {
  const [title, setTitle] = useState("Mr.");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequirment, setSpecialRequirment] = useState("");

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.inquiry);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      specialRequirment === ""
    ) {
      toast.error("Please fill in all required fields.");
    } else if (!user) {
      // Navigate to the login page
      navigate("/login"); // Update the path to your login page
    } else {
      const formData = {
        title,
        firstname,
        lastname,
        email,
        nationality,
        phone,
        specialRequirment,
      };
      
      dispatch(createInquiryForUser({ packageId: pakage._id, ...formData }));


      // Clear the form by setting individual states to their initial values.
      setTitle("Mr.");
      setFirstname("");
      setLastname("");
      setEmail("");
      setNationality("");
      setPhone("");
      setSpecialRequirment("");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, toast, error, message]);

  const isSmallestScreen = useMediaQuery({ maxWidth: 1045 });
  const isSmallScreen = useMediaQuery({ maxWidth: 1006 });
  const componentStyle = {
    width: "155px",
    height: "50px",
    margin: isSmallestScreen ? "5% 0" : "5%",
  };

  const labelStyle = {
    fontSize: "100%",
    fontWeight: "bold",
    color: "#696969",
    margin: isSmallestScreen ? "5% 0" : "5%",
  };

  const cardStyle = {
    border: "1px solid #e8e8e8",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    padding: "5%",
    width: isSmallestScreen ? "100%" : "80%",
    margin: isSmallScreen ? "0%" : "2% 20%",
    marginTop: isSmallScreen ? "15px" : "0px",
  };

  return (
    <>
      <div style={cardStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>Title</div>
            <select
              size="large"
              style={{
                ...componentStyle,
                border: "1px solid lightgray",
                backgroundColor: "white",
                borderRadius: "7px",
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Mrs.">Mrs.</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>First Name</div>
            <div>
              <Input
                style={componentStyle}
                placeholder="First Name*"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>Last Name</div>

            <div>
              <Input
                style={componentStyle}
                placeholder="Last Name*"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ ...labelStyle, fontSize: "90%" }}>Email</div>
            <Input
              style={componentStyle}
              placeholder="Email Address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={labelStyle}>Nationality</div>
            <div>
              <NationalityDrop
                selectedNationality={nationality}
                onChange={(value) => setNationality(value)}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ ...labelStyle, fontSize: "100%" }}>Phone Number</div>
            <div>
              <PhoneInput
                internationalIcon={"false"}
                placeholder="Phone Number*"
                style={{ width: "160px" }}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "10px",
              marginTop: "15px",
              fontSize: "100%",
              fontWeight: "bold",
              color: "#696969",
            }}
          >
            Special Requirements
          </div>
          <Input
            style={{ ...componentStyle, width: "70%" }}
            placeholder="Special Requirements"
            value={specialRequirment}
            onChange={(e) => setSpecialRequirment(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Button
            onClick={handleFormSubmit}
            disabled={loading}
            style={{
              width: "20vw",
              backgroundColor: "#3B505A",
              color: "white",
              borderRadius: "30px",
            }}
          >
            {loading ? "loading..." : "Submit"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default FormCard;
