import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function ChartDoughnut() {
    return (
        <article style={styles.card}>
            <Doughnut data={data} style={styles.cSize} />
        </article>
    )
}

export default ChartDoughnut

const data = {
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

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
        width: '20rem',
        // height: '30rem',
    }
}