import React from "react";
import Banner from "../components/banner/Banner";
import ReadyBtn from "../components/button/ReadyBtn";
import MarqueeCard from "../components/cards/MarqueeCard"
import Loop from "../../src/video/union_market.mp4";
import Chef from "../../src/images/bio.jpg";
import classes from "./Home.module.scss";
import PostCard from "../components/cards/PostCard";
import CarouselPlayer from "../components/carousel/CarouselPlayer";

function Home() {
    return (
        <div>
            <video autoPlay loop muted className={classes.player}>
                <source src={Loop} type="video/mp4" />
            </video>
            <main>
                <Banner Page="Home" />
                <ReadyBtn btnText="Ready To Book" />
                <section className={classes.bioContent}>
                    <MarqueeCard />
                    <figure>
                        <img src={Chef} alt="bio pic" className={classes.bioPic} />
                    </figure>
                    <PostCard />
                </section>
                <section className={classes.caro__container}>
                    <CarouselPlayer />
                </section>

            </main>

        </div>
    );
}
export default Home

