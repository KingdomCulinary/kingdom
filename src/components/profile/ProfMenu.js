import React from "react";
import { MdPerson } from "react-icons/md";
import classes from "./Profile.module.scss";

const ProfMenu = (props) => {
    return (
        <div className={classes.container}>
            <MdPerson />
            <h5>{props.usrName}</h5>
        </div>
    );
};
export default ProfMenu;
