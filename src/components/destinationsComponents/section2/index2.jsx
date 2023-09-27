import { Card, Col, Row } from "antd";
import activitySymb from "../../../../images/activitySymb.svg";
import toursSymb from "../../../../images/toursSymb.svg";
import PrimaryButton from "../../common/buttons/primary";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Meta } = Card;

const cardStyle = {
  // width: "100%",
  height: "auto",
  flexShrink: 0,
  borderRadius: "10px",
  backgroundColor: "#FEFBEA",
 
};

const metaStyle = {
  fontFamily: "Ubuntu, sans-serif",
};

const App = (prop) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1000 });

  return (
    <Row justify="center">
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={18}
        xl={14}
        style={{ marginBottom: "20px", marginTop: "40px" }}
      >
        <Card
          hoverable
          style={{
            ...cardStyle,
            borderColor: isSmallScreen ? "50px" : "none",
            // marginLeft:isSmallScreen ? "-6%": "-40px",
            width: isSmallScreen ? "100%" : "32vw",           
            
          }}
          cover={<img src={prop.imageSrc} />}
        >
          <Meta
            style={metaStyle}
            title={prop.name}
            description={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={activitySymb} />
                  <h4
                    style={{ marginLeft: "5px", color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {prop.activities}
                  </h4>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={toursSymb} style={{ marginLeft: "5px" }} />
                  <h4
                    style={{ marginLeft: "5px", color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {prop.tours}
                  </h4>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "auto" }}
                >
                  <Link to={prop.Link}>
                    <PrimaryButton
                      title="View Details"
                      width={isSmallScreen ? "120px" : "120px"}
                    />
                  </Link>
                </div>
              </div>
            }
          />
        </Card>
      </Col>
    </Row>
  );
};

export default App;
