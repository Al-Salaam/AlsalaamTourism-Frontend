import React from 'react';
import { Row, Col, Rate, Progress } from 'antd';

const AverageRating = ({ averageRating }) => {
    
  return (
    <Row gutter={16} align="middle">
      {/* First Column */}
      <Col span={12}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Rate
            allowHalf
            defaultValue={averageRating}
            disabled
            style={{ fontSize: 24, color: 'gold' }}
          />
          <span style={{ marginLeft: 8, fontSize: 50 }}>{averageRating.toFixed(1)}</span>
        </div>
      </Col>

      {/* Second Column */}
      <Col span={12}>
        <div>
         
          <div>5</div>
          <Progress percent={80} status="active" strokeColor={"#3B505A"} />
          <div>4</div>
          <Progress percent={60} status="active" strokeColor={"#3B505A"} />
          <div>3</div>
          <Progress percent={40} status="active" strokeColor={"#3B505A"} />
          <div>2</div>
          <Progress percent={20} status="active" strokeColor={"#3B505A"} />
          <div>1</div>
          <Progress percent={0} status="active" strokeColor={"#3B505A"} />
        </div>
      </Col>
    </Row>
  );
};

export default AverageRating;
