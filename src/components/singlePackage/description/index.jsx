import { Row, Col, Typography } from 'antd';

const SinglePackaeDesc = ({ pakage }) => {

    const { Title } = Typography

    return (

        <Row>
            <Col span={24}><Title level={5}>{pakage?.description} </Title></Col>

        </Row>
    )
}
export default SinglePackaeDesc