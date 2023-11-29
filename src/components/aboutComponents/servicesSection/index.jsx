import { Row, Col } from "antd";
import FlipCardServices from "../servicesCard";
import Icon1 from "../../../../images/service1.png";
import Icon2 from "../../../../images/serviceicon2.png";
import Icon3 from "../../../../images/service3.png";
import { useMediaQuery } from "react-responsive";
const cardData = [
  {
    id: 1,
    frontData: {
      heading: "Travels and Tours",
      icon: Icon1,
    },
    backData: {
      summary:
        "We offer a carefully selected range of travel locations, giving our clients an array of world-class options to choose from, as well as providing entry to privileged-access destinations, experiences, and connections from our black book. We bring to the fore all our expertise to make your journey very comfortable.",
    },
  },
  {
    id: 2,
    frontData: {
      heading: "Excursion Tickets",
      icon: Icon2,
    },
    backData: {
      summary:
        "We offer a carefully selected range of travel locations, giving our clients an array of world-class options to choose from, as well as providing entry to privileged-access destinations, experiences, and connections from our black book. We bring to the fore all our expertise to make your journey very comfortable.",
    },
  },
  {
    id: 3,
    frontData: {
      heading: "Transfers",
      icon: Icon3,
    },
    backData: {
      summary:
        "We offer a carefully selected range of travel locations, giving our clients an array of world-class options to choose from, as well as providing entry to privileged-access destinations, experiences, and connections from our black book. We bring to the fore all our expertise to make your journey very comfortable.",
    },
  },
];

const ServicesSection = () => {
  const isHeading = useMediaQuery({
    query: "(max-width: 575px)",
  });

  const titleStyle2 = {
    fontFamily: "Ubuntu",
    fontSize: "120%",
    fontWeight: 400,
    lineHeight: "32px",
    letterSpacing: "0.07em",
    textAlign: isHeading ? "center" : "start",
    marginLeft: isHeading ? "" : "4%",
  };

  return (
    <Row style={{ paddingTop: "5%" }}>
      <Col xs={24} sm={8} md={8} lg={8} style={{ paddingLeft: "16px" }}>
        <div style={{ ...titleStyle2, padding: "16px" }}>
          <h1 style={{ marginBottom: "10px" }}>Our Services</h1>
          <p>
            Regardless of your location at any time, you can access all of our
            tour packages and enjoy the same top-quality service. You can also
            partake in all our offerings and promotions. This is because we are
            driven to make your comfort our obsession and your satisfaction our
            daily assignment.
          </p>
        </div>
      </Col>
      <Col
        xs={24}
        sm={16}
        md={16}
        lg={16}
        style={{
          background:
            "linear-gradient(to bottom, #70ADBB 50%, #70ADBB 50%, #FFFFFF 50%, #FFFFFF 100%)",
        }}
      >
        <Row>
          {cardData.map((data) => (
            <Col
              xs={24}
              sm={8}
              md={8}
              lg={8}
              style={{ margin: "0 auto", fontFamily:"ubuntu" }}
              key={1}
            >
              <FlipCardServices
                key={data.id}
                frontData={data.frontData}
                backData={data.backData}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ServicesSection;
