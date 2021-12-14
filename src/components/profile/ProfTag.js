import React from "react";

//Dummy
const ProfTag = (props) => {
    return (
        <div style={styles.container}>
            <div style={styles.icon}>
                <img src={props.tagProfUrl} alt="pic" />
            </div>
            <h5 style={styles.h5}>{props.usrName}</h5>
        </div>
    );
};
export default ProfTag;

const styles = {
    container: {
        display: 'flex',
        flexDirection: "row",
        paddingRight: '1rem',
    },
    h5: {
        position: 'relative',
        top: '2.5rem',
        paddingRight: '.5rem',
        fontSize: '1.6rem'
    },
    icon: {
        marginTop: "4rem",
        paddingRight: '.5rem',
    }
};
