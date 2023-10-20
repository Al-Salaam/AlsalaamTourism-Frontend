import React, { useState } from 'react';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:"3% 0"
    },
    imageContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        // maxWidth:"1400px",
        maxHeight:"600px"
    },
    mainImage: {
        width:"90vw",
        height:"600px",
        objectFit: 'cover',
        
    },
    thumbnails: {
        position: 'absolute',
        top: "30%",
        right: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    thumbnail: {
        margin: '5px',
        cursor: 'pointer',
        opacity: 0.6,
        transition: 'opacity 0.2s',

    },
    activeThumbnail: {
        opacity: 1,
    },
    imageCounter: {
        textAlign: 'center',
        marginTop: '10px',
        color:"#4FAEAB",
        fontSize:"30px",
        backgroundColor:"white",
        borderRadius:"10px"
    },
};


const CarouselWithThumbnails = ({ images, style }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [thumbnailRange, setThumbnailRange] = useState([0, 2]); // Initially display 3 thumbnails at a time
  
    const handleThumbnailClick = (index) => {
      setCurrentIndex(index);
      updateThumbnailRange(index);
    };
  
    const updateThumbnailRange = (clickedIndex) => {
      // Calculate the new range based on the clicked thumbnail index
      const newStartIndex = Math.max(0, clickedIndex - 1);
      const newEndIndex = Math.min(images?.length - 1, newStartIndex + 2);
  
      setThumbnailRange([newStartIndex, newEndIndex]);
    };
  
    return (
      <div  style={{ ...styles.container, ...style }}>
        <div  style={styles.imageContainer}>
          <div  style={styles.thumbnails}>
            {images?.slice(thumbnailRange[0], thumbnailRange[1] + 1)?.map((item, index) => (
              <div
                key={index + thumbnailRange[0]} // Key should be unique
                className={`thumbnail ${index + thumbnailRange[0] === currentIndex ? 'active' : ''}`}
                style={{
                  ...styles.thumbnail,
                  ...(index + thumbnailRange[0] === currentIndex && styles.activeThumbnail),
                }}
                onClick={() => handleThumbnailClick(index + thumbnailRange[0])}
              >
                <img src={item?.url} alt={`Thumbnail ${index + thumbnailRange[0]}`} height="50px" width="50px" />
              </div>
            ))}
            <div  style={styles.imageCounter}>
              {currentIndex + 1} / {images?.length} 
            </div>
          </div>
          {images?.map((item, index) => (
            <img
              key={index}
              src={item?.url}
              alt={`Image ${index}`}
              style={{
                ...styles.mainImage,
                display: index === currentIndex ? 'block' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CarouselWithThumbnails;
