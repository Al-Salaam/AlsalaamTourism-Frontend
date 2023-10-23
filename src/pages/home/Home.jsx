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
            <RecomendedSection />
            {/* <TopDealSlider/> */}
            <TopDealCarousel/>
            <Footer />
        </>
    )
}

export default withNavbar(Home)