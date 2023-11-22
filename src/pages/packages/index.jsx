import Ourpackags from "../../components/packagesComponents/ourPackages"
import withNavbar from "../../components/common/HOCNabar";
import CommonHero from "../../components/common/heroShowCase/commonHero";
import Footer from "../../components/common/footer";

import HeroImage from "../../../images/packagesHero.png"
import { useMediaQuery } from "react-responsive";

const Packags = () => {
  const isMobileScreen = useMediaQuery({
    query: "(max-width: 375px)",
  });
  return (<>
    <CommonHero image = {HeroImage} title1={"Explore Our Trips"}/>
    <div style={{margin:isMobileScreen?"20px 0px 20px 0px":"20px 20px 20px 20px"}}>
    <Ourpackags />
    </div>
    <div style={{marginBottom:"-30%"}}>
    <Footer />
    </div>
  </>
  )
}
export default withNavbar(Packags)