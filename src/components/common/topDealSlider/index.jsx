import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Background from "../../../../images/topDeals.png"
import Image1 from "../../../../images/3dSelfie.png";
import Image2 from "../../../../images/abuDhabi.png";
import Image3 from "../../../../images/ainDubai.png";
import Image4 from "../../../../images/alAinCityTour.png";
import Image5 from "../../../../images/g1.png";
import Image6 from "../../../../images/g2.png";
import Image7 from "../../../../images/g3.png";
import Image8 from "../../../../images/g4.png";

const imageSources = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8
];

const responsiveSettings = [
    {
        breakpoint: 1700,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 1159,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },

];

const Example = () => {
    return (
        <div style={{ margin: "1%"}}>
            <h1 style={{ textAlign: "center" }}>Top Deals</h1>
            <Slide indicators={true} duration={2000} responsive={responsiveSettings} style={{}}>
                {imageSources.map((imageSource, index) => (
                    <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center",background: 'linear-gradient(180deg, #89A7B2 0%, #028B95 100%)',  }}>
                        <img src={imageSource} width={"350px"} height={"400vw"} alt={`Image ${index + 1}`}  />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Example;
