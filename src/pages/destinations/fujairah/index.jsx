import Footer from "../../../components/common/footer"
import withNavbar from "../../../components/common/HOCNabar"
import DestinationCard from "../../../components/destinationsComponents/destinationCard"
import HeroSection from "../../../components/destinationsComponents/heroSection/index"


const Fujairah = () => {
  return (
    <>
  <HeroSection imageUrl= "../../../../images/fujairahver.png" Heading="Fujairah"/>

  <DestinationCard Paragraph= "Calm and serene, the Emirate of Fujairah is a picturesque beach town tucked away from the fast-paced city life. A busy city lined with business skyscrapers and beautiful mountains and beaches, it is known to be a peaceful retreat for locals and travellers.
Primarily a business centre and commercial hub of U.A.E, the city oozes charm with its natural raw beauty. It is separated from the rest of the U.A.E because of the massive Hajar Mountains and offers an enchanting landscape and a simple lifestyle. Carrying on with its rich cultural heritage, the city is a fascinating combination of a 70km long sandy coastline and lofty mountain ranges.
The sunny beaches of the emirate support several maritime activities including sailing, rowing, water surfing, yachting, deep-sea fishing and swimming almost throughout the year. Fujairah is host to the annual powerboat racing championships."/>

  
    <Footer/>
    </>
  )
}

export default withNavbar(Fujairah)