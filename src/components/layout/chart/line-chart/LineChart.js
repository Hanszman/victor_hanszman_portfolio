// Imports
import './LineChart.css';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const options = {
        plugins: {
            legend: true
        }
    };
    const data = {
        labels: props.arrayLabels,
        datasets: props.arrayDataSets
    };

    return (
        <div className='lineChart col-4'>
            <p className='highText chartTitle'>{t(props.title)}:</p>
            <Line
                options={options}
                data={data}
            ></Line>
        </div>
    );
}

// Exportation
export default LineChart;