import React from "react";
import Banner from "../components/banner/Banner";
import Navigation from "../components/navigation/Navigation";
import ChartLineLg from '../components/ChartLineLg';
import ChartDoughnut from '../components/ChartDoughnut';
import ChartMed from '../components/ChartMed';
import ChartMed2 from '../components/ChartMed2';
import ChartLong from '../components/ChartLong';
import ChartBar from '../components/ChartBar';
import ChartLineSm from '../components/ChartLineSm';

function Dashboard() {
    return (
        <div>
            <Banner Page="Dashboard" />
            <main style={styles.mainContainer}>
                <Navigation style={styles.nav} />
                <section style={styles.secContainer}>
                    <div style={styles.column}>
                        <ChartLineLg />
                        <article style={styles.row}>
                            <ChartDoughnut />
                            <ChartLineSm />
                            <ChartBar />
                        </article>
                        <article style={styles.row}>
                            <ChartMed />
                            <ChartMed2 />
                        </article>
                    </div>
                    <div style={styles.column}>
                        <ChartLong />
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Dashboard

const styles = {
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
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