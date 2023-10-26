import Footer from "../../../components/common/footer";
import withNavbar from "../../../components/common/HOCNabar";
import DestinationCard from "../../../components/destinationsComponents/destinationCard";
import HeroSection from "../../../components/destinationsComponents/heroSection/index";
import desShar from  "../../../../images/desSharjah.png"

const Sharjah = () => {
  return (
    <>
      <HeroSection
        imageUrl={desShar}
        Heading="Sharjah"
      />

<DestinationCard
  Paragraph="Sharjah is the capital of the Sharjah emirate and the third-largest city in the United Arab Emirates. In addition to its libraries, Islamic museums, and cultural institutes, Sharjah is well-known for its Arabic and Islamic architecture.

The city is renowned as the United Arab Emirates’ center for literature and culture. The city is steeped in its Arabic and Islamic legacy, with many structures in the Umayyad and Abbasid architectural styles, and it provides a taste of the Arabic and Islamic milieu in a country that is generally mainly westernized. It is a key center for family-friendly settings and activities and has a more formal ambiance.

Sharjah provides visitors with a significantly wider look into Arabic and Islamic art, literature, and architecture than Abu Dhabi and Dubai do. Compared to Abu Dhabi and Dubai, it is a common destination for tourists seeking a culturally authentic and more local experience of Arabia and the Islamic environment."

  
/>


<div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
    </>
  );
};

export default withNavbar(Sharjah);
