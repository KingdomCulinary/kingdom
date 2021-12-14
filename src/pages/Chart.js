import React from "react";

function Chart() {
    return (
        <section style={styles.container}>
            <h1>Chart</h1>
            <p>Stuff</p>
            <p>Stuff</p>
        </section>
    );
}
export default Chart;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '99vh'
    }
}