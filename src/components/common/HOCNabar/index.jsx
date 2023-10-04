import React, { useState } from 'react';
import Navbar from '../Navbar';

const withNavbar = (WrappedComponent) => {
  return function WithNavbar(props) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayContent, setOverlayContent] = useState(null);

    // Function to show the overlay with content
    const showOverlayMessage = (content) => {
      setOverlayContent(content);
      setShowOverlay(true);
    };

    // Function to hide the overlay
    const hideOverlay = () => {
      setOverlayContent(null);
      setShowOverlay(false);
    };

    // Styling
    const styles = {
      box: {
        position: 'fixed',
        top: '64px', // Adjust this value according to your Navbar's height
        right: '250px',
        width: '400px',
        height: '300px',
        backgroundColor: '#FFFFFF',
        color: 'black',
        zIndex: 999,
      },
      button:{
        backgroundColor:"none",
        border:"none",
        position:"absolute",
        bottom:"10px",
        right:"10px"
      }
    }


    return (
      <div>
        <Navbar showOverlayMessage={showOverlayMessage} />
        {showOverlay && (
          <div style={styles.box}
          >
            {overlayContent}
            <button style={styles.button} onClick={hideOverlay}>X</button>
          </div>
        )}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withNavbar;
