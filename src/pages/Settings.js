import React from "react";

function Settings() {
    return (
        <section style={styles.container}>
            <h1>Settings</h1>
            <p>Stuff</p>
            <p>Stuff</p>
        </section>
    );
}
export default Settings;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '99vh'
    }
}