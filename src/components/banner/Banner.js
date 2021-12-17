import React from "react";
import Logo from "../../images/KC_logo.png";
import classes from "./Banner.module.scss";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

//Dummy 
const Banner = (props) => {
    return (
        <header className={classes.container}>
            <img src={Logo} alt="logo" />
            <div className={classes.banner__cart__menu}>
                <RiShoppingCartLine className={classes.cart} />
                <GiHamburgerMenu className={classes.menu} />
            </div>
        </header>
    )
}
export default Banner;
