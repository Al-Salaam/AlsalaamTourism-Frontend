import withNavbar from "../../components/common/HOCNabar";
import Footer from "../../components/common/footer";

import CircleComponent from "../../components/common/circleImages";
import { useMediaQuery } from "react-responsive";
import OurActivity from '../../components/activityComponents';
import ActivityHeroSection from '../../components/activityComponents/heroSection';
import TopDealCarousel from "../../components/common/topDealCarousel";
import { Helmet } from "react-helmet";



function ActivityPage() {


    const isSmallScreen = useMediaQuery({ maxWidth: 430 });
    return (
        <>
        <Helmet>
        <title>{`Activities - Al Salaam Tourism`}</title>
        <meta name="description" content={'The World is Yours To Explore, We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.'} />
        <meta property="og:title" content={'Activities - Al Salaam Tourism'} />
        <meta property="og:description" content={'The World is Yours To Explore, We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.'} />
        <meta property="og:image" content={''} />
        <meta property="og:url" content={`https://www.alsalaamtourism.com/activity`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Activities - Al Salaam Tourism'} />
        <meta name="twitter:description" content={'The World is Yours To Explore, We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.'} />
        <meta name="twitter:image" content={''} />
      </Helmet>
            <ActivityHeroSection />
            <div style={{margin:isSmallScreen? "40px 10px 60px 10px":"40px 60px 60px 75px"}}>
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
