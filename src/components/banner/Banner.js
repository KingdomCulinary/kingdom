import React from "react";
import Logo from "../../images/logo.jpg"
import classes from "./Banner.module.scss";
import { RiShoppingCartLine } from "react-icons/ri";
import ProfMenu from "../../components/profile/ProfMenu";

//Dummy 
const Banner = (props) => {
    return (
        <header className={classes.container}>
            <img src={Logo} alt="logo" />
            <ProfMenu usrName="Log In" />
            <RiShoppingCartLine className={classes.cart} />
        </header>
    )
}
export default Banner;
