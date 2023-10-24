import { Row, Col, Image } from 'antd';
import withNavbar from "../../components/common/HOCNabar";
import Itenary from "../../components/singleActivity/Itenarary";
import BookNow from "../../components/singleActivity/bookNow";
import Checklist from "../../components/singleActivity/checklist";
import Description from "../../components/singleActivity/description";
import Carousel from "../../components/singleActivity/imageSlider"
import Questions from "../../components/singleActivity/questions";
import Stats from "../../components/singleActivity/stats";
import AverageRating from '../../components/singleActivity/avgRating';
import RatingInput from '../../components/singleActivity/inputRating';
import CardSlider from '../../components/activityComponents/cardSlider/slider';
import ActHero from "../../../images/singAct.png"
import CommonHero from '../../components/common/heroShowCase/commonHero';
import Footer from '../../components/common/footer/index';
import { useMediaQuery } from 'react-responsive';
import Map from "../../../images/Map.png"
import Map2 from "../../components/common/map/index"
import ActivitySlider from '../../components/common/activitySlider';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchActivities, fetchActivitiesReviews, fetchActivityById } from '../../redux/actions/activityAction';
import { Loader } from '../../components/common/loader';

const slideNumberStyle = {
    fontSize: "15px",
    color: "black"
};



function SingleActivity() {
    const dispatch = useDispatch();
    const { loading, activity, reviews, data } = useSelector((state) => state.activity)
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchActivities())
        dispatch(fetchActivityById(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(fetchActivitiesReviews(id))
    }, [dispatch, id])
    const isSmallScreen = useMediaQuery({ maxWidth: 950 });
    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <Row gutter={[40]} justify={"center"}>
                        <Col span={24}>
                            <CommonHero title1={"Al Ain City Tours"} image={ActHero} />
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Carousel data={activity?.images} thumbnails={true} width="100%" thumbnailWidth="200px" slideNumberStyle={slideNumberStyle} slideNumber={true} />
                            <Stats activity={activity} />
                            <Itenary />
                            <div style={{ display: isSmallScreen ? "none" : "" }}>
                                <Checklist activity={activity?.highlights} columns={1} title={"Highlights"} />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <BookNow activity={activity} />
                            <Description activity={activity} />
                            <Checklist activity={activity?.included} columns={2} title={"Included"} style={{ margin: "1500px 0" }} />
                            <Checklist activity={activity?.excluded} columns={1} title={"Excluded"} />
                            <div style={{ display: isSmallScreen ? "" : "none" }}>
                                <Checklist activity={activity?.highlights} columns={1} title={"Highlights"} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Questions />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ margin: "5% 0", padding: "0 2%" }}>
                            <AverageRating reviews={activity?.noOfReviews} rating={activity?.ratings}  module={activity}/>
                            <RatingInput activity={activity}/>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ margin: "5% 0", padding: "0 2%", display: isSmallScreen ? "none" : "" }} align="middle">
                            <Map2/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{ margin: "0 5% 0 0" }} >
                            <CardSlider  reviews={reviews}/>
                        </Col>
                        <Col span={24} style={{ margin: "5% 0", padding: "0 2%", display: isSmallScreen ? "" : "none" }} align="middle">
                            <Map2/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <ActivitySlider data={data} auto= {true}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Footer />
                        </Col>
                    </Row>
                </>
            )}


        </>
    )
}

export default withNavbar(SingleActivity)