import { useEffect, useState } from "react";
import FlipCard from "../../components/common/recomandedSection/index2";
import PrimaryButton from "../../components/common/buttons/primary";
import { Row, Col, Input, Button, Slider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../redux/actions/activityAction";
import { Loader } from "../common/loader";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-hot-toast";
import { addToCart, clearError, clearMessage } from "../../redux/reducers/activityReducer";

function OurActivity() {
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [displayedData, setDisplayedData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(6); // Number of items to initially display
  const dispatch = useDispatch();
  const { loading, data, error , message } = useSelector((state) => state.activity);

  const handleAddToCart = (activity) => {
    // Prepare the data you want to send to the Redux action
    const cartItem = {
        activityId: activity._id,
        title: activity.name,
        price: activity.price,
        image: activity.images[0].url
      
    };

  
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    dispatch(fetchActivities());
    if(error){
        toast.error(error)
        dispatch(clearError())
    }
    if(message){
        toast.success(message)
        dispatch(clearMessage())
    }
  }, [dispatch, error, message]);

const filteredData =
data &&
data.filter((item) => {
  if (
    (selectedPriceFilter || priceRange[0] > 0 || priceRange[1] < 500) &&
    item.price < priceRange[0]
  ) {
    return false;
  }
  if (
    (selectedPriceFilter || priceRange[0] > 0 || priceRange[1] < 500) &&
    item.price > priceRange[1]
  ) {
    return false;
  }
  if (showFeaturedOnly && !item.feature) {
    return false;
  }
  if (
    searchFilter &&
    !item.name.toLowerCase().includes(searchFilter.toLowerCase())
  ) {
    return false;
  }
  if (
    (activeButton === "tour" && item.categorey !== "tour") ||
    (activeButton === "activity" && item.categorey !== "activity")
  ) {
    return false;
  }
  return true;
});


  useEffect(() => {

    if (data) {
      setDisplayedData(filteredData.slice(0, itemsToShow));
    }
  }, [data, filteredData, itemsToShow]);


  const loadMoreItems = () => {
   
    setItemsToShow(itemsToShow + 6);
  };

  
  const handleButtonClick = (category) => {
    if (category === activeButton) {
      setActiveButton(null); 
      setPriceRange([0, 500]); 
      setShowFeaturedOnly(false); 
      setSearchFilter(""); 
    } else {
      setActiveButton(category);
      if (category === "featured") {
        setShowFeaturedOnly(true);
        setPriceRange([0, 500]); 
        setSearchFilter(""); 
      } else {
        setShowFeaturedOnly(false);
        setPriceRange([0, 500]); 
        setSelectedPriceFilter(category);
        setSearchFilter(""); 
      }
    }
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 430 });

  return (
    <div style={{width:"99%",}}>
      <Row justify="center" style={{ paddingTop: "10%", }}>
        <Col align="middle">
          <h1>Our Activities</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col align="middle">
          <p>
            We offer some of the most competitive, pocket-friendly prices
            around, while also delivering without compromising on our quality standards.
          </p>
        </Col>
      </Row>
      <Row gutter={16} align="middle" style={{ paddingTop: "5%" }}>
        <Col
          span={6}
          align="middle"
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={7}
          style={{ marginBottom: isSmallScreen ? "10%" : "" }}
        >
          <Input
            placeholder="Search"
            prefix={<SearchOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} /> } 
            onChange={(e) => setSearchFilter(e.target.value)}
            style={{
              border: "none",
              boxShadow: "none",
              borderBottom: "1px solid black",
              borderRadius: 0,
              width: "90%",
            }}
          />
        </Col>
        <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={7}>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Price Range</h3>
            <h5>0-500 AED</h5>
          </div>
          <Slider
            range
            min={0}
            max={500}
            step={10}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
            style={{ width: "90%", marginBottom: "10px" }}
            trackStyle={[{ backgroundColor: "#3B505A" }]}
            handleStyle={[
              { backgroundColor: "white", borderColor: "white" },
              { backgroundColor: "white", borderColor: "white" },
            ]}
            railStyle={{ backgroundColor: "lightgray" }}
          />
        </Col>
        <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={7}>
          <Button
            onClick={() => handleButtonClick(null)} 
            style={{
              border: "none",
              borderRadius: 0,
              borderBottom: activeButton === null ? "2px solid #3B505A" : "none",
              color: activeButton === null ? "#3B505A" : "#696969",
            }}
          >
            All
          </Button>
          <Button
            onClick={() => handleButtonClick("featured")}
            style={{
              border: "none",
              borderRadius: 0,
              borderBottom: activeButton === "featured" ? "2px solid #3B505A" : "none",
              color: activeButton === null ? "#3B505A" : "#696969",
              marginLeft: "10%",
            }}
          >
            Featured
          </Button>
          <Button
            onClick={() => handleButtonClick("tour")} 
            style={{
              border: "none",
              borderRadius: 0,
              borderBottom: activeButton === "tour" ? "2px solid #3B505A" : "none",
              color: activeButton === "tour" ? "#3B505A" : "#696969",
              marginLeft: "10%",
            }}
          >
            Tour
          </Button>
          <Button
            onClick={() => handleButtonClick("activity")} 
            style={{
              border: "none",
              borderRadius: 0,
              borderBottom: activeButton === "activity" ? "2px solid #3B505A" : "none",
              color: activeButton === "activity" ? "#3B505A" : "#696969",
              marginLeft: "10%",
            }}
          >
            Activity
          </Button>
        </Col>
      </Row>
      <Row gutter={16}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {displayedData.map((item, index) => (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={8}
                key={index}
                align="middle"
                justify="center"
                style={{ margin: "2% 0" }}
              >
                <FlipCard
                  cardType={item.category}
                  imageSrc={item.images[0]?.url}
                  title1={item.name}
                  rate={item.ratings}
                  width={"95%"}
                  price={item.price}
                  shortdescription={item.shortdescription}
                  descBack={item.descBack}
                  feature={item.feature}
                  activityId={item._id}
                  noOfReviews={item.noOfReviews}
                  onClick={() => handleAddToCart(item)}
                />
              </Col>
            ))}
          </>
        )}
      </Row>
      {displayedData.length < filteredData.length && (
        <Row>
          <Col align="middle" span={24}>
            <PrimaryButton clickHandler={loadMoreItems} title={"Load More"} />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default OurActivity;
