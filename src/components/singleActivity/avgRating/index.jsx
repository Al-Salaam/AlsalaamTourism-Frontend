import React from 'react';
import { Row, Col, Rate, Progress } from 'antd';

const AverageRating = ({ activity }) => {
  const totalRatings = activity?.noOfReviews || 0; // Total number of ratings
  const averageRating = activity?.ratings || 0; // Average rating

  // Calculate the percentage distribution for each rating level
  const percentagePerRating = Array.from({ length: 5 }, (_, index) => {
    // Calculate the percentage for each rating level
    const rating = index + 1;
    const ratingCount = activity?.reviews.reduce((count, review) => {
      return count + (review?.rating === rating ? 1 : 0);
    }, 0);
    return (ratingCount / totalRatings) * 100;
  });

  return (
    <Row gutter={16} align="middle">
      {/* First Column */}
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Rate
            allowHalf={true}
            defaultValue={totalRatings === 0 ? 0 : averageRating}
            disabled
            style={{ fontSize: 24, color: 'gold' }}
          />
          <span style={{ marginLeft: 8, fontSize: 50 }}>{totalRatings === 0 ? 0 : averageRating}</span>
        </div>
      </Col>

      {/* Second Column */}
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div>
          {Array.from({ length: 5 }, (_, index) => {
            const rating = index + 1;
            return (
              <div key={rating}>
                {rating}
                <Progress
                  percent={percentagePerRating[index]}
                  status="active"
                  strokeColor={"#3B505A"}
                />
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default AverageRating;
