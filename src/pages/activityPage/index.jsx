import React, { useState } from 'react';
import withNavbar from "../../components/common/HOCNabar";
import TwoCardShowCase from "../../components/common/twoCardShowCase";
import Footer from "../../components/common/footer";

import CircleComponent from "../../components/common/circleImages";

import OurActivity from '../../components/activityComponents';
import ActivityHeroSection from '../../components/activityComponents/heroSection';



function ActivityPage() {
   


    return (
        <>
             <ActivityHeroSection/> 
             <OurActivity/>
            <TwoCardShowCase />
            <CircleComponent />
            <Footer />
        </>
    )
}

export default withNavbar(ActivityPage);
