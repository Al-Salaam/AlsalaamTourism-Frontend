import React from "react";
import { Button, Space, ConfigProvider } from "antd";
import { useMediaQuery } from "react-responsive";



function PrimaryButton  ({
  
  title, 
  width = "13em",
  height = "45px",
  clickHandler,
}) 

{


  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)", // Change this breakpoint as needed
});
return(
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: "white",
        borderRadius: 2,

        // Alias Token
        colorBgContainer: "white",
      },
    }}
  >
    <Space wrap>
      <Button
        type="default"
        style={{
          backgroundColor: "#3B505A",
          borderRadius: "25px",
          width: width,
          height: height,
          fontFamily: "Ubuntu",
          fontSize: isMobile?"75%":"100%",
          fontWeight:isMobile? 600: 550,
          textAlign:"center",
          textShadow:
            "0px 1.5589158535003662px 1.247132658958435px rgba(0, 0, 0, 0.0759), " +
            "0px 3.7462916374206543px 2.99703311920166px rgba(0, 0, 0, 0.1091), " +
            "0px 7.053934574127197px 5.643147945404053px rgba(0, 0, 0, 0.135), " +
            "0px 12.583013534545898px 10.066411018371582px rgba(0, 0, 0, 0.1609), " +
            "0px 23.535144805908203px 18.828115463256836px rgba(0, 0, 0, 0.1941), " +
            "0px 56.334346771240234px 45.06747817993164px rgba(0, 0, 0, 0.27)",
          border: "gray",
          transition: "background-color 0.3s", // Add a smooth transition
          color: "white", // Set the default text color to white
        }}
        onClick={clickHandler}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#4C626D";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#3B505A";
        }}
      >
        {title}
      </Button>
    </Space>
  </ConfigProvider>
);
}

export default PrimaryButton;
