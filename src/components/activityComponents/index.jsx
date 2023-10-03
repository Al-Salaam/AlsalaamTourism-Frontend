import React, { useState } from 'react';
import FlipCard from "../../components/common/recomandedSection/index2";
import PrimaryButton from '../../components/common/buttons/primary';
import { Row, Col, Select, Input, Button, Slider } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { SearchOutlined } from '@ant-design/icons';

import AinDubai from "../../../images/ainDubai.png"
import CityTour from "../../../images/alAinCityTour.png"
import WaterPark from "../../../images/alMontazahWaterPark.png"
import AquaVenture from "../../../images/aquaVenture.png"
import BananaBoat from "../../../images/bananaBoat.png"
import Selfie from "../../../images/3dSelfie.png"
const data = [
    {
        name: 'Ain Dubai',
        rating: 4.8,
        imageSrc: AinDubai,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 80.00,
        feature: true
    },
    {
        name: 'Al Montazah Waterpark',
        rating: 4.8,
        imageSrc: CityTour,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 180.00
    },

    {
        name: 'Al Ain City Tours',
        rating: 4.8,
        imageSrc: WaterPark,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 280.00,
        feature: true
    },
    {
        name: 'Aquaventure Waterpark',
        rating: 4.8,
        imageSrc: AquaVenture,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 500.00
    },

    {
        name: 'Banana Boat Dubai',
        rating: 4.8,
        imageSrc: BananaBoat,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 80.00,
        feature: true
    },
    {
        name: '3D World Selfie Museum',
        rating: 4.8,
        imageSrc: Selfie,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 280.00,
        feature: true

    },

];


const { Option } = Select;
function OurActivity(){

    const isSmallScreen = useMediaQuery({ maxWidth: 1198 });
    const isSmallestScreen = useMediaQuery({ maxWidth: 430 });

    const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
    const [searchFilter, setSearchFilter] = useState('');
    const [activeButton, setActiveButton] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 500]);


    // Filter function to apply selected filters
    const filteredData = data.filter(item => {
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
    return(
    <>
             <Row justify="center" style={{ paddingTop: "10%" }}><Col align="middle"><h1>Our Activities</h1></Col></Row>
          <Row justify="center"  ><Col align="middle"><p>We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.</p></Col></Row>
            <Row gutter={16}  align="middle" style={{ paddingTop: "5%" }} >
                <Col span={6}  align="middle" xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Input
                        placeholder="Search"
                        prefix={<SearchOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />} // Add search icon as prefix
                        onChange={e => setSearchFilter(e.target.value)}
                        style={{ border: 'none', boxShadow: 'none', borderBottom: "1px solid black", borderRadius: 0, width: "90%" }} // Remove border and box shadow
                    />
                </Col>
                <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={8} >
                    <div style={{width:"90%",display:"flex",justifyContent:"space-between", alignItems:"center"}}>
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
                <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={8}>

                    <Button
                        onClick={() => handleButtonClick(null)} // Deselect all
                        style={{ border: 'none',borderRadius:0, borderBottom: activeButton === null ? '2px solid #3B505A' : 'none',color: activeButton === null ? '#3B505A' : '#696969' }}
                    >
                        All
                    </Button>
                    <Button
                        onClick={() => handleButtonClick('featured')}
                        style={{ border: 'none',borderRadius:0, borderBottom: activeButton === 'featured' ? '2px solid #3B505A' : 'none',color: activeButton === null ? '#3B505A' : '#696969' }}
                    >
                        Featured
                    </Button>
                </Col>

                <Col span={6} align="middle" xs={24} sm={24} md={8} lg={8} xl={8}>
                    
                </Col>
            </Row>
            <Row gutter={16}>
                {filteredData.map((item, index) => (
                    <Col xs={24} sm={24} md={24} lg={24} xl={8} key={index} align="middle" justify="center" style={{ margin: "2% 0" }}>
                        <FlipCard imageSrc={item.imageSrc} title1={item.name} rate={item.rating} width={"95%"} price={item.price} descBack={item.descBack} feature={item.feature} />
                    </Col>
                ))}
            </Row>
            <Row><Col align="middle" span={24}><PrimaryButton title={"Load More"}/></Col></Row>
    </>
    )
}
export default OurActivity