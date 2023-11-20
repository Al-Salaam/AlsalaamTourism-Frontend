import { Row, Col, Rate, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

const SinglePackaeTitle =  ({pakage}) => {
   
    const {Title} = Typography
    const formattedRating = pakage?.noOfReviews === 0 ? 0 : (pakage?.ratings % 1 === 0 ? pakage?.ratings?.toFixed(0) : pakage?.ratings?.toFixed(1));
    const isSmallest = useMediaQuery({ maxWidth: 425 });
    return(

        <Row>
         <Col span={24} align={isSmallest?"center":"left"}><Title level={2} style={{fontWeight:'bold'}}> {pakage?.heading} </Title></Col>
         <Col span={24} align={isSmallest?"center":"left"}><Rate disabled allowHalf={true} value={pakage?.noOfReviews === 0 ? 0 : pakage?.ratings} /> <Title level={5}>{formattedRating}/ 5 - ({pakage?.noOfReviews})</Title> </Col>
        </Row>
    )
} 
export default SinglePackaeTitle