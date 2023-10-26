import withNavbar from "../../components/common/HOCNabar";
import Footer from "../../components/common/footer";
import HeroSection from "../../components/destinationsComponents/heroSection/index"
import Section2 from "../../components/destinationsComponents/section2";
import historic from "../../../images/historic4.png"


function Destinations() {


    return (
        <>
            
          
          <HeroSection imageUrl= {historic} Heading= "Destination"/>

            <Section2 />
           
            <div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
            
           
          
            
        </>
    )
}

export default withNavbar(Destinations)