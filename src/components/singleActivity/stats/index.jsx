import React from 'react';
import { Row, Col, } from 'antd';

const Stats = () => {
    return (
        <div>
            <Row gutter={16} >
                <Col span={6} align={"middle"}>
                    <div className="column">
                        <div className="content">
                         <p>X--Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="content">
                            <p>Additional Content 1</p>
                        </div>
                    </div>
                </Col>
                <Col span={6} align={"middle"}>
                <div className="column">
                        <div className="content">
                         <p>X--Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="content">
                            <p>Additional Content 1</p>
                        </div>
                    </div>
                </Col>
                <Col span={6} align={"middle"}>
                <div className="column">
                        <div className="content">
                         <p>X--Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="content">
                            <p>Additional Content 1</p>
                        </div>
                    </div>
                </Col>
                <Col span={6} align={"middle"}>
                <div className="column">
                        <div className="content">
                         <p>X--Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="content">
                            <p>Additional Content 1</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Stats;
