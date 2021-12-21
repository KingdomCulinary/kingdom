import React from "react";
import Banner from "../components/banner/Banner";
import Loop from "../../src/video/union_market.mp4";
import classes from "./Home.module.scss";
import PostCard from "../components/cards/PostCard";

function Home() {
    return (
        <div>
            <video autoPlay loop muted className={classes.player}>
                <source src={Loop} type="video/mp4" />
            </video>
            <main>
            <Banner Page="Home" />
                <PostCard />
            </main>

        </div>
    );
}
export default Home

