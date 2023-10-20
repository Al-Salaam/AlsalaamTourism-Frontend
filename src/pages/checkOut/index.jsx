import CheckoutHero from "../../components/checkoutComponents/checkoutHero"
import withNavbar from "../../components/common/HOCNabar";
import BookingSection from "../../components/checkoutComponents/bookingSection/index"
import Footer from "../../components/common/footer"


const Checkout = () => {
  return (
    <>
    <CheckoutHero/>
    <BookingSection/>
    
        <Footer/>
    </>
  )
}

export default withNavbar(Checkout)