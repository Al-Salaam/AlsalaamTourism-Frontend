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
import ActivitySlider from '../../components/common/activitySlider';


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

];

const slideNumberStyle = {
    fontSize: "15px",
    color: "black"
};

const data1 = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',


    // Add more items if needed
];

const dataInc = [
    "Transfers as per options selected",
    "Lunch if option selected",
    "Al Ain Fort",
    "Al Ain National Heritage",
    "Al Ain Mall",
    "Archaeological Park Visit",
    "Hot water springs",
    "Al Ain Museum",
    "Al Ain Fort",
    "Jabel Hafeet Mountain",
    "Al Ain Zoo (entry tickets are not included)"

]

const dataExc = [
    "Additional Services",
    "Insurance",
    "Drinks",
    "Meals"
]
const dataHigh = [
    'Perfect tour to get away from urban civilization.',
    'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
    'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
    'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
    'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
    'Lorem ipsum dolor sit amet consectetur. Sagittis id.',

];

const averageRating = 4.3;

function SingleActivity() {
    const isSmallScreen = useMediaQuery({ maxWidth: 950 });
    return (
        <>
            <Row gutter={[40]} justify={"center"}>
                <Col span={24}>
                    <CommonHero title1={"Al Ain City Tours"} image={ActHero} />
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Carousel data={data} thumbnails={true} width="100%" thumbnailWidth="200px" slideNumberStyle={slideNumberStyle} slideNumber={true} />
                    <Stats />
                    <Itenary />
                    <div style={{ display: isSmallScreen ? "none" : "" }}>
                        <Checklist paragraphs={dataHigh} columns={1} title={"Highlights"} />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <BookNow />
                    <Description />
                    <Checklist paragraphs={dataInc} columns={2} title={"Included"} style={{ margin: "1500px 0" }} />
                    <Checklist paragraphs={dataHigh} columns={1} title={"Excluded"} />
                    <div style={{ display: isSmallScreen ? "" : "none" }}>
                        <Checklist paragraphs={dataHigh} columns={1} title={"Highlights"} />
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
                    <AverageRating averageRating={averageRating} />
                    <RatingInput />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ margin: "5% 0", padding: "0 2%", display: isSmallScreen ? "none" : "" }} align="middle">
                    <Image src={Map} />
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ margin: "0 5% 0 0" }} >
                    <CardSlider />
                </Col>
                <Col span={24} style={{ margin: "5% 0", padding: "0 2%", display: isSmallScreen ? "" : "none" }} align="middle">
                    <Image src={Map} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <ActivitySlider />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Footer />
                </Col>
            </Row>

        </>
    )
}

export default withNavbar(SingleActivity)