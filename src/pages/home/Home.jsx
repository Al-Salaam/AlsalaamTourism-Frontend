import withNavbar from "../../components/common/HOCNabar";
import HeroShowCase from "../../components/common/heroShowCase";
import ServicesShowCase from "../../components/common/servicesShowcase";
import ThreeCardShowCase from "../../components/common/threeCardShowcase";
import RecomendedSection from "../../components/common/recomandedSection";
import Footer from "../../components/common/footer";
import TopDealCarousel from "../../components/common/topDealCarousel";


function Home() {
    

    return (
        <>
            <HeroShowCase  />
            <ServicesShowCase videoSrc="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            <ThreeCardShowCase />
            <div style={{margin:"-20px 0 0 0"}}>
            <RecomendedSection />
            </div>
            {/* <TopDealSlider/> */}
            <div style={{margin:"50px 0 50px 0"}}>
            <TopDealCarousel/>
            </div>
            <div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
        </>
    )
}

export default withNavbar(Home)