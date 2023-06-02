// Imports
import './LineChart.css';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

// Component
function LineChart(props) {
    // Declarations
    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                min: 3,
                max: 6
            }
        }
    };
    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
            {
                label: 'Sales of the Week',
                data: [6, 3, 9],
                backgroundColor: 'aqua',
                borderColor: 'black',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4
            }
        ]
    };

    return (
        <div className='lineChart'>
            <Line
                options={options}
                data={data}
            ></Line>
        </div>
    );
}

// Exportation
export default LineChart;