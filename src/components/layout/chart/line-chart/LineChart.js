// Imports
import './LineChart.css';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Colors
);

// Component
function LineChart(props) {
    // Declarations
    const options = {
        plugins: {
            legend: true
        }
    };
    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
            {
                label: 'Sales of the Week',
                data: [6, 3, 9],
                fill: true,
                tension: 0.4
            }
        ]
    };

    return (
        <div className='lineChart col-4'>
            <p className='highText chartTitle'>{props.title}:</p>
            <Line
                options={options}
                data={data}
            ></Line>
        </div>
    );
}

// Exportation
export default LineChart;