import { Row, Col, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

const SinglePackaeDesc = ({ pakage }) => {

    const { Title } = Typography
    const isSmallest = useMediaQuery({ maxWidth: 500 });
    return (

        <Row>
            <Col xs={20} sm={20} md={22} lg={24} xl={24} xxl={24} align='middle' style={{margin:isSmallest ? '20px 20px 20px 40px':'0 '}}><Title level={5} style={{fontFamily:"ubuntu"}}>{pakage?.description} </Title></Col>

        </Row>
    )
}
export default SinglePackaeDesc