import  { useEffect, useState } from 'react';
import FlipCard from "../../components/common/recomandedSection/index2";
import PrimaryButton from '../../components/common/buttons/primary';
import { Row, Col, Input, Button, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from '../../redux/actions/activityAction';
import { Loader } from '../common/loader';
import { useMediaQuery } from 'react-responsive';




function OurActivity() {



    const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
    const [searchFilter, setSearchFilter] = useState('');
    const [activeButton, setActiveButton] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [displayedData, setDisplayedData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(6); // Number of items to initially display
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state) => state.activity);

    useEffect(() => {
        dispatch(fetchActivities())
    }, [dispatch])
    // Filter function to apply selected filters
    const filteredData = data && data.filter(item => {
        if ((selectedPriceFilter || priceRange[0] > 0 || priceRange[1] < 500) && item.price < priceRange[0]) {
            return false;
        }
        if ((selectedPriceFilter || priceRange[0] > 0 || priceRange[1] < 500) && item.price > priceRange[1]) {
            return false;
        }
        if (showFeaturedOnly && !item.feature) {
            return false;
        }
        if (searchFilter && !item.name.toLowerCase().includes(searchFilter.toLowerCase())) {
            return false;
        }
        return true;
    });


    useEffect(() => {
        // Update the displayedData based on the current itemsToShow value
        if (data) {
            setDisplayedData(filteredData.slice(0, itemsToShow));
        }
    }, [data, filteredData, itemsToShow]);

    // Function to load more items
    const loadMoreItems = () => {
        // Increase the number of items to display
        setItemsToShow(itemsToShow + 6); // You can change the number as per your requirement
    };

    // Function to handle button click and set active button
    const handleButtonClick = (price) => {
        if (price === activeButton) {
            setActiveButton(null); // Deselect the active button if clicked again
            setPriceRange([0, 500]); // Reset the price range
            setShowFeaturedOnly(false); // Clear featured filter
            setSearchFilter(''); // Clear search filter
        } else {
            setActiveButton(price);
            if (price === 'featured') {
                setShowFeaturedOnly(true); // Apply featured filter
                setPriceRange([0, 500]); // Reset the price range
                setSearchFilter(''); // Clear search filter
            } else {
                setShowFeaturedOnly(false); // Clear featured filter
                setPriceRange([0, 500]); // Reset the price range
                setSelectedPriceFilter(price); // Apply price filter
                setSearchFilter(''); // Clear search filter
            }
        }
    };

    const isSmallScreen = useMediaQuery({ maxWidth: 430 });

    return (
        <>
            <Row justify="center" style={{ paddingTop: "10%" }}><Col align="middle"><h1>Our Activities</h1></Col></Row>
            <Row justify="center"  ><Col align="middle"><p>We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.</p></Col></Row>
            <Row gutter={16} align="middle" style={{ paddingTop: "5%" }} >
                <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={7} style={{marginBottom:isSmallScreen?"10%":""}}>
                    <Input
                        placeholder="Search"
                        prefix={<SearchOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />} // Add search icon as prefix
                        onChange={e => setSearchFilter(e.target.value)}
                        style={{ border: 'none', boxShadow: 'none', borderBottom: "1px solid black", borderRadius: 0, width: "90%" }} // Remove border and box shadow
                    />
                </Col>
                <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={7} >
                    <div style={{ width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                        style={{ width: '90%', marginBottom: '10px' }}
                        trackStyle={[{ backgroundColor: '#3B505A' }]}
                        handleStyle={[
                            { backgroundColor: 'white', borderColor: 'white' },
                            { backgroundColor: 'white', borderColor: 'white' },
                        ]}
                        railStyle={{ backgroundColor: 'lightgray' }}

                    />

                </Col>
                <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={7} >

                    <Button
                        onClick={() => handleButtonClick(null)} // Deselect all
                        style={{ border: 'none', borderRadius: 0, borderBottom: activeButton === null ? '2px solid #3B505A' : 'none', color: activeButton === null ? '#3B505A' : '#696969' }}
                    >
                        All
                    </Button>
                    <Button
                        onClick={() => handleButtonClick('featured')}
                        style={{ border: 'none', borderRadius: 0, borderBottom: activeButton === 'featured' ? '2px solid #3B505A' : 'none', color: activeButton === null ? '#3B505A' : '#696969', marginLeft:"10%" }}
                    >
                        Featured
                    </Button>
                </Col>

                <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={8}>

                </Col>
            </Row>
            <Row gutter={16}z>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {displayedData.map((item, index) => (
                            <Col xs={24} sm={24} md={24} lg={24} xl={8} key={index} align="middle" justify="center" style={{ margin: "2% 0" }}>
                                <FlipCard imageSrc={item.images[0]?.url} title1={item.name} rate={item.ratings} width={"95%"} price={item.price} shortdescription={item.shortdescription} descBack={item.descBack} feature={item.feature} activityId={item._id} noOfReviews={item.noOfReviews}/>
                            </Col>
                        ))}
                    </>
                )}
            </Row>
            {displayedData.length < filteredData.length && (
                <Row>
                    <Col align="middle" span={24}>
                        <PrimaryButton clickHandler={loadMoreItems} title={"load more"} />
                    </Col>
                </Row>
            )}
        </>
    )
}
export default OurActivity