import React from 'react';
import { Row, Col } from 'antd';
import check from "../../../../images/check.png"

const   Checklist = ({title, paragraphs, columns }) => {
  const smValue = columns === 2 ? 12 : 24;

  return (
    <div>
      <h1 style={{margin:"5% 0"}}>{title}</h1>
      <Row gutter={[16, 16]} >
        {paragraphs.map((paragraph, index) => (
          <Col key={index} xs={24} sm={smValue}>
            <div style={{ display: 'flex', alignItems: 'center' }}>

              <img src={check}/>
              <p style={{marginLeft:"10px"}}>{paragraph}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Checklist;
