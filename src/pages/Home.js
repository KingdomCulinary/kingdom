import React from "react";
import Banner from "../components/banner/Banner";
import PostCard from "../components/cards/PostCard";

function Home() {
    return (
        <div>
            <Banner Page="Dashboard" />
            <main style={styles.mainContainer}>
                <PostCard id="Paul" />
                <PostCard id="Sam" style={styles.secContainer} />
                <PostCard id="Tom" />
            </main>
        </div>
    );
}
export default Home

const styles = {
    mainContainer: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",

    },
    secContainer: {
        display: 'flex: 2'
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