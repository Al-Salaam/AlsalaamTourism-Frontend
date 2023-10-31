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
            <div style={{margin:"40px 40px 30px 40px"}}>
            <ServicesShowCase videoSrc="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /></div>
            <ThreeCardShowCase />
          
            <RecomendedSection />
            <div style={{margin:"80px 0 80px 0"}}>
            <TopDealCarousel/>
            </div>
            <div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
        </>
    )
}

export default withNavbar(Home)