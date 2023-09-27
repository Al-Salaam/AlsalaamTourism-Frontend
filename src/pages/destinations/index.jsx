import withNavbar from "../../components/common/HOCNabar";
import Footer from "../../components/common/footer";
import HeroSection from "../../components/destinationsComponents/heroSection/index"
import Section2 from "../../components/destinationsComponents/section2";



function Destinations() {


    return (
        <>
            
          
          <HeroSection imageUrl= "../../../../images/historic4.png" Heading= "Destination"/>

            <Section2 />
           
            <Footer/>
            
           
          
            
        </>
    )
}

export default withNavbar(Destinations)