import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import { GrShieldSecurity } from "react-icons/gr"

const SubHeader = () => {
    return(
        <nav style={styles.nav}>
                <p>
                    <MdOutlineEdit style={styles.space} />
                    <Link to="/editprofile">Edit Profile</Link>
                </p>
                <p>
                    <GrNotification style={styles.space} />
                    <Link to="/">Notifications</Link>
                </p>
                <p>
                    <GrShieldSecurity style={styles.space} />
                    <Link to="/">Password & Security</Link>
                </p>
            </nav>
    )
}

export default SubHeader

const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignSelf: 'stretch',
        fontSize: '1.5rem',
        padding: '2rem'
    },
    space: {
        paddingRight: '1rem'
    },
}