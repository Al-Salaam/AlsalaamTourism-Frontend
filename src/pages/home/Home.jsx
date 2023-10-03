import withNavbar from "../../components/common/HOCNabar";
import HeroShowCase from "../../components/common/heroShowCase";
import ServicesShowCase from "../../components/common/servicesShowcase";
import ThreeCardShowCase from "../../components/common/threeCardShowcase";
import TwoCardShowCase from "../../components/common/twoCardShowCase";
import RecomendedSection from "../../components/common/recomandedSection";
import Footer from "../../components/common/footer";

function Home() {
    

    return (
        <>
            <HeroShowCase />
            <ServicesShowCase videoSrc="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            <ThreeCardShowCase />
            <RecomendedSection />
            <TwoCardShowCase />
            <Footer />
        </>
    )
}

export default withNavbar(Home)