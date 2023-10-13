import { Row, Col, Rate, Typography } from 'antd';

const SinglePackaeTitle =  ({pakage}) => {
   
    const {Title} = Typography

    return(

        <Row>
         <Col span={24}><Title level={3}> {pakage?.heading} </Title></Col>
         <Col span={24}><Rate disabled allowHalf={true} value={pakage?.noOfReviews === 0 ? 0 : pakage?.ratings} /> <Title level={5}>{pakage?.noOfReviews === 0 ? 0 : pakage?.ratings}/ 5 - ({pakage?.noOfReviews})</Title> </Col>
        </Row>
    )
} 
export default SinglePackaeTitle