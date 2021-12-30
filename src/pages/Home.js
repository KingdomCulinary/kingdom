import React from "react";
import Banner from "../components/banner/Banner";
import ReadyBtn from "../components/button/ReadyBtn";
import MarqueeCard from "../components/title/MarqueeCard"
import Loop from "../../src/video/union_market.mp4";
import Chef from "../../src/images/IMG_0323.jpg";
import classes from "./Home.module.scss";
import CarouselPlayer from "../components/carousel/CarouselPlayer";
import TitleCard from "../components/title/TitleCard";
import ChefCard from "../components/cards/ChefCard";

function Home() {
    return (
        <div>
            <video autoPlay loop muted className={classes.player}>
                <source src={Loop} type="video/mp4" />
            </video>
            <main>
                <Banner Page="Home" />
                <ReadyBtn btnText="Ready To Book" />
                <section className={classes.bio__section}>
                    <article className={classes.bioContent}>
                        <div className={classes.marquee__xpos}>
                            <MarqueeCard />
                        </div>
                        <figure>
                            <img src={Chef} alt="bio pic" className={classes.bioPic} />
                        </figure>
                    </article>
                    <article className={classes.bio__text}>
                        <ChefCard />
                    </article>
                </section>
                <section className={classes.caro__container}>
                    <TitleCard />
                    <CarouselPlayer />
                </section>
                {/* <section className={classes.chef__bio}>
                    <ChefCard />
                </section> */}
            </main>

        </div>
    );
}
export default Home

