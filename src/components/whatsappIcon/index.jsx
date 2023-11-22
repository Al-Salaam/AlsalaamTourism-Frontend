import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import whatsappAnimation from "../../whatsapp.json";
import { useMediaQuery } from "react-responsive";



function FloatingWhatsapp() {

  const isMobile = useMediaQuery({
    query: '(max-width: 501px)', // Change this breakpoint as needed
  });

  const floatingWhatsappStyle = {
    position: 'fixed',
    bottom: isMobile?"65px":'35px',
    right:isMobile?"1px": '20px',
    borderRadius: '40%',
    cursor: 'pointer',
  };

  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: whatsappAnimation,
    });

    return () => {
      anim.destroy(); // Destroy animation on unmount to prevent memory leaks
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClick = () => {
    const phoneNumber = '+971524928120';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello%20from%20your%20website`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <div
        ref={animationContainer}
        style={{ ...floatingWhatsappStyle, width: '60px', height: '60px' }}
        onClick={handleClick}
      />
    </>
  );
}

export default FloatingWhatsapp;
