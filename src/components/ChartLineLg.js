import React from 'react';
import { Line } from 'react-chartjs-2';


function ChartLineLg() {
    return (
        <article>
            <Line data={data} style={styles.card} />
        </article>
    )
}

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

export default ChartLineLg

const styles = {
    card: {
        // boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        // minHeight: '10%',
        background: 'white',
        marginRight: '1rem',
        marginBottom: '1rem'
    }
}