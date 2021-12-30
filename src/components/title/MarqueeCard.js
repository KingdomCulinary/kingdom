import React from "react";
import classes from "./MarqueeCard.module.scss";

function MarqueeCard() {
    return (
        <h2>
            <span className={classes.marqueeTitle}>
                Chef
            </span>
            <span className={classes.marqueeName}>
                Tony McClendon
            </span>
        </h2>
    );
}

export default MarqueeCard