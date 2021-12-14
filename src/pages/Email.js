import React from "react";

function Email() {
    return (
        <section style={styles.container}>
            <h1>Email</h1>
            <p>Stuff</p>
            <p>Stuff</p>
        </section>
    );
}
export default Email;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '99vh'
    }
}