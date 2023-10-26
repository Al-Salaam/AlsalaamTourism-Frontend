import withNavbar from "../../components/common/HOCNabar";
import TwoCardShowCase from "../../components/common/twoCardShowCase";
import Footer from "../../components/common/footer";

import CircleComponent from "../../components/common/circleImages";

import OurActivity from '../../components/activityComponents';
import ActivityHeroSection from '../../components/activityComponents/heroSection';
import TopDealCarousel from "../../components/common/topDealCarousel";



function ActivityPage() {



    return (
        <>
            <ActivityHeroSection />
            <div style={{margin:"-7% 0 0 0"}}>
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
