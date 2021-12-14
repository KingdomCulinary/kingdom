import React from "react";

function Form() {
    return (
        <section style={styles.container}>
            <h1>Form</h1>
            <p>Stuff</p>
            <p>Stuff</p>
        </section>
    );
}
export default Form;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '99vh'
    }
}