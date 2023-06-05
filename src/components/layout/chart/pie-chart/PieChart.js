// Imports
import './PieChart.css';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Colors
);

// Component
function PieChart(props) {
    // Declarations
    const options = {};
    const data = {
        labels: ['One', 'Two', 'Three'],
        datasets: [
            {
                data: [3, 6, 9],
            }
        ]
    };

    return (
        <div className='pieChart'>
            <Pie
                options={options}
                data={data}
            ></Pie>
        </div>
    );
}

// Exportation
export default PieChart;