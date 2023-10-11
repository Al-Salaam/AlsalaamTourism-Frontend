import { Row, Col, Rate, Typography } from 'antd';

const SinglePackaeTitle =  () => {
   
    const {Title} = Typography

    return(

        <Row>
         <Col span={24}><Title level={3}> Adventure Dubai (5D/4N) </Title></Col>
         <Col span={24}><Rate allowHalf={true} value={4.5} /> <Title level={5}>Average Rating / Total Rating -- Total Reviews</Title> </Col>
        </Row>
    )
} 
export default SinglePackaeTitle