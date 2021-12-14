import React from 'react'
import { Bar } from 'react-chartjs-2';

function ChartMed2() {
    return (
        <article style={styles.card}>
            <Bar data={data} options={options} style={styles.cSize} />
        </article>
    )
}

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
        },
        {
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgb(54, 162, 235)',
            stack: 'Stack 0',
        },
        {
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 1',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

export default ChartMed2

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        minHeight: '20%',
        background: 'white',
        marginRight: '1rem',
        marginBottom: '1rem',
    },
    cSize: {
        width: '30rem',
        // height: '50rem',
    }
}