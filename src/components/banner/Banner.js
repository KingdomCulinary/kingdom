import React from "react";
import SrchComp from "../button/Search";
import Logo from "../../images/logo.jpg"
import { GrNotification } from "react-icons/gr";

//Dummy 
const Banner = (props) => {
    return (
        <header style={styles.container}>
            <img src={Logo} alt="logo" />
            <h1 style={styles.title}>{props.Page}</h1>
            <SrchComp />
            <span>
                <GrNotification style={styles.space} />
                <img src={props.tNail} alt={props.alt} style={styles.pic} />
            </span>
        </header>
    )
}
export default Banner;

//Style the header here
// Use flex

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: '1%',
        alignContent: 'center'
    },
    title: {
        marginTop: '0rem'
    },
    pic: {
        marginTop: '0rem'
    },
    space: {
        paddingRight: '1rem'
    },
}