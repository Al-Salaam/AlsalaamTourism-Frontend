import { Row, Col,Typography, } from 'antd';
import PrimaryButton from "../buttons/primary";
import FlipCard from "./index2";
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../loader";
import { useEffect } from "react";
import { fetchActivities } from "../../../redux/actions/activityAction";
const { Title } = Typography;



function RecomendedSection() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.activity)
    const isSmallScreen = useMediaQuery({ maxWidth: 1198 });
    const isSmallestScreen = useMediaQuery({ maxWidth: 430 });
    useEffect(() => {
        dispatch(fetchActivities())
    }, [dispatch])
    return (
        <Row style={{ marginTop: "5%" }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={10} align="middle" justify="center" style={{padding:"0 0 0 25px"}} >
                <Title style={{ textAlign: "left" }}>Recommended For You</Title>
                <Title level={5} style={{ textAlign: "left", paddingRight: "15%", paddingLeft: 5 }}>
                We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.
                <br />
                </Title>
                <Row style={{marginBottom:"10px"}}>
                {isSmallestScreen ? null : <PrimaryButton title={"View All"} width='150px'/>}
                </Row>
            </Col>
            
            <Col xs={24} sm={24} md={12} lg={12} xl={14} align="Right" justify="Right" style={{ background: isSmallestScreen ? "" : 'linear-gradient(90deg, rgba(105, 149, 167, 0.44) 0%, #018A97 100%)' }} >
                <Row style={{ marginLeft: "-17%" }} >
                    {loading ? <Loader /> : (
                        <>
                            {data && data.slice(0, 6).map((item, index) => (
                                
                                <Col xs={24} sm={24} md={24} lg={24} xl={12} key={index} align="middle" justify="center" style={{ marginTop: "5%", marginBottom: "5%", padding: "1%", paddingLeft: isSmallestScreen ? "15%" : (isSmallScreen ? "10%" : "") }}>
                                    <FlipCard imageSrc={item?.images[0]?.url} title1={item.name} rate={item.ratings} price={item.price} shortdescription={item.shortdescription} activityId={item._id} noOfReviews={item.noOfReviews}/>
                                </Col>

                            ))}
                        </>
                    )}


                </Row>
                <Row>
                    <Col span={24} align="middle" justify="center" >
                        {isSmallestScreen ? <PrimaryButton title={"View All"} /> : null}
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}
export default RecomendedSection