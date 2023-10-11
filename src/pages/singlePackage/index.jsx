import { Row, Col, Image } from 'antd';
import withNavbar from "../../components/common/HOCNabar"
import CommonHero from "../../components/common/heroShowCase/commonHero";
import HeroImage from "../../../images/abuDhabi.png"
import Footer from "../../components/common/footer"
import ActSlid from "../../components/common/activitySlider"
import CardSlider from "../../components/activityComponents/cardSlider/slider";
import AverageRating from '../../components/singleActivity/avgRating';
import RatingInput from '../../components/singleActivity/inputRating';
import Map from "../../../images/Map.png"
import { useMediaQuery } from 'react-responsive';
import Questions from '../../components/singleActivity/questions';
import Carousel from '../../components/singleActivity/imageSlider';
import CarouselWithThumbnails from '../../components/singlePackage/carousal/index2';
import SinglePackaeTitle from '../../components/singlePackage/Title';
import Stats from '../../components/singleActivity/stats';
import StatsSinglePackage from '../../components/singlePackage/stats';
import TabsSinglePackage from '../../components/singlePackage/tabs';
import SinglePackaeDesc from '../../components/singlePackage/description';
import FormCard from '../../components/singlePackage/form';



const data = [
    {
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
        caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
        image:
            "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        caption: "<div>San Francisco</div>",
    },
]

const statData = [
    {
        time: "9 hours",
        cancellationTime: "Up to 1 Day",
        groupSize: "25 People",
        languages: "Arabic, English"
    }
];


const slideNumberStyle = {
    fontSize: "15px",
    color: "black"
};
const averageRating = 4.3;

const SinglePackage = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 950 });
    return (<>
        <Row>
            <Col span={24}>
            <CommonHero title1={"Single Package"} image={HeroImage} />
            
            <CarouselWithThumbnails images={data} />
          <Row gutter={[40,40]}  style={{width:"90vw", margin:"0 auto"}}>
          
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} >
            <Row gutter={[40,40]}>
            <Col span={24}><SinglePackaeTitle/></Col>
            <Col span={24}><StatsSinglePackage/></Col>
            <Col span={24}><SinglePackaeDesc/></Col>
            <Col span={24}><TabsSinglePackage/></Col>
            </Row>
            </Col>
            
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} ><FormCard/></Col>
            </Row>
        <Questions />
        <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ margin: "5% 0", padding: "0 2%" }}>
                <AverageRating averageRating={averageRating} />
                <RatingInput />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ margin: "5% 0", padding: "0 2%", display: isSmallScreen ? "none" : "" }} align="middle">
                <Image src={Map} />
            </Col>
        </Row>
        <CardSlider />
        <ActSlid />
        <Footer />
            </Col>
        </Row>
       
    </>)
}
export default withNavbar(SinglePackage);