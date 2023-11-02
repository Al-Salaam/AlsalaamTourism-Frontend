import withNavbar from "../../components/common/HOCNabar"
import { Row, Col, } from 'antd';
import Footer from "../../components/common/footer"
import ContactHero from "../../components/contcatUs/contactHero"
import ContactForm from "../../components/contcatUs/contactForm"
import ContactMap from "../../components/contcatUs/contactMap"
import Map from "../../components/common/map"
import { useMediaQuery } from "react-responsive";

function ContactUS ()  {


  const isSmallScreen = useMediaQuery({ maxWidth: 430 });
  return (
    <>
    <ContactHero/>

   
    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{width:"800px", marginLeft:isSmallScreen?"-3%":"25%"}}>
    <Map />
    </Col>
  

    <ContactForm/>

    <div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
    </>
  )
}

export default withNavbar(ContactUS)