import Carousel from "../../components/singleActivity/imageSlider"
import Stats from "../../components/singleActivity/stats";
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
function SingleActivity() {
    return (<>
        <Carousel data={data} thumbnails={true} width="100%" thumbnailWidth="200px" slideNumberStyle={slideNumberStyle} slideNumber={true} />
        <Stats/>
    </>)
}

export default SingleActivity