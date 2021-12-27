import React from "react";
import classes from "./ReadyBtn.module.scss";

const ReadyBtn = props => {
    return (
        <button className={classes.btnContent}>{props.btnText}</button>
    )
}
export default ReadyBtn;