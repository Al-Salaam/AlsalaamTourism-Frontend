import withNavbar from "../../components/common/HOCNabar";
import HeroShowCase from "../../components/common/heroShowCase";
import ServicesShowCase from "../../components/common/servicesShowcase";
import ThreeCardShowCase from "../../components/common/threeCardShowcase";
import RecomendedSection from "../../components/common/recomandedSection";
import Footer from "../../components/common/footer";
import TopDealCarousel from "../../components/common/topDealCarousel";
import { Helmet } from "react-helmet";


function Home() {


    return (
        <>
    <Helmet>
        <title>{`Al Salaam Tourism - Dream, Explore, Discover`}</title>
        <meta name="description" content={'Dream | Explore | Discover, Get the best prices on all excurssions and activities across UAE.'} />
        <meta property="og:title" content={'Al Salaam Tourism - Dream, Explore, Discover'} />
        <meta property="og:description" content={'Dream | Explore | Discover, Get the best prices on all excurssions and activities across UAE.'} />
        <meta property="og:image" content={''} />
        <meta property="og:url" content={`https://www.alsalaamtourism.com`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Al Salaam Tourism - Dream, Explore, Discover'} />
        <meta name="twitter:description" content={'Dream | Explore | Discover, Get the best prices on all excurssions and activities across UAE.'} />
        <meta name="twitter:image" content={''} />
    </Helmet>

            <HeroShowCase />
            <div style={{ margin: "40px 40px 30px 40px" }}>
                <ServicesShowCase videoSrc="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /></div>
            <ThreeCardShowCase />

            <RecomendedSection />
            <div style={{ margin: "80px 0 80px 0" }}>
                <TopDealCarousel />
            </div>
            <div style={{ marginBottom: "-10%" }}>
                <Footer />
            </div>
        </>
    )
}

export default withNavbar(Home)