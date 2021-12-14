import React from 'react';
import { Line } from 'react-chartjs-2';


function ChartLineSm() {
    return (
        <article style={styles.card}>
            <Line data={data} style={styles.cSize} />
        </article>
    )
}

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            data: [6, 7, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

export default ChartLineSm

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        minHeight: '10%',
        background: 'white',
        marginRight: '1rem',
        marginBottom: '1rem',
    },
    cSize: {
        width: '20rem'
    }
}