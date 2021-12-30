import React from "react";
import classes from "./CarouselPlayer.module.scss";
import { Carousel } from 'react-carousel-minimal';
import One from "../../images/IMG_0337.jpg";
import Two from "../../images/IMG_0330.jpg";

function CarouselPlayer() {
    const data = [
        {
            image: One,
            caption: "test"
        },
        {
            image: Two,
            caption: "test2"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div className={classes.carousel__container}>
            <div style={{ textAlign: "center" }}>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="551px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={false}
                        dots={false}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="$primaryDark"
                        slideImageFit="contain"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default CarouselPlayer