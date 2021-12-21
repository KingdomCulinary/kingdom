import React from "react";
import Banner from "../components/banner/Banner";
import classes from "./Home.module.scss";
import { Player } from "video-react";

function Home() {
    return (
        <div>
            <Banner Page="Home" />
            <main>
                <video>
                    <Player />
                </video>
            </main>
        </div>
    );
}
export default Home

