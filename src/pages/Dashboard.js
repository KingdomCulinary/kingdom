import React from "react";
import Banner from "../components/banner/Banner";
import PostCard from "../components/cards/PostCard";

function Dashboard() {
    return (
        <div>
            <Banner Page="Dashboard" />
            <main style={styles.mainContainer}>
                <PostCard id="Paul" />
                <PostCard id="Sam" />
                <PostCard id="Tom" />
            </main>
        </div>
    );
}
export default Dashboard

const styles = {
    mainContainer: {
        display: "flex",
        height: "100%"
    },
    secContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        justifyContent: "space-between"
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '1',
        width: '100%',
        flex: '1'
    },
}