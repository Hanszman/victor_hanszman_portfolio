// Imports
import './BarChart.css';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const options = {};
    const data = {
        labels: props.arrayLabels,
        datasets: props.arrayDataSets
    };

    return (
        <div className='barChart col-4'>
            <p className='highText chartTitle'>{t(props.title)}:</p>
            <Bar
                options={options}
                data={data}
            ></Bar>
        </div>
    );
}

// Exportation
export default BarChart;