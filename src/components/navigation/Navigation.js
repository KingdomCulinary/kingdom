import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <nav>
            <ul className={classes.navigation__ul}>
                <li className={classes.navigation__ul__li}>
                    <Link to="/home">Home</Link>
                </li>
                <li className={classes.navigation__ul__li}>
                    <Link to="/reservation">Reservation</Link>
                </li>
                <li className={classes.navigation__ul__li}>
                    <Link to="/menu">Menu</Link>
                </li>
                <li className={classes.navigation__ul__li}>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li className={classes.navigation__ul__li}>
                    <Link to="/recipe">Recipe</Link>
                </li>
                <li className={classes.navigation__ul__li}>
                    <Link to="/shop">Shop</Link>
                </li>
                <li className={classes.navigation__ul__li}>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;