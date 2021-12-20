import React from "react";
import Logo from "../../images/KC_logo.png";
import classes from "./Banner.module.scss";
import Navigation from "./../navigation/Navigation";
import ProfMenu from "./../profile/ProfMenu"
import { RiShoppingCartLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

//Dummy 
const Banner = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <img src={Logo} alt="logo" />
                <Navigation />
                <div className={classes.header__cart__menu}>
                    <RiShoppingCartLine className={classes.header__cart} />
                    <ProfMenu usrName="Log In" className={classes.header__profile} />
                    <GiHamburgerMenu className={classes.header__menu} />
                </div>
            </div>
        </header>
    )
}
export default Banner;
