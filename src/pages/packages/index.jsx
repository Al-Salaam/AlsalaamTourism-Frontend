import Ourpackags from "../../components/packagesComponents/ourPackages"
import withNavbar from "../../components/common/HOCNabar";
import CommonHero from "../../components/common/heroShowCase/commonHero";
import Footer from "../../components/common/footer";

import HeroImage from "../../../images/packagesHero.png"

const Packags = () => {

  return (<>
    <CommonHero image = {HeroImage} title1={"Explore Our Trips"}/>
    <Ourpackags />
    <div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
  </>
  )
}
export default withNavbar(Packags)