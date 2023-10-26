import withNavbar from "../../components/common/HOCNabar"
import Footer from "../../components/common/footer"
import ContactHero from "../../components/contcatUs/contactHero"
import ContactForm from "../../components/contcatUs/contactForm"
import ContactMap from "../../components/contcatUs/contactMap"

function ContactUS ()  {
  return (
    <>
    <ContactHero/>

    <ContactMap/>

    <ContactForm/>

    <div style={{marginBottom:"-10%"}}>
    <Footer />
    </div>
    </>
  )
}

export default withNavbar(ContactUS)