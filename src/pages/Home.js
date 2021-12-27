import React from "react";
import Banner from "../components/banner/Banner";
import ReadyBtn from "../components/button/ReadyBtn";
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
            <ReadyBtn btnText="Ready To Book" />
                <PostCard />
            </main>

        </div>
    );
}
export default Home

