import React from 'react';
import Navbar from '../Navbar';
const withNavbar = (WrappedComponent) => {
  return function WithNavbar(props) {
    return (
      <div>
        <Navbar/> 
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withNavbar;
