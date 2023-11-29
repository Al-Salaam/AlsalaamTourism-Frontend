import Ourpackags from "../../components/packagesComponents/ourPackages"
import withNavbar from "../../components/common/HOCNabar";
import CommonHero from "../../components/common/heroShowCase/commonHero";
import Footer from "../../components/common/footer";

import HeroImage from "../../../images/packagesHero.png"
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";

const Packags = () => {
  const isMobileScreen = useMediaQuery({
    query: "(max-width: 375px)",
  });
  return (<>
  <Helmet>
        <title>{`Packages - Al Salaam Tourism`}</title>
        <meta name="description" content={'Explore Our Trips, We offer some of the most competitive,pocket-friendly prices around, while also delivering without compromising on our quality standards.'} />
        <meta property="og:title" content={'Packages - Al Salaam Tourism'} />
        <meta property="og:description" content={'Explore Our Trips, We offer some of the most competitive,pocket-friendly prices around, while also delivering without compromising on our quality standards.'} />
        <meta property="og:image" content={''} />
        <meta property="og:url" content={`https://www.alsalaamtourism.com/packages`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Packages - Al Salaam Tourism'} />
        <meta name="twitter:description" content={'Explore Our Trips, We offer some of the most competitive,pocket-friendly prices around, while also delivering without compromising on our quality standards.'} />
        <meta name="twitter:image" content={''} />
      </Helmet>
    <CommonHero image = {HeroImage} title1={"Explore Our Trips"}/>
    <div style={{margin:isMobileScreen?"20px 0px 20px 0px":"20px 20px 20px 20px", }}>
    <Ourpackags />
    </div>
    <div style={{marginBottom:"-30%"}}>
    <Footer />
    </div>
  </>
  )
}
export default withNavbar(Packags)