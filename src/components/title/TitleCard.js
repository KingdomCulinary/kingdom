import React from "react";
import classes from "./TitleCard.module.scss";

function TitleCard() {
    return (
        <h2>
            <span className={classes.marqueeName}>
                Menu
            </span>
        </h2>
    );
}

export default TitleCard