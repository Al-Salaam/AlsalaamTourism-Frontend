import React, { useState } from 'react';
import { Card, Button } from 'antd';
import AinDubai from "../../../../images/ainDubai.png"

const { Meta } = Card;

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleButtonClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleMouseLeave = () => {
        if (isFlipped) {
            setIsFlipped(false);
        }
    };

    return (
        <div
            style={{
                width: 900,
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
                        maxWidth: '600px',
                        height: '400px',
                        position: 'relative',
                        backgroundImage: `url(${AinDubai})`, backgroundPosition: 'center', backgroundSize: 'cover',
                    }}
                >
                    <h3
                        style={{
                            position: 'absolute',
                            color: '#fff',
                            padding: '5px',
                            top: '0',
                            left: '0',
                        }}
                    >
                        Top Left
                    </h3>
                    <h3
                        style={{
                            position: 'absolute',
                            backgroundColor: '#3498db',
                            color: '#fff',
                            padding: '5px',
                            top: '0',
                            right: '0',
                        }}
                    >
                        Top Right
                    </h3>
                    <h3
                        style={{
                            position: 'absolute',
                            backgroundColor: '#3498db',
                            color: '#fff',
                            padding: '5px',
                            bottom: '0',
                            left: '0',
                        }}
                    >
                        <Button
                        onClick={handleButtonClick}
                        style={{
                        }}
                    >
                            Flip
                        </Button>
                    </h3>
                    <h3
                        style={{
                            position: 'absolute',
                            backgroundColor: '#3498db',
                            color: '#fff',
                            padding: '5px',
                            bottom: '0',
                            right: '0',
                        }}
                    >
                         Bottom Right
                    </h3>
                </div>



            )}

            {isFlipped && (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        transform: 'rotateY(180deg)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "red",
                        textAlign: 'center',
                        visibility: isFlipped ? 'visible' : 'hidden',
                    }}
                >
                    <h2>Hello side 2</h2>
                </div>
            )}
        </div>
    );
};

export default FlipCard;
