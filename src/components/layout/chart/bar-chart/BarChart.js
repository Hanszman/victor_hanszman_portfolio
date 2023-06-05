// Imports
import './BarChart.css';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Colors
);

// Component
function BarChart(props) {
    // Declarations
    const options = {};
    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
            {
                label: '369',
                data: [3, 6, 9],
                borderWidth: 1
            },
            {
                label: '333',
                data: [3, 3, 3],
                borderWidth: 1
            },
        ]
    };

    return (
        <div className='barChart'>
            <Bar
                options={options}
                data={data}
            ></Bar>
        </div>
    );
}

// Exportation
export default BarChart;