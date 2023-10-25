
import whatsapp from "../../../images/icons8-whatsapp.gif"

const floatingWhatsappStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '40px',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const FloatingWhatsapp = () => {
  const handleClick = () => {

    const phoneNumber = '+971524928120';


    const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello%20from%20your%20website`;

    window.location.href = whatsappURL;
  };

  return (
    <>
    <div style={floatingWhatsappStyle} onClick={handleClick}>
      <img src={whatsapp}/>
     

    </div>
    
    </>

  );
};

export default FloatingWhatsapp;
