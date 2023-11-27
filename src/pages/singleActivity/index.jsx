import { Row, Col, Image } from "antd";
import withNavbar from "../../components/common/HOCNabar";
import Itenary from "../../components/singleActivity/Itenarary";
import BookNow from "../../components/singleActivity/bookNow";
import Checklist from "../../components/singleActivity/checklist";
import Description from "../../components/singleActivity/description";
import Carousel from "../../components/singleActivity/imageSlider";
import Questions from "../../components/singleActivity/questions";
import Stats from "../../components/singleActivity/stats";
import AverageRating from "../../components/singleActivity/avgRating";
import RatingInput from "../../components/singleActivity/inputRating";
import CardSlider from "../../components/activityComponents/cardSlider/slider";
import ActHero from "../../../images/singAct.png";
import CommonHero from "../../components/common/heroShowCase/commonHero";
import Footer from "../../components/common/footer/index";
import { useMediaQuery } from "react-responsive";
import Map from "../../../images/Map.png";
import Map2 from "../../components/common/map/index";
import ActivitySlider from "../../components/common/activitySlider";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchActivities,
  fetchActivitiesReviews,
  fetchActivityById,
} from "../../redux/actions/activityAction";
import { Loader } from "../../components/common/loader";
import { Helmet } from "react-helmet";

const slideNumberStyle = {
  fontSize: "15px",
  color: "black",
};

function SingleActivity() {
  const dispatch = useDispatch();
  const { loading, activity, reviews, data } = useSelector(
    (state) => state.activity
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchActivities());
    dispatch(fetchActivityById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchActivitiesReviews(id));
  }, [dispatch, id]);
  const isSmallScreen = useMediaQuery({ maxWidth: 950 });
  const isSmallest = useMediaQuery({ maxWidth: 375 });
  const isSmallest1 = useMediaQuery({ maxWidth: 767 });
  return (
    <>
    <Helmet>
        <title>{`${activity?.name} - Al Salaam Tourism`}</title>
        <meta name="description" content={activity?.shortdescription} />
        <meta property="og:title" content={activity?.name} />
        <meta property="og:description" content={activity?.shortdescription} />
        <meta property="og:image" content={activity?.images[0]?.url} />
        <meta property="og:url" content={`https://www.alsalaamtourism.com/${activity?.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={activity?.name} />
        <meta name="twitter:description" content={activity?.shortdescription} />
        <meta name="twitter:image" content={activity?.images[0]?.url} />
      </Helmet>
      <div style={{ padding: "0 auto", overflowX: "hidden" }}>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Row gutter={[40]} justify={"center"}>
              <Col span={24}>
                <CommonHero title1={"Al Ain City Tours"} image={ActHero} />
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Carousel
                  data={activity?.images}
                  thumbnails={true}
                  mainImageMargin={isSmallest1 ? "" : "2vh 5vw 2vh 5vw"}
                  width="900px"
                  thumbnailWidth="100px"
                  slideNumberStyle={slideNumberStyle}
                  slideNumber={true}
                />
                <Stats activity={activity} />
                <div style={{ marginLeft: "20px" }}>
                  <Itenary />
                  <div style={{ display: isSmallScreen ? "none" : "" }}>
                    <Checklist
                      activity={activity?.highlights}
                      columns={1}
                      title={"Highlights"}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <BookNow activity={activity} />
                <Description activity={activity} />
                <Checklist
                  activity={activity?.included}
                  columns={2}
                  title={"Included"}
                  style={{ margin: "1500px 0" }}
                />
                <Checklist
                  activity={activity?.excluded}
                  columns={1}
                  title={"Excluded"}
                />
                <div style={{ display: isSmallScreen ? "" : "none" }}>
                  <Checklist
                    activity={activity?.highlights}
                    columns={1}
                    title={"Highlights"}
                  />
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col span={24}>
                <Questions />
              </Col>
            </Row>
            <Row style={{ margin: "0 30px 0 30px" }}>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                style={{ margin: "5% 0", padding: "0 2%" }}
              >
                <AverageRating
                  reviews={activity?.noOfReviews}
                  rating={activity?.ratings}
                  module={activity}
                />
                <RatingInput activity={activity} />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                style={{
                  margin: "1% 0",
                  padding: "0 2%",
                  display: isSmallScreen ? "none" : "",
                }}
                align="middle"
              >
                <Map2 />
              </Col>
            </Row>

            <div style={{ margin: "0 50px 0 50px" }}>
              <CardSlider reviews={reviews} />
            </div>
            <Row>
              <Col
                span={24}
                style={{
                  margin: "4% 0",
                  padding: "0 2%",
                  display: isSmallScreen ? "" : "none",
                }}
                align="middle"
              >
                <Map2 />
              </Col>
            </Row>

            <Col
              span={24}
              style={{
                margin: isSmallest ? "20px 20px 20px 20px" : "0 40px 0 40px",
              }}
            >
              <ActivitySlider data={data} auto={true} />
            </Col>

            <Col span={24}>
              <Footer />
            </Col>
          </div>
        )}
      </div>
    </>
  );
}

export default withNavbar(SingleActivity);
