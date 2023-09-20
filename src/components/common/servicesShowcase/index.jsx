import { Row, Col, Image, Space, Typography, Button, Input, ConfigProvider } from 'antd';
import { List } from 'antd';
const { Title } = Typography;

const data = [
    { id: 1, text1: 'Travels & Tours', },
    { id: 2, text1: 'Excrusion Tickets', },
    { id: 3, text1: 'Transfers', },
];
function ServicesShowCase(props) {

    return (
        <>
            <Row>
                <Col span={12} style={{ padding: "5%" }}>
                    <Title>Our Services</Title>
                    <Title style={{ paddingLeft: "15%" }} level={4}>Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions.</Title>
                    <List
                        style={{ paddingLeft: "15%" }}
                        itemLayout="vertical"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <div>
                                    <span style={{ marginRight: '8px' }}>&#8226;</span>
                                    <strong>{item.text1}</strong>

                                </div>
                            </List.Item>
                        )}
                    />

                </Col>
                <Col span={12} style={{padding:"5%"}}>
                    <video controls width="90%">
                        <source src={props.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>

        </>)
}
export default ServicesShowCase