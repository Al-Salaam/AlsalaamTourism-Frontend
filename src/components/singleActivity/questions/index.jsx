import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const Questions = () => {
  const questionsAndAnswers = [
    {
      question: '1-What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: '2-How do you declare a state variable in React?',
      answer: 'You can declare a state variable using the "useState" hook.',
    },
    {
      question: '3-What is JSX in React?',
      answer: 'JSX is a syntax extension for JavaScript  often used in React for defining elements.',
    },
    {
      question: '4-How do you render a component in React?',
      answer: 'You can render a component using the "ReactDOM.render()" method.',
    },
    {
      question: '5-What is the purpose  of props in React?',
      answer: 'Props are used for passing data from a parent component to a child component.',
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleAnswer = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    
      <Row  justify="center" style={{ background: 'linear-gradient(180deg, #70ADBB 0%, #018D97 100%)', padding: '20px'}}>
        <Col span={24} align="middle" style={{margin:"2%"}}><h1 style={{color:"white"}}>Frequently asked Questions</h1></Col>
        <Col xs={24} sm={20} md={16} lg={12}>
          {questionsAndAnswers.map((qa, index) => (
            <Card
              key={index}
              style={{ marginBottom: '16px', border: '1px solid black',background:"transparent",color:"white", borderColor:"white" }}
              title={<h3 style={{ color: 'white',width:"20px"}}>{qa.question}</h3>}
              extra={
                <Button
                  type="text"
                  icon={expanded[index] ? <MinusOutlined /> : <PlusOutlined />}
                  onClick={() => toggleAnswer(index)}
                  style={{backgroundColor:"#3B505A",color:"white",marginRight:"-24px"}}
                />
              }
            >
              {expanded[index] && <p>{qa.answer}</p>}
            </Card>
          ))}
        </Col>
      </Row>
    
  );
};

export default Questions;
