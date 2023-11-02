import withNavbar from "../../components/common/HOCNabar";
import Footer from "../../components/common/footer";

import CircleComponent from "../../components/common/circleImages";
import { useMediaQuery } from "react-responsive";
import OurActivity from '../../components/activityComponents';
import ActivityHeroSection from '../../components/activityComponents/heroSection';
import TopDealCarousel from "../../components/common/topDealCarousel";



function ActivityPage() {


    const isSmallScreen = useMediaQuery({ maxWidth: 430 });
    return (
        <>
            <ActivityHeroSection />
            <div style={{margin:isSmallScreen? "12px 30px":"40px 60px 60px 75px"}}>
            <OurActivity />
            </div>
            <div style={{margin:"0 0 50px 0"}}>
            <TopDealCarousel/>
            </div>
            <div style={{margin:"0 0 50px 0"}}>
            <CircleComponent />
            </div>
            <div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
        </>
    )
}

export default withNavbar(ActivityPage);
