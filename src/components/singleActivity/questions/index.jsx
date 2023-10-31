import { useState } from "react";
import { Row, Col, Card, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const Questions = () => {
  const questionsAndAnswers = [
    {
      question: "1-Do you need coordinate airport transportation?",
      answer:
        "Although they are not included in the tour price, airport transfers can be scheduled ahead of time, subject to availability. Please contact our customer support team once you have a confirmed booking to make this arrangement.",
    },
    {
      question: "2-Can I use a different currency to pay for my invoice?",
      answer: 'This is unfortunately not available. All payments must be made in the same currency that was used to originally book the trip.',
    },
    {
      question: "3-How secure are my personal belongings?",
      answer:
        "While we do everything possible to keep your belongings safe, we do not guarantee the safety of your belongings. A lockable suitcase or money belt, as well as travel insurance, is required.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleAnswer = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


  const isSmallScreen = useMediaQuery({ maxWidth: 845 });

  return (
    <Row
      justify="center"
      style={{
        background: "linear-gradient(180deg, #70ADBB 0%, #018D97 100%)",
        padding:isSmallScreen?"": "20px",
      }}
      xs={24} sm={24} md={24} lg={24} xl={24}
    >
    <Col xs={23} sm={20} md={20} lg={20} xl={12}>
      <Col span={24} align="middle" style={{ margin: "2%" }}>
        <h1 style={{ color: "white" }}>Frequently asked Questions</h1>
      </Col>
      <Col >
        {questionsAndAnswers.map((qa, index) => (
          <Card
            key={index}
            style={{
              marginBottom: "16px",
              border: "1px solid black",
              background: "transparent",
              color: "white",
              borderColor: "white",
             
            }}
            title={
              <h3 style={{ color: "white", width: "20px", fontSize:isSmallScreen?"70%":"130%" }}>{qa.question}</h3>
            }
            extra={
              <Button
                type="text"
                icon={expanded[index] ? <MinusOutlined /> : <PlusOutlined />}
                onClick={() => toggleAnswer(index)}
                style={{
                  backgroundColor: "#3B505A",
                  color: "white",
                  marginRight: "-24px",
                }}
              />
            }
          >
            {expanded[index] && <p>{qa.answer}</p>}
          </Card>
        ))}
      </Col>
      </Col>
    </Row>
  );
};

export default Questions;
