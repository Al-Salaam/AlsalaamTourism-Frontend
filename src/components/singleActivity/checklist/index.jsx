import React from 'react';
import { Row, Col } from 'antd';
import check from "../../../../images/check.png";
import uncheck from "../../../../images/unCheck.png";

const Checklist = ({ title, activity, columns }) => {
  const smValue = columns === 2 ? 12 : 24;
  const imageSrc = title === "Excluded" ? uncheck : check;
  const Sentences = activity?.[0]?.split(',') ?? [];

  return (
    <div  style={{margin:'0 30px 0 40px'}}>
      <h1 style={{ margin: "5% 0" }}>{title}</h1>
      <Row gutter={[16, 16]}>
        {Sentences?.map((paragraph, index) => (
          <Col key={index} xs={24} sm={smValue}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={imageSrc} />
              <p style={{ marginLeft: "10px" }}>{paragraph}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Checklist;
