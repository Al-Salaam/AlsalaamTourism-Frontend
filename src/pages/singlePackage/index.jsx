import { Row, Col, Image } from "antd";
import withNavbar from "../../components/common/HOCNabar";
import CommonHero from "../../components/common/heroShowCase/commonHero";
import HeroImage from "../../../images/abuDhabi.png";
import Footer from "../../components/common/footer";
import ActSlid from "../../components/common/activitySlider";
import CardSlider from "../../components/activityComponents/cardSlider/slider";
import AverageRating from "../../components/singleActivity/avgRating";
import RatingInput from "../../components/singleActivity/inputRating/index2";
// import Map from "../../../images/Map.png"
import { useMediaQuery } from "react-responsive";
import Questions from "../../components/singleActivity/questions";
import CarouselWithThumbnails from "../../components/singlePackage/carousal/index2";
import SinglePackaeTitle from "../../components/singlePackage/Title";
import StatsSinglePackage from "../../components/singlePackage/stats";
import TabsSinglePackage from "../../components/singlePackage/tabs";
import SinglePackaeDesc from "../../components/singlePackage/description";
import FormCard from "../../components/singlePackage/form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchPackagesById,
  fetchPackagesReviews,
} from "../../redux/actions/packagesAction";
import { Loader } from "../../components/common/loader";
import { fetchActivities } from "../../redux/actions/activityAction";
import Map from "../../components/common/map";
import Map2 from "../../components/common/map/index";
import { Helmet } from "react-helmet";

const SinglePackage = () => {
  const dispatch = useDispatch();
  const { pakage, loading, reviews } = useSelector((state) => state.package);
  const { data } = useSelector((state) => state.activity);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPackagesReviews(id));
    dispatch(fetchPackagesById(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);
  const isSmallScreen = useMediaQuery({ maxWidth: 950 });
  const isSmallestScreen = useMediaQuery({ maxWidth: 495 });
  const isSmallest = useMediaQuery({ maxWidth: 375 });
  return (
    <>
      <Helmet>
        <title>{`${pakage?.heading} - Al Salaam Tourism`}</title>
        <meta name="description" content={pakage?.description} />
        <meta property="og:title" content={pakage?.heading} />
        <meta property="og:description" content={pakage?.description} />
        <meta property="og:image" content={pakage?.images[0]?.url} />
        <meta property="og:url" content={`https://www.alsalaamtourism.com/${pakage?.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pakage?.heading} />
        <meta name="twitter:description" content={pakage?.description} />
        <meta name="twitter:image" content={pakage?.images[0]?.url} />
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <Col span={24}>
              <CommonHero title1={"Single Package"} image={HeroImage} />

              <CarouselWithThumbnails images={pakage && pakage?.images} pakage={pakage} />
              <Row
                style={{
                  width: isSmallestScreen ? "100vw" : "92.5vw",
                  margin: "0 auto",
                }}
              >
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Row gutter={[40, 40]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                      <SinglePackaeTitle pakage={pakage && pakage} />
                    </Col>
                    <Col span={24}>
                      <StatsSinglePackage pakage={pakage && pakage} />
                    </Col>
                    <Col span={24}>
                      <SinglePackaeDesc pakage={pakage && pakage} />
                    </Col>
                    <Col span={24}>
                      <TabsSinglePackage pakage={pakage && pakage} />
                    </Col>
                  </Row>
                </Col>

                <Col xs={24} sm={24} md={24} lg={10} xl={12} xxl={12}>
                  <FormCard pakage={pakage && pakage} />
                </Col>
              </Row>
              <Questions />

              <Row style={{ margin: "0 30px 0 30px" }}>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={12}
                  xl={12}
                  xxl={12}
                  style={{ margin: "5% 0", padding: "0 2%" }}
                >
                  <AverageRating
                    reviews={pakage?.noOfReviews}
                    rating={pakage?.ratings}
                    module={pakage}
                  />
                  <RatingInput pakage={pakage} />
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
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
                  <Map />
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
              <div
                style={{
                  margin: isSmallest ? "20px 20px 20px 20px" : "0 40px 0 40px",
                }}
              >
                <ActSlid data={data} />
              </div>
              <Footer />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default withNavbar(SinglePackage);
