import Footer from "../../../components/common/footer"
import withNavbar from "../../../components/common/HOCNabar"
import DestinationCard from "../../../components/destinationsComponents/destinationCard"
import HeroSection from "../../../components/destinationsComponents/heroSection/index"
import desRas from "../../../../images/rasalkhaima.png"

const RasAlKhaima = () => {
  return (
    <>
  <HeroSection imageUrl= {desRas} Heading="Ras Al-Khaima"/>

  <DestinationCard Paragraph="Ras Al Khaimah Emirate has a distinguished archaeological legacy and a lengthy cultural history. Ras Al Khaimah is one of the oldest continually inhabited areas on earth due to its alluring blend of lush plains, picturesque mountains, white beaches, mangroves, and desert landscapes.
Archaeological studies show that trade has been a crucial aspect of life in the region since at least 5000 BCE, and Ras Al Khamiah’s strategic location at the mouth of the Arabian Gulf has always oriented it toward commercial and cultural interchange.
Since then, Ras Al Khaimah has also gone by the names Julfar, Majan, and Al Seer. It was well-known for its economic activity throughout the Gulf.
Residents of Ras Al Khaimah often travelled to places like Zanzibar, Bombay, and China by the 10th century CE.
Due to its wealth, Ras Al Khaimah served as an attractive target for numerous occupying nations. The ruins of 18 historic fortifications, castles, and towers bear witness to Ras Al Khaimah’s stormy past, which saw the Sassanid Persians, the Islamic clans of the Arabian Gulf, and the Portuguese, Dutch, and British colonial empires all attempt to conquer or occupy the local communities."/>

  
<div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
    </>
  )
}

export default withNavbar(RasAlKhaima)