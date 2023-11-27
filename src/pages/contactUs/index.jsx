import withNavbar from "../../components/common/HOCNabar"
import { Row, Col, } from 'antd';
import Footer from "../../components/common/footer"
import ContactHero from "../../components/contcatUs/contactHero"
import ContactForm from "../../components/contcatUs/contactForm"
import ContactMap from "../../components/contcatUs/contactMap"
import Map from "../../components/common/map"
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";

function ContactUS ()  {


  const isSmallScreen = useMediaQuery({ maxWidth: 430 });
  return (
    <>
    <Helmet>
        <title>{`Contact Us - Al Salaam Tourism`}</title>
        <meta name="description" content={'Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions.'} />
        <meta property="og:title" content={'Contact Us - Al Salaam Tourism'} />
        <meta property="og:description" content={'Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions.'} />
        <meta property="og:image" content={''} />
        <meta property="og:url" content={`https://www.alsalaamtourism.com/contact`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Contact Us - Al Salaam Tourism'} />
        <meta name="twitter:description" content={'Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions.'} />
        <meta name="twitter:image" content={''} />
    </Helmet>
    <ContactHero/>

   
    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{width:"800px", marginLeft:isSmallScreen?"-3%":"25%"}}>
    <Map />
    </Col>
  

    <ContactForm/>

    <div style={{marginBottom:"-30%"}}>
    <Footer />
    </div>
    </>
  )
}

export default withNavbar(ContactUS)