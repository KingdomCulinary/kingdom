import React from "react";

const Enform = props => {
    return (
        <form method="get" style={styles.container} onSubmit={props.addPost} noValidate>
            <p style={styles.entPosition}>
                <input type="text" 
                        style={styles.entry} 
                        onChange={props.userInput1} 
                        name="pTitle" 
                        value={props.pTitle} 
                        placeholder="Title" 
                        required
                />
            </p>
            <img src={props.profileUrl} alt="pic" style={styles.avatarPos} />
            <h5 style={styles.h5}>{props.profileMsg}</h5>
            <p style={styles.entPosition}>
                <input type="text" 
                        style={styles.desc} 
                        onChange={props.userInput2} 
                        name="pDesc" 
                        value={props.pDesc} 
                        placeholder="Description" 
                        required
                        />
            </p>
            <button type="submit" style={styles.frmBtn}>Submit</button>
        </form>
    )
}
export default Enform;
//Style just the form
const styles = {
    container: {
        width: "748px",
        paddingBottom: "1.4rem",
        backgroundColor: '#ebebeb',
        padding: '2%',
        borderRadius: '2%'
    },
    entPosition: {
        paddingBottom: "2rem"
    },
    entry: {
        width: '95%',
        marginLeft: "1.4rem",
        marginTop: "1.4rem",
        paddingBottom: "1.4rem",
        backgroundColor: "#f5f5f5"
    },
    desc: {
        width: '95%',
        marginLeft: "1.4rem",
        marginTop: "-1rem",
        paddingBottom: "1.4rem",
        backgroundColor: "#f5f5f5"
    },
    frmBtn: {
        width: "10rem",
        marginLeft: "1.4rem",
        padding: ".2rem",
        backgroundColor: "#ebebeb"
    },
    avatarPos: {
        marginLeft: "1.4rem",
        marginTop: "4rem",
    },
    h5: {
        position: 'relative',
        top: '-9rem',
        right: "-14rem",
        paddingRight: '.5rem',
        fontSize: '1.6rem'
    },
};