import React from "react";
import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { BsBarChart } from "react-icons/bs"
import { FaWpforms } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { VscSettings } from "react-icons/vsc"
import { AiOutlineMail } from "react-icons/ai"

const Navigation = () => {
    return (
        <nav style={styles.nav}>
            <p style={styles.navPosition}>
                <AiOutlineHome style={styles.iconSpace} />
                <Link to="/dashboard">Dashboard</Link>
            </p>
            <p style={styles.navPosition}>
                <BsBarChart style={styles.iconSpace} />
                <Link to="/chart">Chart</Link>
            </p>
            <p style={styles.navPosition}>
                <FaWpforms style={styles.iconSpace} />
                <Link to="/form">Form</Link>
            </p>
            <p style={styles.navPosition}>
                <AiOutlineMail style={styles.iconSpace} />
                <Link to="/email">Email</Link>
            </p>
            <p style={styles.navPosition}>
                <CgProfile style={styles.iconSpace} />
                <Link to="/profile">Profile</Link>
            </p>
            <p style={styles.navPosition}>
                <VscSettings style={styles.iconSpace} />
                <Link to="/settings">Settings</Link>
            </p>
        </nav>
    )
}
export default Navigation;

const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignSelf: 'stretch',
        fontSize: '1.5rem',
        backgroundColor: 'black',
        padding: '2rem',
        color: 'white',
        height: '100vh'
    },
    iconSpace: {
        paddingRight: '1rem'
    },
    navPosition: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start'
    }
}