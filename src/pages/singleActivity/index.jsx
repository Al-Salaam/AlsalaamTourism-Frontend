import { Row, Col, Card, Button } from 'antd';
import Itenary from "../../components/singleActivity/Itenarary";
import BookNow from "../../components/singleActivity/bookNow";
import Checklist from "../../components/singleActivity/checklist";
import Description from "../../components/singleActivity/description";
import Carousel from "../../components/singleActivity/imageSlider"
import Questions from "../../components/singleActivity/questions";
import Stats from "../../components/singleActivity/stats";
import AverageRating from '../../components/singleActivity/avgRating';
import RatingInput from '../../components/singleActivity/inputRating';

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
    color:"black"
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
  const averageRating = 4.3;

function SingleActivity() {
    return (
    <Row>
        <Col span={24}>
        <Carousel data={data} thumbnails={true} width="100%" thumbnailWidth="200px" slideNumberStyle={slideNumberStyle} slideNumber={true} />
        <Stats/>
        <Itenary/>
        <BookNow/>
        <Description/>
        <Checklist paragraphs={data1} columns={2} title={"dummy"}/>
        <Questions/> 
        <AverageRating averageRating={averageRating}/>
        <RatingInput/>
        </Col>
    </Row>
    )
}

export default SingleActivity