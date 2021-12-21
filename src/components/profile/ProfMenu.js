import React from "react";
import { MdPerson } from "react-icons/md";
import classes from "./Profile.module.scss";
import { Link } from "react-router-dom";

const ProfMenu = (props) => {
    return (
        <div className={classes.profile}>
            <MdPerson className={classes.profile__icon} />
            <h5 className={classes.profile__user}>
            <Link to="/login">Log In</Link>
            </h5>
        </div>
    );
};
export default ProfMenu;
