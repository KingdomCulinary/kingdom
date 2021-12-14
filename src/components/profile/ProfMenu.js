import React from "react";
import { GrUserSettings } from "react-icons/gr";

const ProfMenu = (props) => {
    return (
        <div style={styles.container}>
            <img src={props.smProfUrl} alt="pic" style={styles.icon} />
            <h5 style={styles.h5}>{props.usrName}</h5>
            <GrUserSettings style={styles.sprocket} />
        </div>
    );
};
export default ProfMenu;

const styles = {
    container: {
        display: 'flex',
        flexDirection: "row",
        paddingRight: '1rem',
    },
    sprocket: {
        position: 'relative',
        top: '.7rem',
    },
    h5: {
        position: 'relative',
        top: '-.7rem',
        paddingRight: '.5rem',
        width: '100px'
    },
    icon: {
        paddingRight: '.5rem',
    }
};
