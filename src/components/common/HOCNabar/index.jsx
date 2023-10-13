import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { useMediaQuery } from 'react-responsive';

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

    const isManue = useMediaQuery({
      query: '(max-width: 1198px)', // Change this breakpoint as needed
    });

    const isSmall = useMediaQuery({
      query: '(max-width: 380px)', // Change this breakpoint as needed
    });

    // Styling
    const styles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        zIndex: 4, // Place it below the box
      },
      box: { position: 'fixed', top: '64px', right: isManue ? "-120px" : '50px', width: isSmall ? "90vw" : '400px', height: '300px', backgroundColor: '#FFFFFF', color: 'black', margin: "0 150px", zIndex: 5, borderRadius: "10px" },
      button: { backgroundColor: "#3B505A", border: "none", position: "absolute", bottom: "10px", right: "10px", color: "white", borderRadius: "40%", height: "30px", width: "30px" }
    }

    return (
      <div>
        <Navbar showOverlayMessage={showOverlayMessage} />
        {showOverlay && (
          <div>
            <div style={styles.overlay} onClick={hideOverlay}></div>
            <div id="overlay-box" style={styles.box}>
              {overlayContent}
              <button style={styles.button} onClick={hideOverlay}>
                X
              </button>
            </div>
          </div>
        )}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withNavbar;
