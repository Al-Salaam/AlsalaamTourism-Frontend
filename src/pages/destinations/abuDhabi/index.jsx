import Footer from "../../../components/common/footer";
import withNavbar from "../../../components/common/HOCNabar";
import DestinationCard from "../../../components/destinationsComponents/destinationCard";
import HeroSection from "../../../components/destinationsComponents/heroSection/index";
import AbuDhab from "../../../../images/desAbuDhabi.png"
const AbuDhabi = () => {
  return (
    <>
      <HeroSection
        imageUrl={AbuDhab}
        Heading="Abu Dhabi"
      />

      <DestinationCard Paragraph="The vibe of Abu Dhabi’s backstreets gives a significantly different picture from what is initially seen. The U.A.E.’s capital, which is frequently slick and modern, offers an intriguing synthesis of tradition and development. Abu Dhabi, which has a long history dating back to roughly 3000 B.C., keeps a more Arabian atmosphere than glamorous Dubai. To go to places like The Corniche Park, the White Fort, the Heritage Village, which provides a look into Bedouin life, and the Women’s Craft Center, taxis are a dependable, safe option." />

      <div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
    </>
  );
};

export default withNavbar(AbuDhabi);
