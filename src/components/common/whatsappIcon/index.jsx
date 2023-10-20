import { FaWhatsapp } from 'react-icons/fa';

const floatingWhatsappStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '40px',
  backgroundColor: '#66cc66',
  color: 'white',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const FloatingWhatsapp = () => {
  const handleClick = () => {
    
    const phoneNumber = '+923142683233';
    
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello%20from%20your%20website`;

    window.location.href = whatsappURL;
  };

  return (
    <div style={floatingWhatsappStyle} onClick={handleClick}>
      <FaWhatsapp size={30} />
    </div>
  );
};

export default FloatingWhatsapp;
