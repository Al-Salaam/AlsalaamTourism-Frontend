import React, { useState } from 'react';
import { Card, Button, Rate } from 'antd';
import PrimaryButton from '../buttons/primary';
import { useMediaQuery } from 'react-responsive';


const { Meta } = Card;

const FlipCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleButtonClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleMouseLeave = () => {
        if (isFlipped) {
            setIsFlipped(false);
        }
    };
    const isSmallestScreen = useMediaQuery({ maxWidth: 430 });

    const cardWidth = props.width || (isSmallestScreen ? "90%" : "70%");

    return (
        <div
            style={{
                width: cardWidth,
                height: 400,
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
            onMouseLeave={handleMouseLeave}
        >

            {!isFlipped && (


                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        maxWidth: '100%',
                        height: '400px',
                        position: 'relative',
                        backgroundImage: `url(${props.imageSrc})`, backgroundPosition: 'center', backgroundSize: 'cover',
                        
                    }}
                >
                    <h3
                        style={{
                            position: 'absolute',
                            color: '#fff',
                            padding: '3%',
                            top: '0',
                            left: '0',
                        }}
                    >
                        {props.title1}
                    </h3>
                    <h3
                        style={{
                            position: 'absolute',
                            color: '#fff',
                            padding: '3%',
                            top: '0',
                            right: '0',
                        }}
                    >
                        
                        <div><Rate count={props.rate === 0 ? 1 : props.rate} defaultValue={props.rate === 0 ? 1 : props.rate}/> &nbsp; {props.rate}</div>
                    </h3>
                    <h3
                        style={{
                            position: 'absolute',
                            color: '#fff',
                            padding: '3%',
                            bottom: '0',
                            left: '0',
                        }}
                    >
                        <Button
                            onClick={handleButtonClick}
                            style={{
                            }}
                        >
                        <strong>+</strong>
                        </Button>
                        <h4>{props.feature && "featured"}</h4>  
                    </h3>
                    

                </div>



            )}

            {isFlipped && (
                <div
                    style={{
                        transform: 'rotateY(180deg)',
                        display: 'flex',
                        flexDirection: 'column',
                        visibility: isFlipped ? 'visible' : 'hidden',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        maxWidth: '100%',
                        height: '400px',
                        position: 'relative',
                        background:"#F5F5F5",
                        color:"black",
                        fontFamily: 'Ubuntu'
                    }}
                >
                    <h3
                        style={{
                            position: 'absolute',
                            padding: '3%',
                            top: '0',
                            left: '0',
                        }}
                    >
                        {props.title1}
                    </h3>
                    <h3
                        style={{
                            position: 'absolute',
                            padding: '3%',
                            top: '0',
                            right: '0',
                        }}
                    >
                        
                        <div><Rate count={props.rate === 0 ? 1 : props.rate} defaultValue={props.rate === 0 ? 1 : props.rate} /> &nbsp; {props.rate}</div>
                    </h3>

                    <h3 style={{margin:"auto",padding:"5%"}}>{props.shortdescription}</h3>
                    
                    <div
                        style={{
                            position: 'absolute',
                            padding: '3%',
                            bottom: '0',
                            left: '0',
                            display:"flex",
                            alignItems:"flex-start",
                            flexDirection:"column"
                        }}
                    >
                        <p>Price (as per your day selected)</p>
                        <h3 style={{color:"#0C111F"}}>{props.price}.00 AED</h3>
                    </div>
                    <h3
                        style={{
                            position: 'absolute',
                            padding: '3%',
                            bottom: '0',
                            right: '0',
                            
                        }}
                    >
                        
                        <PrimaryButton title={"Book Now"} width={"150px"}/>
                    </h3>

                </div>
            )}
        </div>
    );
};

export default FlipCard;
