import React, { useState } from 'react';
import withNavbar from "../../components/common/HOCNabar";
import TwoCardShowCase from "../../components/common/twoCardShowCase";
import Footer from "../../components/common/footer";
import FlipCard from "../../components/common/recomandedSection/index2";
import { Row, Col, Select, Checkbox, Input, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { SearchOutlined } from '@ant-design/icons';

import AinDubai from "../../../images/ainDubai.png"
import CityTour from "../../../images/alAinCityTour.png"
import WaterPark from "../../../images/alMontazahWaterPark.png"
import AquaVenture from "../../../images/aquaVenture.png"
import BananaBoat from "../../../images/bananaBoat.png"
import Selfie from "../../../images/3dSelfie.png"
import CircleComponent from "../../components/common/circleImages";

const data = [
    {
        name: 'Ain Dubai',
        rating: 4.8,
        imageSrc: AinDubai,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 180.00,
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
        price: 180.00,
        feature: true
    },
    {
        name: 'Aquaventure Waterpark',
        rating: 4.8,
        imageSrc: AquaVenture,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 180.00
    },

    {
        name: 'Banana Boat Dubai',
        rating: 4.8,
        imageSrc: BananaBoat,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 180.00,
        feature: true
    },
    {
        name: '3D World Selfie Museum',
        rating: 4.8,
        imageSrc: Selfie,
        descBack: "Experience incredible Dubai moments at the world’s largest and tallest observation wheel, 250 meters in the sky!",
        price: 180.00,
        feature: true

    },

];

const { Option } = Select;

function ActivityPage() {
    const isSmallScreen = useMediaQuery({ maxWidth: 1198 });
    const isSmallestScreen = useMediaQuery({ maxWidth: 430 });

    const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
    const [searchFilter, setSearchFilter] = useState('');

    const [activeButton, setActiveButton] = useState(null);


    // Filter function to apply selected filters
    const filteredData = data.filter(item => {
        if (selectedPriceFilter && item.price !== selectedPriceFilter) {
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

    return (
        <>
            <Row gutter={16} align="middle" style={{ paddingTop: "10%" }}>
                <Col span={6}>
                    <Input
                        placeholder="Search Filter"
                        prefix={<SearchOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />} // Add search icon as prefix
                        onChange={e => setSearchFilter(e.target.value)}
                        style={{ border: 'none', boxShadow: 'none',borderBottom:"1px solid black",borderRadius:0, width:"90%" }} // Remove border and box shadow
                    />
                </Col>
                <Col span={6}>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Price Filter"
                        onChange={value => setSelectedPriceFilter(value)}
                    >
                        <Option value={180.00}>180.00</Option>
                        {/* Add more price options here */}
                    </Select>
                </Col>
                <Col span={6}>
                    <Checkbox
                        onChange={e => setShowFeaturedOnly(e.target.checked)}
                    >
                        Featured
                    </Checkbox>
                </Col>

                <Col span={6}>
                    <Checkbox
                        onChange={e => {
                            if (e.target.checked) {
                                setSelectedPriceFilter(null);
                                setShowFeaturedOnly(false);
                                setSearchFilter('');
                            }
                        }}
                    >
                        All
                    </Checkbox>
                </Col>
            </Row>
            <Row gutter={16}>
                {filteredData.map((item, index) => (
                    <Col xs={24} sm={24} md={24} lg={24} xl={8} key={index} align="middle" justify="center" style={{ margin: "2% 0" }}>
                        <FlipCard imageSrc={item.imageSrc} title1={item.name} rate={item.rating} width={"95%"} price={item.price} descBack={item.descBack} feature={item.feature} />
                    </Col>
                ))}
            </Row>
            <TwoCardShowCase />
            <CircleComponent />
            <Footer />
        </>
    )
}

export default withNavbar(ActivityPage);
