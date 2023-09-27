import withNavbar from "../../../components/common/HOCNabar";
import Footer from "../../../components/common/footer";
import HeroSection from "../../../components/destinationsComponents/heroSection/index";
import DestinationCard from "../../../components/destinationsComponents/destinationCard";

function DestinationDubai() {
  return (
    <>
      <HeroSection imageUrl="../../../../images/desDubai.png" Heading="Dubai" />

      <DestinationCard
        Paragraph="In the United Arab Emirates, the city and emirate of Dubai is well-known for its upscale shopping, cutting-edge buildings, and vibrant nightlife. The 830m-tall Burj Khalifa tower dominates the skyline of skyscrapers. Dubai Fountain, with its musically synchronized jets and lights, is located at its base. Atlantis, The Palm is a resort with aquatic and marine animal parks located on artificial islands near offshore.
"
      />

      <Footer />
    </>
  );
}

export default withNavbar(DestinationDubai);
